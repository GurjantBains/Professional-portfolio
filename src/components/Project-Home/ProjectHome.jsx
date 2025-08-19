import Project from "./Project/Project.jsx";
import CustomButton from "@/components/Skills-Home/SkillsHome.jsx";
import React, {useRef} from "react";

export function ProjectHome() {
    const mainDivRef = useRef(null);
    const bg = useRef(null);

    return (
        <>
         <div className="project-Home w-full p-20"
              ref={mainDivRef}>
             <div className="project-title place-self-center text-6xl"
             style={{
                 color: "#ffa500",
             }}><b>

                 Projects
             </b>
             </div>
             <div className={"projects w-full flex flex-col lg:p-20 py-30 min-[1100px]:gap-30 gap-10"}>
                 <Project  title={"Portfolio"}
                           desc={"My professional Portfolio Website"}
                           tags={["Front-End","Back-end","Full-Stack","Mysql SQL","PHP","React","Tailwind CSS"]}
                           img={"Project1/Project1.png"}
                           img1={"Project1/Project1-1.png"}
                           img2={"Project1/Project1-2.png"}
                           reff={mainDivRef}
                           bg={'Project1/Project1-bg.png'}
                           bg1={bg}

                 />
                 <Project  title={"Wordpress Theme"}
                           desc={"Made full replica of Wordpress Theme"}
                           tags={["Front-End","HTML","CSS","Bootstrap"]}
                           img={"Project2/Project2.png"}
                           img1={"Project2/Project2-1.png"}
                           img2={"Project2/Project2-2.png"}
                           reff={mainDivRef}
                           bg={'Project2/Project2-bg.png'}
                           bg1={bg}

                 />






             </div>
             <div style={{maxWidth:"max-content", placeSelf:"center"}}>
                 <CustomButton text={"See All Projects"} link={"Projects"}/>
             </div>
         </div>
        </>
    )
}
