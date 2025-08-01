import Project from "./Project/Project.jsx";
import GradientText from "@/blocks/TextAnimations/GradientText/GradientText.jsx";
import CustomButton from "@/components/Skills-Home/SkillsHome.jsx";
import {useRef} from "react";

export function ProjectHome() {
    const mainDivRef = useRef(null);
    return (
        <>
         <div className="project-Home w-full p-20"
              ref={mainDivRef}
         >
             <div className="project-title place-self-center text-6xl"
             style={{
                 color: "white",
             }}><b>
                 <GradientText
                     colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                     animationSpeed={3}
                     showBorder={false}
                     className="custom-class"
                 >
                 Projects
                 </GradientText>
             </b>
             </div>
             <div className={"projects w-full flex flex-col p-20 gap-100"}>
                 <Project  title={"Portfolio"}
                           desc={"My professional Portfolio Website"}
                           tags={["Front-End","Back-end","Full-Stack","Mysql SQL","PHP","React","Tailwind CSS"]}
                           img={"Project1/Project1.png"}
                           img1={"Project1/Project1-1.png"}
                           img2={"Project1/Project1-2.png"}
                           reff={mainDivRef}
                           bg={'Project1/Project1-bg.png'}
                 />
                 <Project  title={"Wordpress Theme"}
                           desc={"Made full replica of Wordpress Theme"}
                           tags={["Front-End","HTML","CSS","Bootstrap"]}
                           img={"Project1/Project1.png"}
                           img1={"Project1/Project1-1.png"}
                           img2={"Project1/Project1-2.png"}
                           reff={mainDivRef}
                           bg={'Project1/Project1-bg.png'}
                 />





             </div>
                 <CustomButton text={"See All Projects"} link={"Projects"}/>

         </div>
        </>
    )
}