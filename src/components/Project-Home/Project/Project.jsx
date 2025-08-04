import React, {useRef, useState} from 'react';
import {motion} from "motion/react";
import CustomButton from "@/components/Skills-Home/SkillsHome.jsx";

export default function Project(prop) {
    const [opacity, setOpacity] = useState(0);
    const [leftPosition, setLeftPosition] = useState(0);
    const [rightPosition, setRightPosition] = useState(0);
    const [rotation, setRotation] = useState(0);
    const [middlePos, setMiddlePos] = useState(0);
    const [button, setButton] = useState(-50);
    const [display, setDisplay] = useState("none");
    const [canHover, setCanHover] = useState(true)
    const reff = prop.reff;

    const [initial, setInitial] = useState({opacity:0,x:-300});
    const [animate, setAnimate] = useState({opacity:1,x:0});
    const [animation, setAnimation] = useState(initial);


    // const bg = prop.bg1

    return (
        <>
            <motion.div className={"project-container place-self-center p-10  content-center" +
                "gap-5 flex flex-col justify-between  rounded-2xl opacity-90  z-10"}
                        style={{...{backgroundColor:"#2D2A32"},...initial}}
                        animate={{...animation,...{transition:{duration:0.8,delay:0.3}}}}
                        whileHover={{backgroundColor:"#615f68", scale:1.1}}
                        onViewportEnter={()=>{setAnimation(animate)}}
                        
            onMouseEnter={() => {
                if(!canHover)return
                setOpacity(1);
                setLeftPosition(-300);
                setRightPosition(350);
                setRotation(-30);
                setMiddlePos(-150)
                setButton(0)
                setDisplay("flex")
                reff.current.style.backgroundImage=`url(${prop.bg})`
                const mainPos = reff.current.getBoundingClientRect();
                reff.current.style.backgroundPositionY = mainPos.top*-1 + "px";
                }}
                        onMouseLeave={()=>{
                            if(!canHover)return
                            setOpacity(0);
                            setLeftPosition(0);
                            setRightPosition(0);
                            setRotation(0)
                            setMiddlePos(0)
                            setButton(-50)
                            setDisplay("none")
                            reff.current.style.backgroundImage=``


                            setCanHover(false)
                            setTimeout(()=>setCanHover(true),300)
                        }}
            >

                <motion.div
                    animate={{
                        top:middlePos,
                    }}

                    className={"relative project-small gap-5 flex flex-col justify-between z-1"}>
                    <div className={"project-image-middle"}>
                    <img src={prop.img}
                    style={{width: "350px"}}/>
                    </div>

                <div className={"project-heading-middle text-white font-bold text-center " }>
                    {prop.title}
                </div>

                </motion.div>

                <motion.div animate={{
                    display: display,
                    opacity: opacity,
                    x:leftPosition,
                    rotate: rotation,
                    zIndex:opacity
                }} className={"absolute z-0 opacity-0 project-left"}
                            style={{

                            }}
                transition={{
                    duration: 0.4,
                }}
                >
                    <ProjectCard tags={prop.tags} title={prop.title} img={prop.img1} />




                </motion.div>

                {/* Right Side */}
                <motion.div animate={{
                    display: display,
                    opacity: opacity,
                    x:rightPosition,
                    rotate: rotation*-1,
                    zIndex:opacity
                }} className={"absolute z-0 opacity-0 project-left"}
                            style={{

                            }}
                            transition={{
                                duration: 0.4,
                            }}
                >
                    <ProjectCard desc={prop.desc} title={prop.title} img={prop.img2} />


                </motion.div>
            <motion.div
                style={{
                    position: "relative",
                    opacity: 0,
                }}
                animate={{
                    opacity: opacity,
                    top:button+"px",
                    zIndex:opacity
                }}>
                <CustomButton
                    link={"Projects"}
                    text={"See Details"}
                    classname={"absolute top-0"}

                />

            </motion.div>
            </motion.div>
        </>
    )
}


import styled from 'styled-components';

export const ProjectCard = (prop) => {
    return (
        <StyledWrapper>
            <article className="article-wrapper">
                <div className="rounded-lg container-project" style={{
                    backgroundImage:`url(${prop.img})`,
                    backgroundSize: 'cover',

                }}>
                    <img className="project-image" src={prop.img} alt="" />
                </div>
                <div className="project-info">
                    <div className="flex-pr">
                        <div className="project-title text-nowrap">{prop.title?prop.title:"Project"} </div>
                        <div className="project-hover">
                            <svg style={{color: 'black'}} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth={2} fill="none" stroke="currentColor"><line y2={12} x2={19} y1={12} x1={5} /><polyline points="12 5 19 12 12 19" /></svg>
                        </div>
                    </div>
                    <div className="types flex-wrap">



                        {
                            prop.tags?.length>0?(prop.tags.map((value, index) => (
                                index % 2 === 0
                                    ? <ProjectCardTag1 key={index} tag={value} />
                                    : <ProjectCardTag2 key={index} tag={value} />
                            ))):prop.desc?<div className={"project-Home-desc"}><ProjectCardTag1 tag={prop.desc}/></div>:"This is My project"
                        }


                    </div>
                </div>
            </article>
        </StyledWrapper>
    );
}


export const ProjectCardTag1 = (prop)=>{
    return(<>

        <span style={{backgroundColor: 'rgba(165, 96, 247, 0.43)', color: 'rgb(85, 27, 177)'}} className="project-type">• {prop.tag}</span>

    </>);
}
export const ProjectCardTag2 = (prop)=>{
    return(<>

        <span className="project-type">• {prop.tag}</span>

    </>);
}

const StyledWrapper = styled.div`
  .article-wrapper {
    width: 250px;
    -webkit-transition: 0.15s all ease-in-out;
    transition: 0.15s all ease-in-out;
    border-radius: 10px;
    padding: 5px;
    border: 4px solid transparent;
    cursor: pointer;
    background-color: white;
  }

  .article-wrapper:hover {
    -webkit-box-shadow: 10px 10px 0 #4e84ff, 20px 20px 0 #4444bd;
    box-shadow: 10px 10px 0 #4e84ff, 20px 20px 0 #4444bd;
    border-color: #0578c5;
    -webkit-transform: translate(-20px, -20px);
    -ms-transform: translate(-20px, -20px);
    transform: translate(-20px, -20px);
  }

  .article-wrapper:active {
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  .types {
    gap: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    place-content: flex-start;
  }

  .rounded-lg {
   /* class tailwind */
    border-radius: 10px;
  }

  .article-wrapper:hover .project-hover {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    background-color: #a6c2f0;
  }

  .project-info {
    padding-top: 20px;
    padding: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: 20px;
  }

  .project-title {
    font-size: 2em;
    margin: 0;
    font-weight: 600;
   /* depend de la font */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: black;
  }

  .flex-pr {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .project-type {
    background: #b2b2fd;
    color: #1a41cd;
    font-weight: bold;
    padding: 0.3em 0.7em;
    border-radius: 15px;
    font-size: 12px;
    letter-spacing: -0.6px
  }

  .project-hover {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 9px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .container-project {
    width: 100%;
    height: 170px;
    background: gray;
  }`;

