import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Layout from './components/Layout.jsx'
import Repo from './components/Repo.jsx'
import Folowers from './components/Folowers.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='repo' element={<Repo/>}/>
      <Route path='followers' element={<Folowers/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
