import { useState } from "react";
import Card from "./Card";
import { synamediaRoleInfo, otRoleInfo } from "./ExperienceData";

export default function ExperienceCardView() {
  const [selected, setSelected] = useState("Sy");
  return (
    <div className="">
      <div className="h-full pl-0 z-[-100]">
        <span
          // ref={experienceRef}
          className="text-4xl font-sans font-bold bg-clip-text tracking-wide text-transparent bg-gradient-to-l from-slate-500 to-slate-200"
        >
          Experience
        </span>
        <div className="grid grid-cols-5 h-screen mt-24 ">
          <div className="col-span-1 h-full flex md:col-start-1 flex-col items-start w-full">
              <button
              className={
                selected === "Sy"
                  ? "p-5 w-full  border-l font-bold backdrop-contrast-50 "
                  : "p-5 w-full border-l font-bold hover:backdrop-contrast-75 "
              }
              onClick={() => {
                setSelected("Sy");
              }}
            >
              Synamedia
            </button>
            <button
              className={
                selected === "OT"
                  ? "p-5 w-full  border-l font-bold backdrop-contrast-50 "
                  : "p-5 w-full border-l font-bold hover:backdrop-contrast-75 "
              }
              onClick={() => {
                setSelected("OT");
              }}
            >
              OneTrust
            </button>
          </div>
          <div className="col-span-4 h-full">
            {selected === "Sy" && (
              <Card
                role={synamediaRoleInfo.roleName}
                year={synamediaRoleInfo.year}
                actions={synamediaRoleInfo.actions}
                techStack={synamediaRoleInfo.techStack}
                productUrl={synamediaRoleInfo.productUrl}
              ></Card>
            )}

            {selected === "OT" && (
              <Card
                role={otRoleInfo.roleName}
                year={otRoleInfo.year}
                actions={otRoleInfo.actions}
                techStack={otRoleInfo.techStack}
                productUrl={otRoleInfo.productUrl}
              ></Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
