import React from 'react'
import Header from "./components/layouts/Navebar";
import Home from "./components/sections/Home";
import Portfolio from "./components/sections/Portfolio";
import Projects from "./components/sections/Projects";
import AboutMe from "./components/sections/About me";
import Contact from './components/sections/Contacts';

export default function App() {

  return (
    <div>
    <Header/> 
    <Home/>
    <Portfolio/>
    <Projects/>
    <AboutMe/>
    <Contact/>
    </div>
  )
}
