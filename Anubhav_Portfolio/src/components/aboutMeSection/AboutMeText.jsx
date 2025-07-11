import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
       Hi, I’m Anubhav Shivhare, a MERN Stack Developer passionate about solving problems and building scalable web applications. I work with MongoDB, Express.js, React, and Node.js, 
       and have hands-on experience with REST APIs, Tailwind CSS, and Redux. I’m also skilled in databases like MongoDB and MySQL, and actively explore system design concepts including 
       LLD, HLD, caching, scalability, and load balancing to create efficient, production-ready solutions.


      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
