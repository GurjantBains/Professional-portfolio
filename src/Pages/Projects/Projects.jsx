import {Navbar} from "../../components/Navbar/Navbar.jsx";
import {motion, useAnimation} from "motion/react";
import {useRef, useState} from "react";
import {scale} from "motion";
import CustomButton from "@/components/Skills-Home/SkillsHome.jsx";



export function Projects() {
    window.scrollTo(0, 0);
    const [activeFilter, setActiveFilter] = useState("all");
    return (
        <>
                <Navbar />
            <div className={"w-full  flex place-content-center pt-[100px] bg-zinc-900"}>

                <div className={" w-[90%] pt-10" }>
                    <div className={" @xs:text-5xl @xs:text-center sm:text-8xl sm:text-left pl-[100px]"}>
                    Projects
                    </div>
                    <div className={"p-10 pl-[100px]"}>
                    <ProjectFilter active={activeFilter} setActive={setActiveFilter}/>
                    </div>
                    <div className={"flex flex-wrap p-[50px] gap-10 justify-center  overflow-hidden rounded-2xl"}>
                        <ProjectCard projectid={"12"} title="Portfolio" keys={0} img={"Project1/Project1.png"} desc=" My minimilistic Portfolio Website" />
                        <ProjectCard projectid={"12w"} title="Wordpress Replica" keys={1} img={"Project2/Project2.png"} desc="Made replica of wordpress theme" />
                        <ProjectCard projectid={"12"} title="Portfolio" keys={2} img={"Project1/Project1.png"} desc=" My minimilistic Portfolio Website" />
                        <ProjectCard projectid={"12w"} title="Portfolio" keys={3} img={"Project1/Project1.png"} desc=" My minimilistic Portfolio Website" />
                        <ProjectCard projectid={"12e"} title="Portfolio" keys={4} img={"Project1/Project1.png"} desc=" My minimilistic Portfolio Website" />
                        <ProjectCard projectid={"12w"} title="Portfolio" keys={5} img={"Project1/Project1.png"} desc=" My minimilistic Portfolio Website" />
                        <ProjectCard projectid={"121"} title="Portfolio" keys={6} img={"Project1/Project1.png"} desc=" My minimilistic Portfolio Website" />
                    </div>

                </div>

            </div>

        </>
    )
}

const ProjectCard = (prop) => {
    const [initial, setInitial] = useState({x:-100,opacity:0});
    const [animation, setAnimation] = useState({x:0,opacity:1});
    const [animate, setAnimate] = useState(initial);
    return (
        <>
            <motion.div className={"ProjectCard mb-[20px] max-w-[400px] min-w-[200px] h-[450px] relative flex flex-col   overflow-hidden border-zinc-700  bg-zinc-800 rounded-2xl cursor-pointer box-border z-1 "}
                        initial={initial}
                        animate={animate}
                        onViewportEnter={()=>{setAnimate(animation);console.log("dd")}}
                        transition={{duration:0.5,delay:0.1+(prop.keys/10)}}

                        // viewport={{once:true}}
            >
                <div className={"z-3 bg-zinc-800 w-full ProjectCardc "}>

                <div className={"z-3 p-[25px]"}><img src={prop.img} className={"rounded-2xl "} alt={"Bye bye"}/></div>
                <div className={"z-5 bg-[#0c1013] p-[20px] overflow-hidden top-[-35px]  h-[250px] relative"}>
                    <div className={"z-3 text-4xl mb-2 text-blue-500"}>{prop.title}</div>
                    <div className={"z-3 text-lg text-gray-400 mb-5"}>{prop.desc}</div>
                    <div className={"place-self-center"}><CustomButton text={"See Detail"} link={"Projects/"+prop.projectid}/></div>
                </div>
            </div>

            </motion.div>
        </>
    )
}
const ProjectFilter = (prop) => {
    const style = `text-white text-2xl cursor-pointer p-[10px] px-[20px] rounded-2xl `
    const hover = {scale:1.1}
    const tap = {scale:0.9}
    const setFilter = (filter) => {
        prop.setActive(filter)
        console.log(prop.active)
    }
    return (
        <>
            <motion.div className={"flex gap-2"}>
                <motion.div className={style+(prop.active==="all"?"activeFilter":"")}  onClick={()=>{setFilter("all")}} whileHover={hover} whileTap={tap}>All</motion.div>
                <motion.div className={style+(prop.active==="frontEnd"?"activeFilter":"")} onClick={()=>{setFilter("frontEnd")}} whileHover={hover} whileTap={tap}>Front-end</motion.div>
                <motion.div className={style+(prop.active==="backEnd"?"activeFilter":"")} onClick={()=>{setFilter("backEnd")}} whileHover={hover} whileTap={tap}>Backend</motion.div>
                <motion.div className={style + (prop.active==="api"?"activeFilter":"")} onClick={()=>{setFilter("api")}} whileHover={hover} whileTap={tap}>Api</motion.div>
                <motion.div className={style + (prop.active==="game"?"activeFilter":"")} onClick={()=>{setFilter("game")}} whileHover={hover} whileTap={tap}>Game</motion.div>
            </motion.div>
        </>
    )
}