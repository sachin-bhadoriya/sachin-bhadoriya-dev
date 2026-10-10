import { Link } from 'react-router-dom'
import './styles/home.scss'
import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Project'
import BlogsList from './BlogsList'
import Contact from './Contact'

const Home = () => {
  const url = "https://collection.cloudinary.com/dm0rfcoxl/e5207112049ef39face49db91dac2dc8"
  return (
    <>
      <section data-aos="fade" className='p-home-m-c container' id='home'>
        <img data-aos="zoom-in" src="https://res.cloudinary.com/dm0rfcoxl/image/upload/v1791653979/sachin-bhadoriya-pic_qfvr6g.png" alt="Illustration Image" fetchPriority='high' />
        <div className="p-home-d-c">
          <h6>Hello, I'm</h6>
          <h2>Sachin Bhadoriya</h2>
          <h4 className='title'>And I'm a Frontend Developer</h4>
          <p className='title'>Passionate about building web apps with great UI and real-world functionality. I blend design with code to create impactful digital experiences.</p>
          <div className="p-home-btn-c">
            <Link to="#projects"><button data-aos="zoom-in">View Projects</button></Link>
            <Link to="/Sachin_Bhadoriya_Frontend_Resume.pdf" download="Sachin_Bhadoriya_Frontend_Developer"><button data-aos="zoom-in">Download Resume</button></Link>
          </div>
        </div>
      </section>

      <About />

      <Skills />

      <Experience />

      <Projects />

      {/* <BlogsList /> */}

      <Contact />
    </>
  )
}

export default Home
