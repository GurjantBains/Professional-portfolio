import React, {useState} from 'react';
import {SkillHomeComponent} from "./Skill Components/SkillHomeComponent.jsx";
import {motion} from "motion/react";

export function SkillsHome() {
    return (
        <>
            <motion.div

                className={"w-full min-[500px]:p-10 skillHome"} >
                <div className={"skill-home-heading text-center rounded-[20px] overflow-hidden"}
                style={{
                    color:"#F4E8C1"}}>
                    <b>
                    Skills
                    </b>
                </div>
                <div className={"skillCard-container flex-wrap flex justify-center items-center gap-10 min-[100px]:p-10 "}>

                    <SkillHomeComponent image="Html.png"
                                        title="Html 5"
                                        desc="Html 5"
                                        color={"#E44D26"}
                                        delay={0.3}

                    />
                    <SkillHomeComponent image="Css.png"
                                        title="Css 3"
                                        desc="Css 3"
                                        color={"#264DE4"}
                                        delay={0.4}

                    />
                    <SkillHomeComponent image="Js.png"
                                        title="Javascript"
                                        desc="Javascript "
                                        color={"#F0DB4F"}
                                        delay={0.5}
                    />
                    <SkillHomeComponent image="react.png"
                                        title="React Js"
                                        desc="Javascript "
                                        color={"#61DBFB"}
                                        delay={0.6}
                    />
                    <SkillHomeComponent image="php.png"
                                        title="PHP"
                                        desc="Javascript "
                                        color={"#8993BE"}
                                        delay ={0.7}
                    />


                </div>
                <motion.div style={{maxWidth:"160px", placeSelf:"center"}} >
                <CustomButton link={"Skills"} text={"Read More"} style={{
                }} />
                </motion.div>
            </motion.div>
        </>
    )
}

import styled from 'styled-components';
import {Link} from "react-router-dom";

const CustomButton = (prop) => {
    return (
        <StyledWrapper>
                    <Link to={'/'+prop.link} style={{maxWidth:"160px",width:"fit-content"}}>
            <button  className="animated-button place-self-center">
                <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
                <span className="text">
                    {prop.text}
                </span>
                <span className="circle" />
                <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                </svg>
            </button>
                </Link>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .animated-button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 16px 36px;
    border: 4px solid;
    border-color: transparent;
    font-size: 16px;
    background-color: inherit;
    border-radius: 100px;
    font-weight: 600;
    color: greenyellow;
    box-shadow: 0 0 0 2px greenyellow;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button svg {
    position: absolute;
    width: 24px;
    fill: greenyellow;
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .arr-1 {
    right: 16px;
  }

  .animated-button .arr-2 {
    left: -25%;
  }

  .animated-button .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: greenyellow;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .text {
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button:hover {
    box-shadow: 0 0 0 12px transparent;
    color: #212121;
    border-radius: 12px;
  }

  .animated-button:hover .arr-1 {
    right: -25%;
  }

  .animated-button:hover .arr-2 {
    left: 16px;
  }

  .animated-button:hover .text {
    transform: translateX(12px);
  }

  .animated-button:hover svg {
    fill: #212121;
  }

  .animated-button:active {
    scale: 0.95;
    box-shadow: 0 0 0 4px greenyellow;
  }

  .animated-button:hover .circle {
    width: 220px;
    height: 220px;
    opacity: 1;
  }`;

export default CustomButton;
