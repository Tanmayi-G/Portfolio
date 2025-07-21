import { useEffect, useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = window.scrollY;

  const navItems = [
    { number: "01.", label: "About", to: "#about" },
    { number: "02.", label: "Tech stack", to: "#techstack" },
    { number: "03.", label: "Experience", to: "#experience" },
    { number: "04.", label: "Projects", to: "#projects" },
    { number: "05.", label: "Contact", to: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY + 10) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY - 10) {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-2 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } backdrop-blur-md mx-12 mt-6 flex items-center justify-between px-6 py-4 bg-[#060a1d] text-white rounded-lg shadow-md`}
    >
      <a href="#home" className="flex items-center gap-3 cursor-pointer group">
        <div className="bg-[#64ffda33] p-2 rounded-full group-hover:scale-105 transition-transform">
          <img src="/favicon.png" className="text-[#64ffda] w-7" />
        </div>
        <div className="font-bold font-mono text-xl tracking-wide transition-colors">Tanmayi G</div>
      </a>

      <div className="flex items-center gap-6 ml-auto">
        <ul className="hidden md:flex items-center gap-8 font-mono text-sm">
          {navItems.map((item) => (
            <li key={item.to}>
              <a href={item.to} className="group relative transition-colors duration-300 ease-in-out flex gap-1 items-center text-white hover:text-[#64ffda]">
                <span className="text-[#64ffda]">{item.number}</span>
                <span className="relative">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#resume"
          className="ml-2 px-5 py-2 text-sm text-[#64ffda] border border-[#64ffda] rounded-md font-mono
          bg-[#0A192F] shadow-[0_4px_0_0_#3bc7a6] hover:shadow-[0_2px_0_0_#3bc7a6]
          hover:translate-y-[1px] active:translate-y-[2px] transition-all duration-200 ease-in-out"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
