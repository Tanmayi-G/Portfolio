import { motion } from "framer-motion";
import { EMAIL } from "../data/socialLinks";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="bg-[#0A192F] text-[#CCD6F6] min-h-screen flex flex-col justify-center items-center px-6 py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-3xl w-full text-center">
        <p className="text-[#64FFDA] text-sm font-mono mb-3">05. Let's Connect!</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6] mb-6">Get In Touch</h2>
        <div className="text-[#8892B0] mb-10">
          <p>Whether you have a question, a project idea, or just want to say hi — feel free to reach out.</p>
          <p>I'm always open to new opportunities, creative collaborations, or simply connecting with like-minded folks!</p>
        </div>

        <button
          onClick={() => (window.location.href = "mailto:" + EMAIL)}
          className="ml-2 px-5 py-2 text-sm text-[#64ffda] border border-[#64ffda] rounded-md font-mono
    bg-[#0A192F] shadow-[0_4px_0_0_#3bc7a6] hover:shadow-[0_2px_0_0_#3bc7a6]
    hover:translate-y-[1px] active:translate-y-[2px] active:shadow-[0_0px_0_0_#3bc7a6]
    transition-all duration-200 ease-in-out"
        >
          Say hello
        </button>
      </div>
    </motion.section>
  );
};

export default Contact;
