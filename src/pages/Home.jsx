import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = ({ staticContext }) => {
  console.log(staticContext)

  const [data, setData] = useState(staticContext && staticContext.initialState)

  useEffect(() => {
    data || Home.getInitialState().then(setData)
  }, [data])

  return (
    <div>
      <h2>Home page</h2>
      <ul>
        {Array.isArray(data) && data.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}

Home.getInitialState = () => {
  return axios.get('https://locally.uieee.com/categories').then(res => res.data)
}

export default Home