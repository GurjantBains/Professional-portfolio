import {Navbar} from "../../components/Navbar/Navbar.jsx";
import {motion} from "motion/react";
import {useEffect, useState} from "react";
import CustomButton from "@/components/Skills-Home/SkillsHome.jsx";


export function Projects() {
    window.scrollTo(0, 0);
    const [projects, setProjects] = useState([]);
    // const baseUrl = "http://localhost/API/Portfolio%20Api/Portfolio-Api/"
    const baseUrl = "https://portfolio-api-c2uc.onrender.com/"


    
    useEffect(()=>{
        async function fetchCode(){
            const data = await fetch(`${baseUrl}api-fetch-projects.php` )
            console.log(" fetching data")
            return await data.json()}
        // return await data}
        fetchCode().then(data => {
            console.log(data)
            setProjects(data)
        })
    },[])
    const [activeFilter, setActiveFilter] = useState("all");
    return (
        <>
                <Navbar />
            <div className={"w-full  flex place-content-center pt-[100px] bg-zinc-900 min-h-[100vh]"}>

                <div className={" w-[90%] sm:pt-10" }>
                    <div className={" max-sm:text-5xl sm:text-center sm:text-8xl max-sm:pb-10 pl-[100px] "}>
                    Projects
                    </div>
                    <div className={"sm:p-10 sm:pl-[100px]"}>
                    <ProjectFilter active={activeFilter} setActive={setActiveFilter}/>
                    </div>
                    <div className={"grid xl:grid-cols-[repeat(auto-fill,minmax(375px,1fr))] " +
                        " sm:grid-cols-[repeat(auto-fill,minmax(275px,1fr))] "+
                        " max-sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] " +
                        " gap-25   rounded-2xl sm:p-15 max-sm:p-10 "}>

                    {
                        projects?.length>0?projects.map((e,i)=>{return <ProjectCard projectid={e.id}  title={e.name} key={i} img={e.mainImage} desc={e.description} />}):console.log("projects")
                    }



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
            {/*<motion.div className={"ProjectCard mb-[20px] max-w-[400px] min-w-[200px] h-fit  relative flex flex-col   overflow-hidden border-zinc-700  bg-zinc-800 rounded-2xl cursor-pointer box-border z-1 "}*/}
            {/*            initial={initial}*/}
            {/*            animate={animate}*/}
            {/*            onViewportEnter={()=>{setAnimate(animation);console.log("dd")}}*/}
            {/*            transition={{duration:0.5,delay:0.1+(prop.keys/10)}}*/}

            {/*            // viewport={{once:true}}*/}
            {/*>*/}
            {/*    <div className={"z-3 bg-zinc-800 w-full ProjectCardc h-fit"}>*/}

            {/*    <div className={"z-3 p-[25px]"}><img src={prop.img} className={"rounded-2xl spect-video object-cover "} alt={"Bye bye"}/></div>*/}
            {/*    <div className={"z-5 bg-[#0c1013] p-[20px] overflow-hidden top-[-35px]  h-[250px] relative"}>*/}
            {/*        <div className={"z-3 text-4xl mb-2 text-blue-500"}>{prop.title}</div>*/}
            {/*        <div className={"z-3 text-lg text-gray-400 mb-5 line-clamp-2"}>{prop.desc}</div>*/}
            {/*        <div className={"place-self-center"}><CustomButton text={"See Detail"} link={"Projects/"+prop.projectid}/></div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*</motion.div>*/}
            <motion.div>
                <div className={" prC flex flex-col  aspect-square border-1 rounded-2xl   border-zinc-700 bg-zinc-800 p-5 hover:scale-[1.05] duration-250 cursor-pointer"}>
                    <div className={"flex relative overflow-hidden w-[inherit]"}>
                        <img src={prop.img} className={"rounded-2xl relative"} alt={""} />
                    </div>
                    <div>
                        <div className={"z-3 text-4xl mb-2 text-blue-500"}>{prop.title}</div>
                        <div className={"z-3 text-lg text-gray-400 mb-5 prC-hover:line-clamp-3 line-clamp-1 "}>{prop.desc}</div>
                        <div className={"place-self-center"}>
                            <CustomButton text={"See Detail"} link={"Projects/"+prop.projectid}/>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
const ProjectFilter = (prop) => {
    const style = `text-white h-fit text-lg sm:text-2xl cursor-pointer sm:p-[10px] sm:px-[20px] p-5 text-center rounded-2xl `
    const hover = {scale:1.1}
    const tap = {scale:0.9}
    const setFilter = (filter) => {
        prop.setActive(filter)
        console.log(prop.active)
    }
    return (
        <>
            <motion.div className={"flex gap-2 overflow-x-auto overflow-y-hidden"}>
                <motion.div className={style+(prop.active==="all"?"activeFilter":"")}  onClick={()=>{setFilter("all")}} whileHover={hover} whileTap={tap}>All</motion.div>
                <motion.div className={style+(prop.active==="frontEnd"?"activeFilter":"")} onClick={()=>{setFilter("frontEnd")}} whileHover={hover} whileTap={tap}>Frontend</motion.div>
                <motion.div className={style+(prop.active==="backEnd"?"activeFilter":"")} onClick={()=>{setFilter("backEnd")}} whileHover={hover} whileTap={tap}>Backend</motion.div>
                <motion.div className={style + (prop.active==="api"?"activeFilter":"")} onClick={()=>{setFilter("api")}} whileHover={hover} whileTap={tap}>Api</motion.div>
                <motion.div className={style + (prop.active==="game"?"activeFilter":"")} onClick={()=>{setFilter("game")}} whileHover={hover} whileTap={tap}>Game</motion.div>
            </motion.div>
        </>
    )
}