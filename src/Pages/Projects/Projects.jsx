import {Navbar} from "../../components/Navbar/Navbar.jsx";
import {motion} from "motion/react";
import {useEffect, useRef, useState} from "react";
import CustomButton from "@/components/Skills-Home/SkillsHome.jsx";
import Loader from "@/components/Loader/Loader.jsx";
import {Button} from "@/components/Contact/Contact.jsx";


export function Projects() {
    window.scrollTo(0, 0);
    const [projects, setProjects] = useState([]);
    const [activeFilter, setActiveFilter] = useState(-1);
    const [loading, setLoading] = useState(true);
    const allProjects = useRef([]);
    const filteredData = useRef([]);
    // const baseUrl = "http://localhost/API/Portfolio%20Api/Portfolio-Api/"
    const baseUrl = "https://portfolio-api-c2uc.onrender.com/"




    useEffect(()=>{
        async function fetchCode(){
            const data = await fetch(`${baseUrl}api-fetch-projects.php`,{
                method: "POST",
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({'filter': activeFilter??"-1"})
            } )

            return await data.json()}
        // return await data}
        fetchCode().then(data => {
            allProjects.current = data;
            setProjects(data)
            setLoading(false);
        })
    },[activeFilter])
    return (
        <>
                <Navbar />
            {
                loading && <Loader />
            }
            <div className={"w-full  flex place-content-center pt-[100px] bg-zinc-900 min-h-[100vh]"}>

                <div className={" w-[90%] sm:pt-10" }>
                    <div className={" max-sm:text-5xl sm:text-center sm:text-8xl max-sm:pb-10 pl-[100px] "}>
                    Projects
                    </div>
                    <div className={"sm:p-10 sm:pl-[100px]"}>
                    <ProjectFilter url={baseUrl} active={activeFilter} setActive={setActiveFilter}/>
                    </div>
                    <div className={"grid xl:grid-cols-[repeat(auto-fill,minmax(375px,1fr))] " +
                        " sm:grid-cols-[repeat(auto-fill,minmax(275px,1fr))] "+
                        " max-sm:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] " +
                        " gap-25   rounded-2xl sm:p-15 max-sm:p-10 "}>
                    {
                        !loading?projects?.length>0?
                            projects.map((e,i)=>{return <ProjectCard projectid={e.id}  title={e.name} key={i} img={e.mainImage} desc={e.description} />}):"":
                            ""
                    }
                        {

                        }
                    </div>
                    <div className={"mt-20"}>
                <Button />
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

            <motion.div>
                <div className={" prC flex flex-col  aspect-square border-1 rounded-2xl   border-zinc-700 bg-zinc-800 p-5 hover:scale-[1.05] duration-250 cursor-pointer"}>
                    <div className={"flex relative overflow-hidden w-[inherit]"}>
                        <img src={prop.img} className={"rounded-2xl relative aspect-video object-cover"} alt={""} />
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
    const [filters, setFilters] = useState([]);
    const setFilter = (filter) => {
        prop.setActive(filter)
    }
    const fetchFilters = async () => {
        const result = await fetch(prop.url+"api-read-tags.php")
        return await result.json();
    }
    useEffect(() => {
        fetchFilters().then(data =>{
            if(data.success){
                setFilters(data.tags);
            }
        })
    }, []);
    return (
        <>
            <motion.div className={"flex gap-2 overflow-x-auto overflow-y-hidden"}>
                <motion.div className={style+(prop.active===-1?"activeFilter":"")}  onClick={()=>{setFilter(-1)}} whileHover={hover} whileTap={tap}>All</motion.div>
                {
                    filters.length>0 ? filters.map((filter,i) => (
                        <ProjectsFilterCard active={prop.active} style={style} key={i} hover={hover} tap={tap} tag={filter.name} id={filter.id}  setFilter={setFilter} />
                    )):""
                }
            </motion.div>
        </>
    )
}

export const ProjectsFilterCard = (prop) => {
    return (
        <motion.div
            className={prop.style+(prop.active===prop.id?"activeFilter":"")}
            onClick={()=>{prop.setFilter(prop.id)}}
            whileHover={prop.hover}
            whileTap={prop.tap}>{prop.tag}</motion.div>
    )
}