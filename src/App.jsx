import { useState } from 'react'
import './App.css'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {Projects} from "./Pages/Projects/Projects.jsx";
import {Home} from "./Pages/Home/Home.jsx";
import {About} from "./Pages/About/About.jsx";
import  {Skills} from "./Pages/Skills/Skills.jsx";
import {ProjectDetail} from "@/Pages/Project Detail/ProjectDetail.jsx";




function App() {


  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          {/*<Route path='/' element={<Skills/>} />*/}
          <Route path='/Skills' element={<Skills/>} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Projects/:projectid' element={<ProjectDetail />} />


      </Routes>


    </>
  )
}

export default App
