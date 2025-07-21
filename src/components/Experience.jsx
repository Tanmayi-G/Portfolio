import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "../data/experience";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.section
      id="experience"
      className="bg-[#0A192F] min-h-screen flex flex-col items-center justify-center py-20 px-6 md:px-20 text-white w-full max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="w-full max-w-4xl">
        <div className="flex items-baseline mb-14 w-full">
          <span className="text-xl font-medium text-[#64ffda] font-mono mr-3">03.</span>
          <div className="flex items-center gap-4 w-full">
            <h2 className="text-3xl font-bold text-[#ccd6f6] whitespace-nowrap">Where I’ve Worked</h2>
            <div className="h-[0.5px] bg-[#233554] flex-grow max-w-96"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible">
            <div className="flex lg:flex-col min-w-max lg:min-w-0">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`px-6 py-3 text-sm font-mono text-left whitespace-nowrap lg:whitespace-normal border-b-2 lg:border-b-0 lg:border-l-2 transition-all duration-200 hover:bg-[#112240] ${
                    activeIndex === index ? "text-[#64ffda] border-[#64ffda]" : "text-[#8892b0] border-[#233554] hover:text-[#64ffda]"
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div key={activeIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <div className="flex items-center gap-4 mb-4">
                  <img src={experiences[activeIndex].logo} alt={experiences[activeIndex].company} className="rounded-full w-12 h-12 object-cover" />

                  <div>
                    <h3 className="text-xl font-bold text-[#ccd6f6]">
                      {experiences[activeIndex].role}
                      <span className="text-[#64ffda] ml-1">@</span>
                      <a href={experiences[activeIndex].link} target="_blank" rel="noopener noreferrer" className="text-[#64ffda] relative inline-block group ml-1">
                        {experiences[activeIndex].company}
                        <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-[#64ffda] transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </h3>
                    <p className="text-sm font-mono text-[#8892b0]">{experiences[activeIndex].duration}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6 ml-[60px]">
                  {experiences[activeIndex].technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-mono bg-[#112240] text-[#64ffda] px-2 py-1 rounded-md border border-[#233554]">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-4 ml-7">
                  {experiences[activeIndex].points.map((point, i) => (
                    <li key={i} className="flex items-baseline text-[#8892b0] leading-relaxed">
                      <span className="text-[#64ffda] mr-4 flex-shrink-0">▸</span>
                      <span className="text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
