import { motion } from "framer-motion";
import { RESUME_PREVIEW, RESUME_VIEW } from "../data/resumeLinks";

const Resume = () => {
  return (
    <motion.section
      id="resume"
      className="bg-[#0A192F] text-[#CCD6F6] min-h-screen flex flex-col justify-center items-center px-6 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-4xl w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#ccd6f6] mb-4 sm:mb-0">My Resume</h2>
          <div className="h-[0.5px] bg-[#233554] flex-grow max-w-80 "></div>

          <div className="flex flex-col sm:flex-row justify-end gap-4">
            <a
              href={RESUME_VIEW}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm text-[#64ffda] border border-[#64ffda] rounded-md font-mono
        bg-[#0A192F] shadow-[0_4px_0_0_#3bc7a6] hover:shadow-[0_2px_0_0_#3bc7a6]
        hover:translate-y-[1px] active:translate-y-[2px] active:shadow-[0_0px_0_0_#3bc7a6]
        transition-all duration-200 ease-in-out"
            >
              View on GDrive
            </a>

            <a
              href="/TanmayiG_Resume.pdf"
              download
              className="px-5 py-2 text-sm text-[#64ffda] border border-[#64ffda] rounded-md font-mono
        bg-[#0A192F] shadow-[0_4px_0_0_#3bc7a6] hover:shadow-[0_2px_0_0_#3bc7a6]
        hover:translate-y-[1px] active:translate-y-[2px] active:shadow-[0_0px_0_0_#3bc7a6]
        transition-all duration-200 ease-in-out"
            >
              Download as PDF
            </a>
          </div>
        </div>

        <div className="w-full h-[600px] overflow-hidden shadow-md">
          <iframe src={RESUME_PREVIEW} width="100%" height="600" title="Resume" />
        </div>
      </div>
    </motion.section>
  );
};

export default Resume;
