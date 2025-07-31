import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import './Navbar.css';
import { motion } from "motion/react"
export function Navbar() {
    let a = " text-xl hover:scale-95  transition-all cursor-pointer px-10 py-4" +
        "  duration-500  hover:bg-white text-black active:scale-105 rounded-4xl "
    let b =({ isActive }) => ({
        color:isActive ? "white" : "black",
        backgroundColor: isActive ? "black" : "transparent",
        fontWeight: isActive ? "bold" : "normal",
        position: "relative",
        transition: {
            duration: 2000,
        }
    });


    return (
        <>
            <div className={"flex items-center justify-center p-8 sticky "}>
        <motion.div
           animate={{
               top:"0px",
               opacity:1,
               transition:{
                   duration: 0.7,
               }

           }}
           onLoad={()=>{
               console.log('d');
           }}
            style={{
                position:"relative",
                top:"-200px",
                opacity:0,
            }}
            className={"flex gap-3 max-w-max p-3 justify-center " +
            "bg-var(--bg-nav-color) navBar rounded-4xl py-3 relative "}>

            <NavLink to="/" animate={{
                color: "white",
            }}  style={b} className={a+" transition-all; duration-500 "} onClick={()=>{
                // setPosition({left:190})
            }}>  Home</NavLink>
            <NavLink to="/Skills"  style={b} className={a}> Skills</NavLink>
            <NavLink to="/Projects" style={b} className={a}> Projects</NavLink>
            <NavLink to="/About" style={b} className={a}> About</NavLink>





        </motion.div>
            </div>
        </>
    )
}