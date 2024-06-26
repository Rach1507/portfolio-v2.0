import { useRef, useState } from "react";
import { Button } from "../ui/moving-border.tsx";


export default function Navbar() {
 
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div
      className={`md:p-6 p-2 pt-4 w-screen md:w-full lg:w-full flex flex-row  overflow-hidden justify-center md:justify-end items-center md:lg:gap-12 gap-4 z-[90] fixed right-0 text-navbar ${
        colorChange
          ? "bg-gradient-to-l from-gray-950  via-slate-900  to-gray-950 w-full opacity-100"
          : ""
      }`}
    >
     
      <a href="#about" className="order-1 font-light hover:font-bold text-slate-50">
        About
      </a>

      <a
        href="#experience"
        // onClick={experienceRef.current.scrollIntoView()}
        className="order-2 font-light hover:font-bold text-slate-50"
      >
        Experience
      </a>
      <a href="#projects" className=" order-4 md:order-3 font-light hover:font-bold text-slate-50">
        Projects
      </a>
      <a href="#contact" className=" order-5 md:order-4 font-light hover:font-bold text-slate-50">
       Contact
        </a>
      <div className="order-3 md:order-last hover:font-bold text-navbar">
        <Button 
          borderRadius="2.5rem"
          
          className =" font-semibold dark:bg-transparent dark:text-white dark:border-slate-800"
        // className="p-2 rounded-md border-dotted border-2 border-sky-500 bg-transparent"
        >
          <a
            href="https://drive.google.com/file/d/1l44N1EYCwS98zFzj2pxUiDlbJRnMbi_L/view?usp=sharing"
            target="_blank" rel="noreferrer"
          >
            Resume
          </a>
        </Button>
        
      </div>
    </div>
  );
}
