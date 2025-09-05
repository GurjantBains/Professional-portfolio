import {Link, useParams} from "react-router-dom";
import {motion} from "motion/react";
import {Navbar} from "@/components/Navbar/Navbar.jsx";
import {useEffect, useRef, useState} from "react";
import Loader from "@/components/Loader/Loader.jsx";

export function ProjectDetail() {
    // const baseUrl = "http://localhost/API/Portfolio%20Api/Portfolio-Api/"
    const baseUrl = "https://portfolio-api-c2uc.onrender.com/"
    const { projectid } = useParams();
    const [projectDetails, setProjectDetails] = useState([]);
    const [sections, setSections] = useState([])
    const [urlArr, setUrlArr] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [retry, setRetry] = useState(1);


    useEffect(()=>{
        async function fetchDetails(){
        const result = await fetch(baseUrl+"api-fetch-project.php",{
            method:"POST",
            mode:"cors",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                id: projectid,
            })
        })
            return (await result).json()
        }
         fetchDetails().then(r => {
             setLoading(false);

             if(r.message){
                 setNotFound(r.message)
                 
             }
             else {
             setProjectDetails(r)
             }
         }).catch(err=>{
             setLoading(false);
             setError(true)
         })
    },[retry])
    useEffect(() => {
        if(projectDetails.length>0){
            const a =JSON.parse(projectDetails[0].sections)
            const b = JSON.parse(projectDetails[0].urls)



            setSections(a)
            setUrlArr(b)

        }
    }, [projectDetails]);

    function retryF(){

        setRetry(retry*-1);
        setError(false)
        setNotFound(false)
        setLoading(true)
    }


    return (
        <>
            {
                loading?<Loader/>:""
            }
            {/*<Loader />*/}
          <Navbar/>
            <motion.div className={"w-full h-full flex justify-center items-center pt-[150px] flex-col"}>
                <motion.div className={"w-[70%]"}>

                    <motion.div className={"text-5xl text-center font-bold"}>
                        {
                            projectDetails?.length>0?projectDetails[0].name:""
                        }

                    </motion.div>
                    <div className={"w-full flex justify-end"}>
                        {projectDetails?.length>0?
                            projectDetails[0].projectUrl!==null && projectDetails[0].projectUrl!==undefined && projectDetails[0].projectUrl !== "example.com" ?
                                <a href={projectDetails[0].projectUrl}
                                className={"ml-20 text-xl bg-gray-600 p-3 place-self-end rounded-lg hover:scale-[1.05] duration-200 hover:bg-gray-900 hover:text-shadow-white"}
                                   target="_blank"

                                >See Project
                                </a>
                                :"":""}
                    </div>
                    {
                        sections.length>0?sections.map((e,i)=>{
                            return <ProjectDescription title={e[0]} desc={e[1]} key={i} img={e[2]}/>

                        }):""}
                    {
                        !loading?error?<div className="text-center w-full text-5xl">Could Not Load Project</div>:"":""
                    }{
                    !loading?notFound?<ProjectNotFound setRetry={setRetry} retry={retryF} />:"":""
                }
                </motion.div>

                <ProjectCodePage url={urlArr}/>
                <div className={"w-full pt-[20px"}>
                    <div>
                    </div>
                <Button color={"transparent"}/>
                </div>

            </motion.div>

        </>
    )
}

