import { motion } from "framer-motion";
import { techStack } from "../data/techStack";

const TechStack = () => {
  return (
    <motion.section
      id="techstack"
      className="bg-[#0A192F] min-h-screen flex flex-col items-center justify-center py-20 px-6 md:px-20 text-white w-full max-w-6xl mx-auto my-7"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="flex items-baseline mb-14 w-full">
        <span className="text-xl font-medium text-[#64ffda] font-mono mr-3">02.</span>
        <div className="flex items-center gap-4 w-full">
          <h2 className="text-3xl font-bold text-[#ccd6f6] whitespace-nowrap">My Technical Toolkit</h2>
          <div className="h-px bg-[#233554] flex-grow max-w-96"></div>
        </div>
      </div>

      <div className="space-y-4 w-full">
        {techStack.map((section) => (
          <div key={section.category}>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
              <div className="min-w-[150px] text-lg text-[#8892b0] font-semibold font-mono">{section.category}</div>
              <div className="flex flex-wrap gap-4">
                {section.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center bg-[#112240] p-4 rounded-xl w-24 h-24 justify-center shadow-md hover:scale-105 transition-transform duration-200 border border-[#233554]"
                  >
                    <img src={tech.image} alt={tech.name} className="h-10 mb-2 object-contain" />
                    <span className="text-xs text-[#ccd6f6] text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <hr className="border-t border-[#233554] mt-4" />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default TechStack;
