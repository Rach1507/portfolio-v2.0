import LinkFooter from "../Footer";
import { Fade } from "react-awesome-reveal";
import Navbar from "./Navbar";
import Intro from "./Intro";
import MailFooter from "../MailFooter";
import About from "./About";
import { AuroraBackground } from "../ui/aurora-background.tsx";

const PersonalBranding = () => {
  return (
    <AuroraBackground>
      <div
        className="flex flex-row-reverse grid-rows-1 w-full h-screen bg-gradient-to-b
        to-blue-950 pr-32
       "
      >
        <div className="mt-[25%] md:lg:mt-[8%]">
          <div className="h-4/5 w-full flex flex-col gap-12 items-start justify-center text-intro-desc">
            <Fade triggerOnce cascade className=" text-right w-full   ">
              <span
                className="text-8xl
                font-sans font-semibold tracking-wide
                bg-clip-text  text-transparent
                overflow-hidden whitespace-nowrap  bg-gradient-to-l from-slate-400 to-slate-50 
                text-slate-300 "
              >
                Rachitha B R
              </span>
              <div className="flex flex-col gap-12">
                <span className="text-5xl  tracking-wide text-slate-300 font-semibold">
                  {" "}
                  <span className="text-sky-500"> www.rachithabr.dev </span>
                </span>
                <span className="text-5xl   text-slate-300 tracking-wide font-semibold">
                  {" "}
                  {" "}
                  <span className="text-sky-500">
                    {" "}
                    brrachitha027@gmail.com{" "}
                  </span>{" "}
                </span>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
};

export default PersonalBranding;
