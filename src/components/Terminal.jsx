import { useEffect, useState } from "react";
import { lines } from "../data/terminalLines";

const TypewriterLines = ({ lines }) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentLine = lines[lineIndex];
  const fullText = currentLine.slice(0, charIndex);

  useEffect(() => {
    if (isPaused) return;

    const isComplete = !isDeleting && charIndex === currentLine.length;
    const isErased = isDeleting && charIndex === 0;

    let delay = isDeleting ? 40 : 70;

    const timer = setTimeout(() => {
      if (isComplete) {
        setIsPaused(true);
        setTimeout(() => {
          setIsDeleting(true);
          setIsPaused(false);
        }, 1000);
      } else if (isErased) {
        setIsPaused(true);
        setTimeout(() => {
          setIsDeleting(false);
          setLineIndex((prev) => (prev + 1) % lines.length);
          setIsPaused(false);
        }, 400);
      } else {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentLine, isPaused, lines]);

  return (
    <div className="text-[#8892b0] mt-1">
      &gt; {fullText}
      <span className="inline-block w-[1ch] animate-blink">|</span>
    </div>
  );
};

const Terminal = () => {
  return (
    <div className="md:col-span-4 mt-10 md:mt-10 flex justify-center">
      <div className="w-[320px] rounded-md overflow-hidden shadow-lg border border-[#233554]">
        <div className="bg-[#1e2a40] flex items-center px-3 py-2 space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-400 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
        </div>

        <div className="bg-[#081424] text-[#64ffda] font-mono text-sm p-4 h-[170px]">
          <div className="mb-2">
            <span className="text-pink-500">tanmayi@portfolio</span>
            <span className="text-white">:~$</span> <span>whoami</span>
          </div>
          <TypewriterLines lines={lines} />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
