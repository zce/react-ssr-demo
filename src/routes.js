import Home from './pages/Home'
import About from './pages/About'

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About,
    exact: true
  }
]