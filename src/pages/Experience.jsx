import React from 'react';
import './styles/experience.scss'; 

const experienceData = [
{
  role: "HTML Developer Trainee",
  company: "Alliance Web Solution Pvt. Ltd. (India Internets)",
  duration: "June 2026 - Present",
  description: "Working on Digital Oye's product website, multiple dashboards, and client websites using ReactJS and modern frontend technologies. Building responsive and reusable UI components, integrating REST APIs, implementing designs, fixing bugs, and optimizing applications for performance and usability.",
  icon: "🌐"
},
{
  role: "Frontend Developer Intern",
  company: "Tesselonix Pvt. Ltd.",
  duration: "May 2026 - June 2026",
  description: "Worked on frontend development for web applications using ReactJS and modern frontend technologies. Built responsive and reusable UI components, implemented designs, integrated APIs, fixed UI issues, and collaborated with the development team to improve website performance and user experience.",
  icon: "⚛️"
},
{
  role: "Freelance Frontend Developer",
  company: "Youthconnect Pvt. Ltd.",
  duration: "Nov 2025 - Apr 2026",
  description: "Developed and maintained responsive websites and web applications based on client requirements. Created reusable UI components, integrated APIs, implemented responsive designs, fixed bugs, and delivered user-friendly interfaces while ensuring performance and cross-device compatibility.",
  icon: "🚀"
},
];

const Experience = () => {
  return (
    <section data-aos="fade" className="p-experience-m-c container">
      <div className="experience-header">
        <h2>EXPERIENCE</h2>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {experienceData.map((exp, index) => {
          const positionClass = index % 2 === 0 ? "left-card" : "right-card";

          return (
            <div data-aos="zoom-in" className={`timeline-item ${positionClass}`} key={index}>
              <div className="timeline-dot"></div>

              <div className="experience-card">
                <div className="card-header">
                  <div className="icon-wrapper">{exp.icon}</div>
                  <div className="header-text">
                    <span className="duration">{exp.duration}</span>
                    <h3>{exp.role}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                </div>
                <p className="description">{exp.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Experience;
