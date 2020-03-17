import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter as Router, matchPath } from 'react-router-dom'

import express from 'express'

import App from './App'
import routes from './routes'

const htmlTemplate = root => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React SSR Demo</title>
  </head>
  <body>
    <div id="root">${root}</div>
    <script src="/client.js"></script>
  </body>
  </html>
`

const app = express()

app.use(express.static(__dirname))

app.get('*', (req, res) => {
  Promise.resolve()
    .then(() => {
      const matchedRoute = routes.find(route => matchPath(req.url, route))
      if (matchedRoute && typeof matchedRoute.component.getInitialState === 'function') {
        return matchedRoute.component.getInitialState()
      }
    })
    .then(state => {
      const root = renderToString(
        <Router location={req.url} context={{ initialState: state }}>
          <App />
        </Router>
      )
      const html = htmlTemplate(root).trim()
      res.send(html)
    })
})

app.listen(2048, () => console.log('server is ready: http://localhost:2048'))