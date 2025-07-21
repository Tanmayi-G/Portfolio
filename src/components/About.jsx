import { motion } from "framer-motion";
import Terminal from "./Terminal";

const About = () => {
  return (
    <motion.section
      id="about"
      className="max-w-5xl mx-auto px-6 py-24 md:grid md:grid-cols-12 gap-16 items-center text-[#ccd6f6] bg-[#0a192f]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="md:col-span-8">
        <div className="flex items-baseline mb-10">
          <span className="text-xl font-medium text-[#64ffda] font-mono mr-2">01.</span>
          <div className="flex items-center gap-4 flex-grow">
            <h2 className="text-3xl font-bold m-0 p-0">About Me</h2>
            <div className="h-[0.5px] bg-[#233554] flex-grow max-w-sm"></div>
          </div>
        </div>

        <div className="space-y-5 text-[#8892b0] text-base leading-relaxed ">
          <p>
            I’m Tanmayi — a <span className="text-[#64ffda]">Full Stack Developer</span> who loves turning Figma designs into fast, functional, and accessible digital experiences that work flawlessly
            under the hood. I have experience building scalable web apps using modern tools like <span className="text-[#64ffda]">ReactJS, TypeScript, GraphQL, NodeJS, SQL, MongoDB, and Java</span>.
          </p>

          <p>
            I’ve worked with startups and edtech companies, most recently interning at <span className="text-[#64ffda]">Pluralsight</span>, where I automated internal tool workflows, revamped
            leadership dashboards, and helped boost performance and security using various tools.
          </p>

          <p>
            Lately, I’ve been diving into <span className="text-[#64ffda]">cloud platforms like AWS, exploring Next.js, and learning more about scalable web architectures</span> to level up my backend
            and infrastructure skills.
          </p>

          <p>
            When I’m not building, you’ll probably find me grinding <span className="text-[#64ffda]">LeetCode</span> problems for fun <span className="italic">(yes, really)</span>
          </p>
        </div>
      </div>
      <Terminal />
    </motion.section>
  );
};

export default About;
