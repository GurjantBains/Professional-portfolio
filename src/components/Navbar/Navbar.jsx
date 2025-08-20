import React, {useEffect, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import './Navbar.css';
import { motion } from "motion/react"
import {ScrollToTop} from "@/components/ScrollToTop/ScrollToTop.jsx";
export function Navbar() {
    let a = " text-xl hover:scale-95  transition-all cursor-pointer px-10 py-4" +
        "  duration-500  hover:bg-white text-black active:scale-105 rounded-4xl w-full"
    let b =({ isActive }) => ({
        color:isActive ? "white" : "black",
        backgroundColor: isActive ? "black" : "transparent",
        fontWeight: isActive ? "bold" : "normal",
        position: "relative",
        transition: {
            duration: 2000,
        }
    });
    const location = useLocation();
    const [pageName,setPageName] = useState(()=>{return location.pathname === "/About"})
    const [open, setOpen] = useState(false);

    window.addEventListener("resize",()=>{
        if(pageName === false){
            if(location.pathname === "/About"){
                setPageName(true)
            }
            else if(window.innerWidth<900){
                setPageName ( true)
            }
            else {
                setPageName (false)
            }
        }
    })
    useEffect(() => {
        if(location.pathname === "/About"){
            setPageName(true)
        }
        else if(window.innerWidth<900){
                setPageName ( true)
        }
        else{
            setPageName (false)
        }
        setOpen(false)

    }, [location.pathname]);

    return (
        <>
            <motion.div

                className={`flex nav-con items-center ${pageName?"flex-col pt-7 bg-[#d9d8d4] fixed overflow-hidden ":" w-[98%] absolute p-8  justify-center"} r z-999 
            ${open?" h-[100%]  ":" justify-center rounded-[50%] w-[80px] h-[80px] m-[10px] ml-[20px] `"}
            ` } id={"navBar"}>
            <Checkbox setOpen={setOpen} open={open} visibility={pageName}/>
                <motion.div  className={`flex ${pageName?"flex-col":"rounded-4xl top-[20px]"}  gap-3  p-3 justify-center bg-[#d9d8d4] overflow-hidden navBar py-3 relative 
                    ${pageName?open?" w-[200px]":"w-0 h-0 ":""}    `}>
            <NavLink to="/" style={b} className={a+" transition-all; duration-500 "}>  Home</NavLink>
            <NavLink to="/Skills"  style={b} className={a}> Skills</NavLink>
            <NavLink to="/Projects"  style={b} className={a}> Projects</NavLink>
            <NavLink to="/About" style={b} className={a}> About</NavLink>




        </motion.div>
            </motion.div>
            <ScrollToTop/>
        </>
    )
}

import styled from 'styled-components';

const Checkbox = (prop) => {
    return (
        <StyledWrapper className={`${prop.open?"":"p-4"} ${prop.visibility?"":"hidden"}`}>
            <label className="burger" htmlFor="burger" >
                <input type="checkbox" id="burger" onClick={()=>{prop.setOpen(!prop.open);}} />
                <span />
                <span />
                <span />
            </label>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .burger {
    position: relative;
    width: 40px;
    height: 30px;
    background: transparent;
    cursor: pointer;
    display: block;
  }

  .burger input {
    display: none;
  }

  .burger span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: black;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }

  .burger span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
  }

  .burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  .burger span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
  }

  .burger input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 5px;
  }

  .burger input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  .burger input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 28px;
    left: 5px;
  }`;

