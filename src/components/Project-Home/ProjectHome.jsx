import {Project} from "./Project/Project.jsx";

export function ProjectHome() {
    return (
        <>
         <div className="project-Home w-full p-20">
             <div className="project-title place-self-center text-6xl">
                 Projects
             </div>
             <div className={"projects w-full p-20 gap-5"}>
                 <Project  title={"Portfolio"}
                           desc={"My professional Portfolio Website"}
                           tags={"Front-End Back-end Full-Stack Mysql SQL PHP React "}

                 />


             </div>

         </div>
        </>
    )
}