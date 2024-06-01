import ExperienceCardView from "./ExperienceCardView";
import ExperienceCardMobileView from "./ExperienceCardMobileView";
import { useState, useEffect, useRef } from "react";

export default function Experience() {
  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial calculation
    handleResize();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(width);

     // from-blue-950 to-black
  return (

      <div 
        className="grid grid-cols-8 grid-rows-1 w-full bg-gradient-to-b from-slate-950 to-black
     font-sans z-[100] md:z-10"
      >
        <div id="experienceContainer" ref={containerRef} className="m-5 col-span-8 md:col-start-2 md:col-span-6">
          {width >= 568 ? <ExperienceCardView /> : <ExperienceCardMobileView/>} 
        </div>
      </div>

  );
}
