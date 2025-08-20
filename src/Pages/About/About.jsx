import {Navbar} from "../../components/Navbar/Navbar.jsx";
import {motion} from "motion/react";
import React, {useEffect, useState} from 'react';
import {Button} from "@/components/Contact/Contact.jsx";


export function About() {
    const [mobile, setMobile] = useState(()=>{
        return window.innerWidth < 900;
    });
    const handleResize = () => {
        setMobile(()=>{return window.innerWidth < 900})
    }


    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, []);
    return (
        <>
            <Navbar/>
            <div className={"w-full min-[900]:h-[100vh]  flex justify-center items-center bg-[#0b0f12]   "}>
                <div className={"sm:w-[80%] w-full flex  flex-col bg-[#0f0f14] rounded-[2%] "}>
                    <div className={"flex p-[10px] content-between max-[900px]:flex-col "}>
                        <div className={"flex flex-[3] flex-col text-2xl lg:text-4xl p-[20px] font-semibold gap-5 text-center content-center "}> ABOUT ME
                            <div className={"flex  flex-col items-center gap-3"}>
                            <img className={"w-[80%] sm:w-[70%] lg:w-[50%] xl:w-[70%]"} alt={""} style={{
                                borderRadius: "50%",
                            }} src={"Profile.png"}/>
                            <div className={"text-lg"}>
                            Gurjant Singh
                            </div>
                        </div></div>
                        <div className={"flex-[1]"}></div>
                        <div className={"flex flex-[7] flex-col p-[25px] max-lg:text-center"}>
                            <div className={"grid gap-2 max-lg:items-center"}>
                                <div >
                                    <div className={"text-3xl mb-10"}>Hi I'm Gurjant Singh</div>
                                    <div className={"text-xl text-gray-300"}>I am a Full Stack Web Stack Web Developer</div>
                                </div>
                                    <div className={"text-lg text-gray-300"}>I can make your Websites Dynamic <br/> and beautiful </div>
                            </div>
                            <div className={"w-[90%] border-[1px] border-[#36415338] mx-auto mt-[30px] mb-[30px]"} style={{color:"rgba(54,65,83,0.22)"}}></div>
                            <div className={"flex flex-col  gap-3 max-lg:items-center  "}>
                                <div className={"text-3xl text-left  max-lg:text-center font-semibold"}>
                                    Skills
                                </div>
                                <SkillLevel title={"Html"} number={90}/>
                                <SkillLevel title={"CSS"} number={70}/>
                                <SkillLevel title={"JS"} number={70}/>
                                <SkillLevel title={"PHP"} number={30}/>
                                <SkillLevel title={"React"} number={20}/>

                            </div>
                        </div>
                    </div>

                    <div className={"flex w-full max-[900px]:flex-col    "}>
                        <div className={"flex flex-[7] flex-col text-5xl p-10 max-lg:items-center gap-4 "}>
                        Interests
                            <div className={"w-full flex  max-sm:flex-wrap justify-center"}>
                                <div className={"flex w-[185px]  flex-col text-3xl p-10"}>
                                <Interest img={'svg/laravel.svg'} title={"Laravel"} />
                                </div>
                                <div className={"flex w-[185px]]  flex-col text-3xl p-10"}>
                                    <Interest img={'svg/nextJs.svg'} title={"Next JS"} />
                                </div>
                                <div className={"flex w-[185px]  flex-col text-3xl p-10 text-center"}>
                                    <Interest img={'svg/sql.svg'} title={"SQL"} />
                                </div>

                            </div>
                        </div>
                        <div className={"flex-[5] flex justify-end pr-16 items-center place-self-center "}>
                            {
                                !mobile?<ContactShort/>:<Button/>

                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const SkillLevel = (prop) => {
    return (
        <>
            <div className={"w-[70%]"}>
                <div className={"flex justify-between p-1 w-full "}><div>{prop.title}</div><div> {prop.number}%</div> </div>
                <div className={`h-[8px] bg-[#333] w-full rounded-[4px] overflow-hidden `}>
                    <div className={`h-full`} style={{background:"linear-gradient(to right, #5d5fef, #8f6eff)",
                        width:prop.number+"%"
                    }}> </div>
                </div>
            </div>
        </>
    )
}

const Interest = (prop) => {

    return (
        <>
            <motion.div>
                <motion.div animate={{y:-10,scaleX:1.04}} transition={{repeat:Infinity,duration:3,delay:1,repeatType:'reverse'}}
                            style={{scaleX:0.95,position:"relative",top:5,marginBottom:"3px"}}>

                {prop.img?<img src={prop.img} style={{
                    width: "100%",
                    maxWidth: "80px",
                }} alt={"d"}/>:null}
                </motion.div>
                {prop.title}
            </motion.div>
        </>
    )
}
import styled from 'styled-components';

const ContactShort = () => {
    return (
        <StyledWrapper>
            <ul className="example-2">
                <li className="icon-content">
                    <a data-social="linkedin" aria-label="LinkedIn" href="https://www.linkedin.com/in/gurjant-singh-97926518a/" target={"_blank"}>
                        <div className="filled" />
                        <svg xmlSpace="preserve" viewBox="0 0 16 16" className="bi bi-linkedin" fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                    </a>
                    <div className="tooltip">LinkedIn</div>
                </li>
                <li className="icon-content">
                    <a data-social="github" aria-label="GitHub" href="https://github.com/GurjantBains" target={"_blank"}>
                        <div className="filled" />
                        <svg xmlSpace="preserve" viewBox="0 0 16 16" className="bi bi-github" fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                    </a>
                    <div className="tooltip">GitHub</div>
                </li>
                <li className="icon-content">
                    <a data-social="instagram" aria-label="Instagram" href="https://mail.google.com/mail/?view=cm&fs=1&to=jantywebdev@gmail.com&su=I want to create a ...&body=I want to contact you About.." target={"_blank"}>
                        <div className="filled" />
                        <svg width="23" height="23" viewBox="0 0 134 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M111.5 3.8L103 10.1L66.7 37.4L30.3 10.1L21.8 3.7C12.8 -3 0 3.4 0 14.7V26.8V92C0 97 4.1 101.1 9.1 101.1H30.3V49.5L66.7 76.8L103 49.5V101H124.2C129.2 101 133.3 96.9 133.3 91.9V26.8V14.7C133.3 3.4 120.5 -3 111.5 3.8Z"/>
                        </svg>
                    </a>
                    <div className="tooltip">Gmail</div>
                </li>


            </ul>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  ul {
    list-style: none;
  }

  .example-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 0.5rem;
  }
  .example-2 .icon-content {
    margin: 0 10px;
    position: relative;
  }
  .example-2 .icon-content .tooltip {
    position: absolute;
    top: 20px;
    right: 250%;
    transform: translateX(50%);
    color: #fff;
    padding: 6px 10px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  .example-2 .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: 5px;
  }
  .example-2 .icon-content a {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #4d4d4d;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
  }
  .example-2 .icon-content a svg {
    position: relative;
    z-index: 1;
    width: 30px;
    height: 30px;
  }
  .example-2 .icon-content a:hover {
    color: white;
  }
  .example-2 .icon-content a .filled {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #000;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover .filled {
    height: 100%;
  }

  .example-2 .icon-content a[data-social="linkedin"] .filled,
  .example-2 .icon-content a[data-social="linkedin"] ~ .tooltip {
    background-color: #0274b3;
  }

  .example-2 .icon-content a[data-social="github"] .filled,
  .example-2 .icon-content a[data-social="github"] ~ .tooltip {
    background-color: #24262a;
  }
  .example-2 .icon-content a[data-social="instagram"] .filled,
  .example-2 .icon-content a[data-social="instagram"] ~ .tooltip {
    background: linear-gradient(
      45deg,
      #405de6,
      #5b51db,
      #b33ab4,
      #c135b4,
      #e1306c,
      #fd1f1f
    );
  }
  .example-2 .icon-content a[data-social="youtube"] .filled,
  .example-2 .icon-content a[data-social="youtube"] ~ .tooltip {
    background-color: #ff0000;
  }`;


