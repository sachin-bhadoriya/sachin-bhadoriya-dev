import React, { useEffect } from 'react'
import VantaBackground from './assets/VantaBackground'
import { Route, Routes } from 'react-router-dom'
import Navbar from './assets/Navbar'
import Home from "./pages/Home"
// import About from "./pages/About"
// import Skills from "./pages/Skills"
// import Experience from "./pages/Experience"
// import Project from "./pages/Project"
// import Contact from "./pages/Contact"
// import Resume from "./pages/Resume"
import PageNotFound from "./pages/PageNotFound"
// import BlogsList from './pages/BlogsList'
import 'react-loading-skeleton/dist/skeleton.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {

  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: false 
  });
}, []);

  return (
    <div className="app">

      {/* Background */}
      <div className="background">
        <VantaBackground />
      </div>

      {/* Main Content */}
      <div className="content">
        <Navbar />

        <div className="pages">
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/the-story' element={<About />} />
            <Route path='/my-toolkit' element={<Skills />} />
            <Route path='/journey' element={<Experience />} />
            <Route path='/crafted-projects' element={<Project />} />
            <Route path='/lets-connect' element={<Contact />} />
            <Route path='/resume-hub' element={<Resume />} />
            <Route path='/blog' element={<BlogsList />} /> */}
            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </div>
      </div>

    </div>
  )
}

export default App
