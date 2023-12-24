import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Work() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { rootMargin: "-400px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className=" bg-gradient-to-br to-blue-950 from-black ">
      <div
        ref={ref}
        className="overflow-hidden grid grid-cols-5 grid-rows-1 justify-center items-center w-full h-screen font-sans"
      >
        <div
          className={`flex col-start-3 row-start-1 rounded-full backdrop-contrast-75  h-1/3 w-full text-center z-[90] justify-center items-center animate-customPulse`}
        >
          <div
            className="rounded-full 
antialiased  break-words font-normal text-sm text-slate-50 w-1/2 "
          >
            On a typical day @ Work
            <br /> U'LL FIND ME EITHER
            <br />
            <span className="text-sm font-normal ">(doing 2/3 of these)</span>
          </div>
        </div>
        <div
          className={`flex col-start-3 row-start-1 rounded-full backdrop-contrast-75  h-1/3 w-full text-center z-[90]  justify-center items-center ${
            inView
              ? `transition-transform duration-700 ease-out translateNW`
              : ``
          }`}
        >
          <div className="flex flex-column rounded-full break-words font-normal text-sm text-sky-300 justify-center w-1/2 ">
            {/* <span>
              <svg
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-sky-500 h-8 -translate-x-8"
              >
                <path
                  fill="#f37036"
                  d="M113.117 26.066C92.168-1.062 53.191-6.07 26.062 14.883c-27.125 20.953-32.128 59.93-11.175 87.055 20.957 27.124 59.937 32.124 87.058 11.167 27.114-20.953 32.118-59.918 11.172-87.039Zm0 0"
                />
                <path
                  fill="#fff"
                  d="M91.078 24.164a10.038 10.038 0 0 0-5.781 2.426 10.028 10.028 0 0 0-1.54 13.465 10.028 10.028 0 0 0 13.276 2.715h.002v.001l.156.155a10.63 10.63 0 0 0 1.965-1.45A10.341 10.341 0 0 0 99 27.107v-.002l-8.844 8.789-.156-.155 8.844-8.793a10.038 10.038 0 0 0-7.766-2.78zM79.434 38.551c-4.24-.007-11.163 4.799-28.067 21.703l.084.086c-.092-.032-.185-.035-.185-.035l-6.364 6.308a1.035 1.035 0 0 0 .93 1.762l10.914-2.328a.307.307 0 0 0 .092-.17l.242.25-3.72 3.69h-.18l-22.086 22.26 7.086 6.824a1.254 1.254 0 0 0 1.476.149 1.327 1.327 0 0 0 .645-1.356l-1.035-4.5a.534.534 0 0 1 0-.62 117.285 117.285 0 0 0 26.738-17.583l-4.535-4.537.086-.014-2.69-2.689.172-.174.182.186-.094.091 7.137 7.293v-.003c13.68-12.954 23.39-23.367 20.865-30.375a3.83 3.83 0 0 0-1.107-2.208v.004a3.778 3.778 0 0 0-.483-.306c-.083-.088-.156-.178-.244-.264l-.066.066a3.778 3.778 0 0 0-.582-.29l.289-.292c-1.796-1.6-3.28-2.924-5.5-2.93zM30.94 92.21l-5.171 5.172v.004a1.03 1.03 0 0 0-.457 1.125 1.035 1.035 0 0 0 .921.789l12.672.875-7.965-7.965z"
                />
                <path
                  fill="#f37036"
                  d="M91.95 23.31a11.047 11.047 0 0 0-7.759 3.17 10.988 10.988 0 0 0-2.39 11.641c-4.741-2.03-11.155 1.51-31.106 21.457a.932.932 0 0 0-.037.094 1.242 1.242 0 0 0-.119.062l-6.309 6.364a1.97 1.97 0 0 0-.363 2.324 2.012 2.012 0 0 0 1.707.984l.313-.203 8.424-1.797-4.03 4.067a.873.873 0 0 0-.054.166l-19.75 19.799a.798.798 0 0 0-.192.238l-5.086 5.09a1.967 1.967 0 0 0-.414 2.043 1.995 1.995 0 0 0 1.656 1.265l12.618.88a1.01 1.01 0 0 0 .52-.415.886.886 0 0 0 0-1.035l-.026-.025a2.243 2.243 0 0 0 .705-.58 2.237 2.237 0 0 0 .406-1.876l-.984-4.187a126.725 126.725 0 0 0 26.334-16.861 1.091 1.091 0 0 0 .248.103c.254-.019.492-.128.672-.308 13.55-12.83 21.515-21.622 21.515-28.602a8.03 8.03 0 0 0-.431-2.85 10.957 10.957 0 0 0 3.845.83l-.015.004a11.219 11.219 0 0 0 5.183-1.45.775.775 0 0 0 .004.001.835.835 0 0 0 .617-.055 9.398 9.398 0 0 0 2.07-1.652 10.873 10.873 0 0 0 3.258-7.758 10.873 10.873 0 0 0-3.257-7.758.93.93 0 0 0-.118-.091 11.045 11.045 0 0 0-7.656-3.078zm-.087 1.772a9.27 9.27 0 0 1 5.586 1.914l-8.068 8.117a.84.84 0 0 0-.076.098.83.83 0 0 0-.239.55.832.832 0 0 0 .313.65h.002l6.1 6.1a9.044 9.044 0 0 1-10.028-1.913c-2.586-2.6-3.336-6.504-1.953-9.891 1.383-3.39 4.68-5.605 8.363-5.625zm7.12 3.432a8.87 8.87 0 0 1 2.033 5.674 9.15 9.15 0 0 1-2.688 6.464 9.989 9.989 0 0 1-1.098.895L92.307 36.7l-.963-.963.265-.265 7.373-6.96zm-.366 4.193a.777.777 0 0 0-.55.031.731.731 0 0 0-.36.426.73.73 0 0 0 .05.559 2.226 2.226 0 0 1-.257 2.328.64.64 0 0 0-.195.488c.004.184.07.36.195.492a.58.58 0 0 0 .414 0 .68.68 0 0 0 .672-.207 3.573 3.573 0 0 0 .465-3.777v.004a.777.777 0 0 0-.434-.344zM79.34 39.43a5.584 5.584 0 0 1 3.31 1.226 4.756 4.756 0 0 0-2.681 1.34L57.162 64.701l-4.476-4.476c11.828-11.772 19.06-17.921 23.556-19.936a5.584 5.584 0 0 1 3.098-.86zm3.965 2.96a2.895 2.895 0 0 1 2.043.844 2.786 2.786 0 0 1 .879 2.121 2.869 2.869 0 0 1-.985 2.07l-24.25 21.106-2.617-2.617 22.887-22.68a2.895 2.895 0 0 1 2.043-.843zm2.994 6.698c-1.69 6.702-10.647 15.783-19.987 24.607l-3.777-3.773L86.3 49.088zM51.367 61.547l.274.27 3.513 3.513-9.63 2.06 5.843-5.843zm5.793 5.84.004.004 1.168 1.195a1.086 1.086 0 0 0 .018.084l.078.012.248.254.82.84-5.385.66 3.05-3.05zm3.867 4.076 3.578 3.576A126.992 126.992 0 0 1 38.75 91.695a1.44 1.44 0 0 0-.777 1.653l1.035 4.5a.31.31 0 0 1 0 .363.31.31 0 0 1-.414 0l-6.102-6.152L51.3 72.975l9.728-1.512zm-29.933 21.94.869.814 4.492 4.492-10.016-.648 4.655-4.659z"
                />
              </svg>
            </span> */}
            Doing Figma / API / Requirement analysis for upcoming features
          </div>
        </div>

        <div
          className={`flex col-start-3 row-start-1 rounded-full backdrop-contrast-75  h-1/3 w-full text-center z-[90]  justify-center items-center ${
            inView
              ? ` transition-transform duration-700 ease-out translateSE  `
              : ``
          }`}
        >
          <div className="rounded-full break-words font-normal text-sky-300 text-sm  w-1/2 ">
            Researching the headless base component to be used from available
            libs , Discussing tradeoffs , performance bottlenecks to be kept in
            mind{" "}
          </div>
        </div>

        <div
          className={`flex col-start-3 row-start-1 rounded-full backdrop-contrast-75  h-1/3 w-full text-center z-[90]  justify-center items-center ${
            inView
              ? `transition-transform duration-700 ease-out translateN `
              : ``
          }`}
        >
          <div className="rounded-full break-words font-normal text-sky-300 text-sm  w-1/2 ">
            Presenting at Team presentations, Sprint / End of AC demos
          </div>
        </div>

        <div
          className={`flex col-start-3 row-start-1 rounded-full backdrop-contrast-75  h-1/3 w-full text-center z-[90]  justify-center items-center ${
            inView
              ? `transition-transform duration-700 ease-out translateS`
              : ``
          }`}
        >
          <div className="rounded-full break-words font-normal  text-sky-300  text-sm  w-1/2 ">
            In "Lets solve this together" calls / Daily team sync ups / Peer
            reviewing
          </div>
        </div>

        <div
          className={`flex col-start-3 row-start-1 rounded-full backdrop-contrast-75  h-1/3 w-full text-center z-[90]  justify-center items-center ${
            inView
              ? `transition-transform duration-700 ease-out translateSW `
              : ``
          }`}
        >
          <div className="rounded-full break-words font-normal  text-sky-300 text-sm w-1/2 ">
            In PR Reviews , Sync ups , Clarifification meetings from Isreal dev
            team and UK PM team
          </div>
        </div>

        <div
          className={`flex col-start-3 row-start-1 rounded-full backdrop-contrast-75  h-1/3 w-full text-center z-[90]  justify-center items-center ${
            inView
              ? `transition-transform duration-700 ease-out translateNE `
              : ``
          }`}
        >
          <div className="rounded-full break-words font-normal  text-sky-300 text-sm  w-1/2 ">
            Occasionally Support for other product teams on integrating UI
            library
          </div>
        </div>

        <div
          className={`flex col-start-3 row-start-1 rounded-full backdrop-contrast-75  h-1/3 w-full text-center z-[90]  justify-center items-center ${
            inView
              ? `transition-transform duration-700 ease-out translateE `
              : ``
          }`}
        >
          <div className="rounded-full break-words font-normal  text-sky-300 text-l  w-1/2 ">
            WRITING CODE. TESTING IT
          </div>
        </div>
        <div
          className={`flex col-start-3 row-start-1 rounded-full backdrop-contrast-75  h-1/3 w-full text-center z-[90]  justify-center items-center ${
            inView
              ? `transition-transform duration-700 ease-out translateW`
              : ``
          }`}
        >
          <div className="rounded-full break-words font-normal  text-sky-300  text-l  w-1/2 ">
            WRITING CODE. <br /> TESTING IT
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-center items-center gap-6 text-center pb-10">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="55" height="90">
            <g
              fill="none"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
            >
              <path d="M9.22 7.263c-11.097 23.205-5.71 57.354 24 61M1.78 9.232c4.16-1.394 5.768-5.407 9.408-7.495.312 3.188 1.234 9.623 3.367 12.234" />
            </g>
          </svg>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="85">
            <g
              fill="none"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
            >
              <path d="M9.748 73.448c-5.466-9.41-12.212-20.124.532-26.994 9.499-5.12 21.629-3.752 30.447 1.811 8.999 5.677 16.714 14.104 28.574 9.748 18.443-6.774 19.853-35.315 22.447-50.898" />
              <path d="M97.003 12.678c-2.956-3.242-2.408-7.53-4.574-11.126-1.822 2.634-5.759 7.808-8.893 9.052" />
            </g>
          </svg>
        </div>

        <div className="text-2xl grid grid-rows-2 font-handwritten items-center content-center">
          <span>If Im working on Product UI</span>
        </div>

        <div className="text-2xl font-handwritten">
          If Im working on UI Library
        </div>
      </div>
    </div>
  );
}
