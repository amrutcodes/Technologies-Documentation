import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home.jsx'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import ReactPage from './pages/React.jsx'
import ExpressPage from './pages/Expressjs.jsx'
import NodeJsPage from './pages/NodeJs.jsx'
import TailwindPage from './pages/TailwindCss.jsx'
import GitHubPage from './pages/GitHub.jsx'
import MongoDBPage from './pages/MongoDb.jsx'
import JavaPage from './pages/Java.jsx'
import SpringBootPage from './pages/SpringBoot.jsx'
import JavaScriptPage from './pages/Javascript.jsx'
import PostmanPage from './pages/Postman.jsx'


function App() {

  return (
    <Router>
      <Routes>

        
        <Route path='/' element={<Home/>}/>
        <Route path='/React' element={<ReactPage/>}/>
        <Route path='/ExpressJs' element={<ExpressPage/>}/>
        <Route path='/NodeJs' element={<NodeJsPage/>}/>
        <Route path='/TailwindCss' element={<TailwindPage/>}/>
        <Route path='/GitHub' element={<GitHubPage/>}/>
        <Route path='/MongoDb' element={<MongoDBPage/>}/>
        <Route path='/Java' element={<JavaPage/>}/>
        <Route path='/SpringBoot' element={<SpringBootPage/>}/>
        <Route path='/Javascript' element={<JavaScriptPage/>}/>
        <Route path='/Postman' element={<PostmanPage/>}/>

  
      </Routes>
    </Router>
  )
}

export default App
