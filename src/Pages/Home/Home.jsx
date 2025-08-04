import "/src/App.css"
import {Navbar} from "../../components/Navbar/Navbar.jsx";
import {Hero} from "../../components/Hero/Hero.jsx";
import {SkillsHome} from "../../components/Skills-Home/SkillsHome.jsx";
import {ProjectHome} from "../../components/Project-Home/ProjectHome.jsx";
import {Contact} from "@/components/Contact/Contact.jsx";


export function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <SkillsHome />
            <ProjectHome />
            <Contact />
        </>
    )
}