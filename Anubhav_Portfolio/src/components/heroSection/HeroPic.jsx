import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center relative"
    >
      {/* Round image with blue background */}
      <div className="rounded-full bg-blue-500 p-2 border-4 border-white-700">

        <img
          src="/images/HexaPic.png"
          alt="Anubhav Shivhare"
          className="max-h-[350px] w-auto rounded-full object-cover"
        />
      </div>

      {/* Rotating Hexagon in background */}
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;