const ProjectDescription  = (prop) => {
    // const baseUrl = "http://localhost/API's/Portfolio%20Api/Portfolio-Api/Public"
    const baseUrl = "https://portfolio-api-c2uc.onrender.com/Public"


    return (
        <>
            <motion.div className={"text-xl mt-[50px] gap-2 grid"}>
                <motion.div className={"text-left text-3xl font-semibold"}>{prop.title}</motion.div>
                <div className={"text-gray-300"}>
                {prop.desc}
                </div>
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
    const [mobile, setMobile] = useState(false)

    // const name =[];
//remove on publish build - name.length
    useEffect(() => {
       if(!name.length>0) {
           if(prop.url && prop.url.length>0) {
               const names = prop.url.map((item) => (item.split("/").pop()))
               setName(names)

           }
       }
    }, [prop.url]);
    window.addEventListener('resize',()=>{
        if(window.innerWidth>1200){
            setMobile(false)
        }
        else {
            setMobile(true)
        }
    })
  useEffect(() => {
      if(window.innerWidth>1000 ){
          setMobile(false)
      }
      else {
          setMobile(true)

      }
      
  },[])


    return (
        <>
            <div className={"w-full flex flex-col items-center mt-[100px] mb-[200px]"}>
                <div className={"sm:w-[70%]"}>

                <div className={"text-6xl text-center"}>
                    {name.length>0?"Code":""}
                </div>
                    <div ref={codeRef} className={"w-full flex flex-wrap mt-[50px] "}>


                        {
                           mobile===false? name.length>0?name.map((name, i) => (
                                <ProjectCodeLoader
                                    name={name}
                                    key={i}
                                    id={i}
                                    active={activeCode}
                                    setAC={setActiveCode} />
                            )):"":""
                        }{
                    }
                        {
                            mobile === true?<MobileCodeLoader  active={activeCode} setAC={setActiveCode}
                            name={name}
                            />:""
                        }

                    </div>
                    {
                        name.length>0?<ProjectCode  url={prop.url[activeCode]} id={activeCode} />:""
                    }

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
           // setHighlightedCode("")
           const response = await fetch(prop.url)
           const data1 = await response.text();
           if(isMounted ){
                const result = hljs.highlightAuto(data1)
                setHighlightedCode(result.value)
               // setData(result.value)

           }
       }catch(err){
           
           setHighlightedCode("Could Not Load Code")
       }finally {
           if (isMounted){setIsLoading(false)}
           // a.current.dangerouslySetInnerHTML = {__html:highlightedCode}
       }

    }
    getCode().then();

    return ()=>{isMounted = false}
    }, [prop.url]);

    return (
        <>
            <motion.pre className={"bg-black p-10 w-full overflow-hidden"}
            animate={{transition:{duration:1}}}
            >
                <code
                    style={{
                    textWrap: "wrap",
                }} ref={a}
                      dangerouslySetInnerHTML={{__html:highlightedCode}}
                      className={"bg-black w-full text-[10px] break-words overflow-hidden"}>
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

const NewProjectDetail  = (prop) => {
    return (
        <>
        <div className={"bg-black  border-white  border-1 cursor-pointer"} onClick={()=>{

        }}>
            {prop.title}
        </div>

        </>
    )
}

const ProjectNotFound =(prop) => {

    return (
        <div className="min-h-[220px] flex items-center justify-center p-6">
            <div
                role="status"
                aria-live="polite"
                className="w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-8 text-center"
            >
                <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                    {/* Simple illustrative SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 8.5l7 7" />
                    </svg>
                </div>

                <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-2">Project not found</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                    We couldn't find the project you were looking for — it might have been removed or the
                    link could be incorrect.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                        type="button"
                        onClick={()=>{
                            prop.retry()
                        }}
                        className="inline-flex cursor-pointer items-center justify-center px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Retry
                    </button>

                    <Link
                        className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none"
                     to={'/Projects'}>
                        See other projects
                    </Link>
                </div>
            </div>
        </div>
    );
}

const MobileCodeLoader = (prop) => {
    const active = useRef(prop.name[prop.active]);

    
    return (
        <>
            <select className={"p-4 border-1 text-xl rounded-lg mx-auto mb-10   "} value={active.current} onChange={(e)=>{prop.setAC(e.target.value)}}>
                {
                    prop.name.map((name, i) => {
                        // if(name=== active) return
                     return <option className={"text-black  text-2xl ]"} key={i} value={i}>{name}</option>
                    })

                }

            </select>

        </>
    )
}
