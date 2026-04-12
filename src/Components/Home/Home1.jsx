import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
  
    <div
  id="Home"
  className="relative min-h-screen overflow-hidden flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-20 pt-24 text-white 
  bg-black md:bg-gradient-to-br md:from-[#0f172a] md:via-[#000c2c] md:to-[#2d3242]"
>
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-800/10 blur-[150px] rounded-full top-10 left-10"></div>

      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full bottom-10 right-10"></div>

      <div className="md:w-1/2 text-center md:text-left z-10">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight min-h-[80px] md:min-h-[120px] text-white">
          Hi, I'm <span className="text-blue-400">Ruchi</span> <br />
          <span className="text-gray-300">Frontend Developer</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
          I design and develop modern, responsive, and animated web applications
          with clean UI and smooth user experiences.
        </p>

        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <a
            href="https://www.facebook.com/ruchi.dumaru.3"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 shadow-lg shadow-cyan-500/30 hover:scale-110"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/ruchidumaru/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 shadow-lg shadow-cyan-500/30 hover:scale-110"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/ruchi-dumaru-a5b4852a6/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwvCeJWj%2FSy%2B1b6bncyWJ2A%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 shadow-lg shadow-cyan-500/30 hover:scale-110"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/ruchi-dumaru"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 shadow-lg shadow-cyan-500/30 hover:scale-110"
          >
            <FaGithub />
          </a>
        </div>

        {/* Contact Button */}
        <a href="#Footer">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0px 0px 10px rgba(6,182,212,0.4)",
                "0px 0px 25px rgba(6,182,212,0.8)",
                "0px 0px 10px rgba(6,182,212,0.4)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-full text-sm md:text-lg font-semibold cursor-pointer hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </motion.button>
        </a>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center z-10">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="relative"
        >
          <img
            className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-full border-4 border-cyan-400 shadow-2xl shadow-cyan-400/30"
            src="/ruchi-portfolio/profile.jpg"
            alt="profile"
          />

          {/* Strong Glow Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-cyan-400 animate-pulse"></div>

          {/* Extra Glow */}
          <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30 -z-10"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
