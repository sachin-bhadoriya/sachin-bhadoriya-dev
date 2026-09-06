import './styles/about.scss'

const About = () => {
  return (
    <section data-aos="fade" className='p-about-m-c container' id='about'>
      <h2>ABOUT ME</h2>
      <article className='p-about-article-c'>
        <p>I’m a passionate Frontend Developer focused on creating smooth, responsive, and high-performance web experiences. I enjoy turning ideas into interactive digital products with clean code and modern design principles.
          <br /><br /> I work with technologies like HTML, CSS, JavaScript, React.js, Tailwind CSS, and modern frontend tools to build scalable applications that provide great user experiences across all devices.
          <br /><br /> I’m always exploring new technologies and improving my skills to stay updated with the latest trends in web development.</p>
        <table data-aos="zoom-in">
          <thead>
            <tr>
              <td>Degree Name</td>
              <td>Institution Name</td>
              <td>Duration</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bachelor’s in Computer Science</td>
              <td>Jiwaji University, Gwalior, M.P.</td>
              <td>2023 – 2026</td>
            </tr>
            <tr>
              <td>XII (CBSE)</td>
              <td>Jawahar Navodaya Vidyalaya, Gwalior, M.P.</td>
              <td>2020 – 2021</td>
            </tr>
            <tr>
              <td>X (CBSE)</td>
              <td>Jawahar Navodaya Vidyalaya, Gwalior, M.P.</td>
              <td>2018 – 2019</td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  )
}

export default About