import React, { lazy, Suspense } from 'react';
import './styles/project.scss';
import Skeleton from 'react-loading-skeleton';
const ProjectCard = lazy(() => import("../assets/ProjectCard"))

const projectsData = [
  {
    title: "Hotel Booking Website",
    category: "Full Stack Project",
    description: "A comprehensive hotel management platform featuring real-time room booking, availability checks, secure payment gateway integration, and an intuitive user dashboard.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=500&auto=format&fit=crop",
    tags: ["React", "NodeJS", "MongoDB", "Express"],
    liveLink: "https://hill-view-escape-frontend-only.vercel.app/",
    githubLink: "https://github.com/sachin-bhadoriya/Hill_View_Escape-Frontend-only"
  },
  {
    title: "Secure Notes Application",
    category: "Full Stack Project",
    description: "A full-stack note-taking app featuring robust JWT authentication. It ensures complete privacy with isolated databases/routes so users can manage only their separate notes.",
    img: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=500&auto=format&fit=crop",
    tags: ["React", "NodeJS", "MongoDB", "JWT"],
    liveLink: "https://notes-app-blond-seven.vercel.app/",
    githubLink: "https://github.com/sachin-bhadoriya/Notes-app"
  },
  {
    title: "Auth & User Management API",
    category: "Backend Project",
    description: "A secure backend service focusing on complete user lifecycle: Login, Signup routes with password encryption (bcrypt), and a secure Change Password feature.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&auto=format&fit=crop",
    tags: ["NodeJS", "ExpressJS", "MongoDB", "JWT", "Postman"],
    liveLink: "https://github.com/sachin-bhadoriya/Auth-Routes",
    githubLink: "https://github.com/sachin-bhadoriya/Auth-Routes"
  },
  {
    title: "Food Recipe Mobile App",
    category: "React Native Project",
    description: "A cross-platform mobile application for food lovers. Users can browse categories, search for custom recipes, view step-by-step cooking guides, and save favorites.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=500&auto=format&fit=crop",
    tags: ["React Native", "Context API", "Recipe API"],
    liveLink: "https://drive.google.com/drive/folders/16mbmgljy_wP2eHfQUZqHc5nDhO-Ig5Wx",
    githubLink: "https://github.com/sachin-bhadoriya/ReactNative-FoodRecipe_App"
  },
  {
    title: "Analytics & Admin Dashboard",
    category: "Frontend Project",
    description: "A modern responsive admin dashboard showcasing complex data data-visualizations, user management tables, interactive charts, and a dark/light mode toggle.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop",
    tags: ["React", "SCSS", "ChartJS", "Material UI"],
    liveLink: "https://dashboard-rouge-six-98.vercel.app/",
    githubLink: "https://github.com/sachin-bhadoriya/dashboard"
  },
  {
    title: "Freelancing Marketplace UI",
    category: "Frontend Project",
    description: "A fully responsive marketplace interface for freelancers and clients. Includes interactive project bidding sections, service listings, and custom filter bars.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop",
    tags: ["HTML", "CSS", "SCSS", "JavaScript"],
    liveLink: "https://tecklog.vercel.app/",
    githubLink: "https://github.com/sachin-bhadoriya/Tecklog"
  },
  {
    title: "Personal Portfolio Website",
    category: "Frontend Project",
    description: "My personal developer portfolio website designed with a sleek glassmorphic theme. Highlights my frontend, backend skills, projects, and career journey with smooth animations.",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=500&auto=format&fit=crop",
    tags: ["React", "SCSS", "Three.JS"],
    liveLink: "https://sachin-bhadoriya-dev.vercel.app/",
    githubLink: "https://github.com/sachin-bhadoriya/-sachin-bhadoriya-dev"
  }
];

const Projects = () => {
  return (
    <section data-aos="fade" className='p-projects-m-c container' id='projects'>
      <h2>PROJECTS</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <Suspense fallback={<Skeleton baseColor='gray' height={400} borderRadius={20} />}>
            <ProjectCard key={index} {...project} />
          </Suspense>
        ))}
      </div>
    </section>
  );
};

export default Projects;
