import {useParams} from "react-router-dom";
import {motion} from "motion/react";
import {Navbar} from "@/components/Navbar/Navbar.jsx";
import {useEffect, useRef, useState} from "react";

export function ProjectDetail() {
    const { projectid } = useParams();
    const arr =[
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/App.jsx",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/App.css",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/Pages/Home/Home.jsx",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/Pages/Projects/Projects.jsx",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/Pages/About/About.jsx",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/Pages/Skills/Skills.jsx",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/Pages/Skills/components/Skill Container/Card.jsx",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/Pages/Skills/components/Skill Container/Skill.jsx",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/assets/react.svg",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/blocks/Animations/StarBorder/StarBorder.css",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/blocks/Animations/StarBorder/StarBorder.jsx",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/blocks/Backgrounds/Particles/Particles.jsx",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/blocks/TextAnimations/GradientText/GradientText.jsx",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/blocks/TextAnimations/TextType/TextType.jsx",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/components/Contact/Contact.jsx",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/components/Hero/Hero-Components/HeroRight.jsx",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/components/Hero/Hero.jsx",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/components/Navbar/Navbar.css",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/components/Navbar/Navbar.jsx",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/components/Project-Home/Project/Project.jsx",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/components/Project-Home/ProjectHome.jsx",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/components/Skills-Home/Skill Components/SkillHomeComponent.jsx",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/components/Skills-Home/SkillsHome.jsx",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/index.css",
        "https://raw.githubusercontent.com/GurjantBains/Professional-portfolio/main/src/main.jsx"
    ]
    useEffect(()=>{

    })


    return (
        <>
          <Navbar/>
            <motion.div className={"w-full h-full flex justify-center items-center pt-[150px] flex-col"}>
                <motion.div className={"w-[70%]"}>

                    <motion.div className={"text-5xl text-center font-bold"}>
                        PortFolio
                    </motion.div>
                    <ProjectDescription title={"✨ Portfolio Description"} desc={"Welcome to my personal portfolio — a curated space showcasing who I am, what I do, and how I can help bring ideas to life through design and development."}  />
                    <ProjectDescription title={"🧑‍💻 About Me"} desc={"Get to know the person behind the code. This section gives a brief introduction to who I am, my passion for technology, and the journey that shaped my skills. Whether you're a recruiter, client, or fellow developer, this is where you’ll understand what drives me."} img="/Project1/Project1.png" />
                    <ProjectDescription title={"🛠️ Skills"} desc={"A clear breakdown of the technologies, tools, and frameworks I specialize in. From frontend to backend, this section reflects my technical proficiency and the stack I use to build scalable, efficient, and visually appealing applications."} img="/Project1/Project1-1.png" />
                    <ProjectDescription title={"🚀 Projects"} desc={"A showcase of my favorite and most impactful work. Each project includes a brief summary, technologies used, and links to live demos or repositories. It demonstrates my ability to solve real-world problems through thoughtful design and clean code."} img="/Project1/Project1-2.png" />
                    <ProjectDescription title={"📬 Contact"} desc={"Interested in collaborating or hiring? The contact section makes it easy to reach out. Whether it’s a professional opportunity or a tech-related conversation, I’m always open to connecting.\n" +
                        "\n"} img="/Project1/Project1-3.png" />
                </motion.div>

                <ProjectCodePage url={arr}/>
                <div className={"w-full pt-[20px"}>

                <Button color={"transparent"}/>
                </div>

            </motion.div>

        </>
    )
}

const ProjectDescription  = (prop) => {
    return (
        <>
            <motion.div className={"text-xl mt-[50px] gap-2 grid"}>
                <motion.div className={"text-left text-3xl font-semibold"}>{prop.title}</motion.div>
                {prop.desc}
                {prop.img!==undefined?
                <img src={prop.img} alt={"ss"} width={"70%"} className={"place-self-center mt-5"}/>:""
                }
            </motion.div>

        </>
    )
}

const ProjectCodePage = (prop) => {
    const [name, setName] = useState([]);
    const [activeCode, setActiveCode] = useState(0)
    const codeRef = useRef();

    // const name =[];
//remove on publish build - name.length
    useEffect(() => {
       if(!name.length>0) {
           if(prop.url && prop.url.length>0) {
               const names = prop.url.map((item) => (item.split("/").pop()))
               setName(names)
           }
       }
    }, []);
    // useEffect(() => {
    //     async function highlightCode(){
    //     if(codeRef.current ) {
    //        await new Promise(()=>{  hljs.highlightAll()});
    //     }
    //     }
    //     highlightCode();
    // },[activeCode])


    return (
        <>
            <div className={"w-full flex flex-col items-center mt-[100px] mb-[200px]"}>
                <div className={"w-[70%]"}>

                <div className={"text-6xl text-center"}>
                    Code
                </div>
                    <div ref={codeRef} className={"w-full flex flex-wrap mt-[50px]"}>

                        {
                            name.length>0?name.map((name, i) => (
                                <ProjectCodeLoader
                                    name={name}
                                    key={i}
                                    id={i}
                                    active={activeCode}
                                    setAC={setActiveCode} />
                            )):"null"
                        }

                    </div>

            <ProjectCode  url={prop.url[activeCode]} id={activeCode} />
                </div>

        </div>
        </>
    )
}

import "highlight.js/styles/github.css";
import "highlight.js/styles/atom-one-dark.css";

import hljs from "highlight.js";
import {Button} from "@/components/Contact/Contact.jsx";

const ProjectCode = (prop) => {
    const [highlightedCode, setHighlightedCode] = useState("");
    const [isLoading, setIsLoading] = useState()
    const a = useRef();
    useEffect(() => {
        let isMounted = true;
    async function getCode(){
       try{
           setIsLoading(true)
           setHighlightedCode("")
           const response = await fetch(prop.url)
           const data1 = await response.text();
           if(isMounted ){
                const result = hljs.highlightAuto(data1)
                setHighlightedCode(result.value)
               // setData(result.value)

           }
       }catch(err){
           console.log(err)
       }finally {
           if (isMounted){setIsLoading(false)}
           // a.current.dangerouslySetInnerHTML = {__html:highlightedCode}
       }

    }
    getCode();

    return ()=>{isMounted = false}
    }, [prop.url]);

    return (
        <>
            <motion.pre className={"bg-black p-10"}
            animate={{transition:{duration:1}}}
            >
                <code style={{
                    textWrap: "wrap",
                }} ref={a}
                      dangerouslySetInnerHTML={{__html:highlightedCode}}
                      className={"bg-black"}>
                    {/*{highlightedCode}*/}
                </code>
            </motion.pre>
        </>
    )
}

const ProjectCodeLoader  = (prop) => {
    return (
        <>
            <motion.div className={`bg-black  border-white  border-1 cursor-pointer ${prop.active===prop.id?" activeCode":""}`}
                        onClick={()=>{prop.setAC(prop.id)}}
                        style={{padding:'16px'}}
                        whileHover={{scale:1.1}}>

                {prop.name}
            </motion.div>

        </>
    )
}

