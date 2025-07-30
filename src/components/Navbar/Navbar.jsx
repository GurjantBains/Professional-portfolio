import React from "react";
import {NavLink} from "react-router-dom";
import './Navbar.css';
import {Link} from "react-router-dom";
export function Navbar() {
    let a = " text-xl hover:scale-95  transition-all cursor-pointer px-10 py-4" +
        "  duration-500  hover:bg-white text-black active:scale-105 rounded-4xl "
    let b =({ isActive }) => ({
        color:isActive ? "white" : "black",
        backgroundColor: isActive ? "black" : "transparent",
        fontWeight: isActive ? "bold" : "normal",

    });

    return (
        <>
            <div className={"flex items-center justify-center p-8 "}>
        <div className={"flex gap-3 max-w-max p-3 justify-center bg-var(--bg-nav-color) navBar rounded-4xl py-3 "}>
            {/*<Link to="/" className={a+" "}> Home</Link>*/}
            {/*<Link to="/Skills" className={a}> Skills</Link>*/}
            {/*<Link to="/Projects" className={a}> Projects</Link>*/}
            {/*<div className={a}> Home</div>*/}
            {/*<Link to="/About" className={a}> About</Link>*/}

            <NavLink to="/"  style={b} className={a+" "}> Home</NavLink>
            <NavLink to="/Skills" style={b} className={a}> Skills</NavLink>
            <NavLink to="/Projects" style={b} className={a}> Projects</NavLink>
            <div className={a}> Home</div>
            <NavLink to="/About" style={b} className={a}> About</NavLink>

        </div>
            </div>
        </>
    )
}