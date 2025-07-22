import { EMAIL } from "../data/socialLinks";

const EmailBar = () => {
  return (
    <div className="fixed bottom-0 right-12 hidden md:flex flex-col items-center gap-5 z-50">
      <a href={"mailto:" + EMAIL} className="text-[#8892b0] hover:text-[#64ffda] text-base tracking-widest [writing-mode:vertical-rl] transition-colors duration-300 font-mono">
        {EMAIL}
      </a>
      <div className="w-px h-24 bg-[#8892b0] mt-4" />
    </div>
  );
};

export default EmailBar;
