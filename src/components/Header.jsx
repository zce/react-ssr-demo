import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <header>
    <h1>React SSR</h1>
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link>
    </nav>
  </header>
)