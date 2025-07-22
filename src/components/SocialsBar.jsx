import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { EMAIL, GITHUB, LEETCODE, LINKEDIN } from "../data/socialLinks";

const SocialsBar = () => {
  return (
    <div className="fixed bottom-0 left-12 hidden md:flex flex-col items-center gap-6 z-50">
      <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300">
        <FaGithub className="text-2xl" />
      </a>
      <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300">
        <FaLinkedin className="text-2xl" />
      </a>
      <a href={"mailto:" + EMAIL} className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300">
        <FaEnvelope className="text-2xl" />
      </a>
      <a href={LEETCODE} target="_blank" rel="noopener noreferrer" className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-300">
        <SiLeetcode className="text-2xl" />
      </a>
      <div className="w-px h-24 bg-[#8892b0] mt-4" />
    </div>
  );
};

export default SocialsBar;
