import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, description, align, image, link, deployedLink }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col`}
    >
      {/* Text Section */}
      <div>
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <h2
          className={`text-xl font-thin text-white font-special sm:text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}
        >
          {description}
        </h2>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}
        >
          
          Github <BsFillArrowUpRightCircleFill />
        </a>
      </div>

      {/* Image Section */}
      <div className="relative max-h-[220px] max-w-[400px] rounded-xl overflow-hidden border border-white group">
        <img src={image} alt="website" className="w-full h-full object-cover" />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-cyan opacity-50 group-hover:opacity-0 transition-all duration-500"></div>
        
        {/* Deployed Link Icon */}
        {deployedLink && (
          <a
            href={deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                       text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
          >
            <BsFillArrowUpRightCircleFill />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default SingleProject;
