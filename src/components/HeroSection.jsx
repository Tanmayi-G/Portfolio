import { FaAngleDown, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { EMAIL, GITHUB, LINKEDIN } from "../data/socialLinks";

const HeroSection = () => {
  return (
    <motion.section
      id="home"
      className="flex flex-col items-center justify-center text-center px-6 py-20 md:py-28 bg-[#0A192F] relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-3xl">
        <span className="text-sm font-semibold text-[#ccd6f6] border border-[#64ffda] px-3 py-1 rounded-full inline-block mb-4 font-mono">Hello There!</span>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
          I’m{" "}
          <span className="relative inline-block text-[#64ffda] text-6xl font-bold font-montserrat">
            Tanmayi G
            <svg className="absolute left-0 -bottom-2 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5 C 20 10, 80 0, 100 5" stroke="#64ffda" strokeWidth="2" fill="transparent" className="animate-draw" />
            </svg>
          </span>
          .<br />
        </h1>

        <div className="w-full flex justify-center">
          <div className="bg-[#112240] text-[#64ffda] px-4 py-1 mt-3 text-sm rounded-full shadow-md font-mono mb-3">Software Developer | Full Stack Developer</div>
        </div>

        <div className="w-full flex justify-center">
          <div className="inline-flex items-center gap-2 text-[#64ffda] bg-transparent border border-[#64ffda66] px-3 py-1 rounded-full text-sm font-mono mb-5 mt-2">
            <span>📍</span>
            <span>Bangalore, India</span>
          </div>
        </div>

        <div className="text-base md:text-base text-[#a4a9b8] max-w-xl mx-auto mb-4 ">
          <p className="font-sans font-medium text-base md:text-lg">I build things for the web.</p>
          <p className="font-sans">Crafting seamless, end-to-end web experiences across the stack.</p>
        </div>

        <div className="flex justify-center items-center gap-5 px-6 py-3 transition-all duration-500 mb-7">
          {[
            {
              href: GITHUB,
              icon: <FaGithub />,
            },
            {
              href: LINKEDIN,
              icon: <FaLinkedin />,
            },
            {
              href: "mailto:" + EMAIL,
              icon: <FaEnvelope />,
            },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 bg-[#112240] text-[#64ffda] rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out shadow-md hover:scale-110 hover:bg-[#64ffda]"
            >
              <span className="text-2xl group-hover:text-[#0A192F] transition-colors duration-300 ease-in-out z-10">{link.icon}</span>
            </a>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <div className="mt-4">
            <FaAngleDown className="text-[#64ffda] text-3xl animate-bounce" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
