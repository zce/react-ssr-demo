import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'
import express from 'express'

import App from './App'

const htmlTemplate = inner => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React App</title>
</head>
<body>
  <div id="root">${inner}</div>
</body>
</html>
`.trim()

const app = express()

app.use(express.static(__dirname))

app.get('*', (req, res) => {
  const appHtml = renderToString(<Router location={req.url}><App /></Router>)
  const html = htmlTemplate(appHtml)
  res.send(html)
})

app.listen(2048, () => console.log('server is ready: http://localhost:2048'))