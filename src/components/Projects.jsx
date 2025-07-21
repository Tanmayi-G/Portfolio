import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="bg-[#0A192F] min-h-screen flex flex-col items-center justify-center py-20 px-6 md:px-20 text-white w-full max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="flex items-baseline mb-14 w-full">
        <span className="text-xl font-medium text-[#64ffda] font-mono mr-3">04.</span>
        <div className="flex items-center gap-4 w-full">
          <h2 className="text-3xl font-bold text-[#ccd6f6] whitespace-nowrap">Things I've Built</h2>
          <div className="h-px bg-[#233554] flex-grow max-w-80 "></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 w-full">
        {projects.map((project, index) => (
          <div key={index} className="relative bg-[#112240] rounded-lg p-8 shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl group">
            {(project.github || project.external) && (
              <div className="absolute top-5 right-5 flex items-center space-x-3 text-[#ccd6f6] text-xl">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda]">
                    <FaGithub />
                  </a>
                )}
                {project.external && (
                  <a href={project.external} target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda]">
                    <FiExternalLink />
                  </a>
                )}
              </div>
            )}

            <h3 className="text-2xl font-bold text-[#ccd6f6] mb-1">{project.title}</h3>
            <p className="text-sm text-[#64ffda] font-mono">{project.subtitle}</p>

            <p className="text-[#9ba4c1] my-4 text-sm">{project.description}</p>

            <ul className="flex flex-wrap gap-x-1 gap-y-1 text-xs font-mono text-[#8892b0] mb-4">
              {project.tech.map((tech, i) => (
                <li key={i} className="border border-[#8892b0] px-2 py-1 rounded-sm hover:text-[#64ffda] hover:border-[#64ffda]">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
