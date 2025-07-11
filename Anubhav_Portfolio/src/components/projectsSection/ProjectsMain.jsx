import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Resume Builder",
    description: "A full-stack web application for creating, customizing, and downloading professional resumes. Users can select from multiple templates, choose color palettes, upload profile and project photos, and download their resume as a PDF.",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://github.com/AnubhavShivhare2003/Resume-Builder-Project",
    deployedLink:"https://resume-builder-project-f3yn.vercel.app/"
  },
  {
    name: "Ai Code Reviewer",
    description: "A modern web application that provides intelligent code review using Google's Gemini AI. Built with React frontend and Node.js backend, this tool helps developers improve their code quality by providing detailed, professional code reviews.",
    align: "right",
    image: "/images/website-img-2.jpg",
    link: "https://github.com/AnubhavShivhare2003/Resume-Builder-Project",
    deployedLink:"https://resume-builder-project-f3yn.vercel.app/"
  },
  {
    name: "Virtual Classroom",
    description: "This project aims to replicate the traditional classroom experience by enabling real-time collaboration between students and teachers.",
    align: "left",
    image: "/images/website-img-3.jpg",
    link: "https://github.com/vishal7it/B42_WEB_062_Code-Crafters",
    deployedLink:"https://learningsphere.netlify.app/"
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              description={project.description}
              align={project.align}
              image={project.image}
              deployedLink={project.deployedLink}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
