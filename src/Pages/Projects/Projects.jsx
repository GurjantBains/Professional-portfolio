import {Navbar} from "../../components/Navbar/Navbar.jsx";
import {motion, useAnimation} from "motion/react";
import {useRef, useState} from "react";
import {scale} from "motion";



export function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");
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
                    <div className={"flex flex-wrap p-[50px] gap-10 justify-center "}>
                        <ProjectCard title="Portfolio" keys={0} img={"Project1/Project1.png"} desc=" My minimilistic Portfolio Website" />
                        <ProjectCard title="Wordpress Replica" keys={1} img={"Project2/Project2.png"} desc="Made replica of wordpress theme" />
                        <ProjectCard title="Portfolio" keys={2} img={"Project1/Project1.png"} desc=" My minimilistic Portfolio Website" />
                        <ProjectCard title="Portfolio" keys={3} img={"Project1/Project1.png"} desc=" My minimilistic Portfolio Website" />
                        <ProjectCard title="Portfolio" keys={4} img={"Project1/Project1.png"} desc=" My minimilistic Portfolio Website" />
                        <ProjectCard title="Portfolio" keys={5} img={"Project1/Project1.png"} desc=" My minimilistic Portfolio Website" />
                        <ProjectCard title="Portfolio" keys={6} img={"Project1/Project1.png"} desc=" My minimilistic Portfolio Website" />
                    </div>

                </div>

            </div>

        </>
    )
}

const ProjectCard = (prop) => {
    // const [animate, setAnimate] = useState({});
    const animate = useAnimation()
    return (
        <>
            <motion.div className={"max-w-[400px] min-w-[200px] max-h-[400px] relative flex flex-col  border-2 overflow-hidden border-zinc-700  bg-zinc-800 rounded-2xl cursor-pointer box-border "}
                        initial={{opacity: 0,left:-100,scaleX:0}}
                        style={{transformOrigin:"left"}}
                        animate={animate}
                        onViewportEnter={()=>{animate.start({opacity: 1, left:0, scaleX:1})}}
                        transition={{duration:0.5,delay:0.1+(prop.keys/10)}}
            >
                <div className={"z-1 p-[25px]"}><img src={prop.img} className={"rounded-2xl"} alt={"Bye bye"}/></div>
                <div className={"z-5 bg-[#0c1013] p-[20px] overflow-hidden  h-[150px] relative"}>
                    <div className={"z-3 text-4xl mb-2 text-blue-500"}>{prop.title}</div>
                    <div className={"z-3 text-lg text-gray-400"}>{prop.desc}</div>
                </div>
                    <div className={"bg-[#0c1013] absolute top-[210px] left-0 z-1 w-full h-[100px]"}></div>
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
            <motion.div className={"flex gap-8"}>
                <motion.div className={style+(prop.active==="all"?"activeFilter":"")}  onClick={()=>{setFilter("all")}} whileHover={hover} whileTap={tap}>All</motion.div>
                <motion.div className={style+(prop.active==="frontEnd"?"activeFilter":"")} onClick={()=>{setFilter("frontEnd")}} whileHover={hover} whileTap={tap}>Front-end</motion.div>
                <motion.div className={style+(prop.active==="backEnd"?"activeFilter":"")} onClick={()=>{setFilter("backEnd")}} whileHover={hover} whileTap={tap}>Backend</motion.div>
                <motion.div className={style + (prop.active==="api"?"activeFilter":"")} onClick={()=>{setFilter("api")}} whileHover={hover} whileTap={tap}>Api</motion.div>
                <motion.div className={style + (prop.active==="game"?"activeFilter":"")} onClick={()=>{setFilter("game")}} whileHover={hover} whileTap={tap}>Game</motion.div>
            </motion.div>
        </>
    )
}