import { useState } from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar.jsx";
import {Projects} from "./Pages/Projects/Projects.jsx";
import {Home} from "./Pages/Home/Home.jsx";
import {About} from "./Pages/About/About.jsx";
import  {Skills} from "./Pages/Skills/Skills.jsx";


function App() {


  return (
    <>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/About' element={<About />} />
          {/*<Route path='/' element={<Skills/>} />*/}
          <Route path='/Skills' element={<Skills/>} />



      </Routes>


    </>
  )
}

export default App
