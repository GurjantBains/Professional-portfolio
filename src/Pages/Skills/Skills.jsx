import {Navbar} from "../../components/Navbar/Navbar.jsx";
import {Skill} from "@/Pages/Skills/components/Skill Container/Skill.jsx";
import Particles from "@/blocks/Backgrounds/Particles/Particles.jsx";
export function Skills() {
    return (
        <>
            <Navbar/>
            <div className={" w-full  flex place-content-center min-h-[100vh]"}>

            <div className={"w-full h-full absolute top-0 left-0"}>
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    alphaParticles={false}
                    disableRotation={false}

                />
            </div>
                <div className={"w-full pl-[40px] pt-[120px] z-90 max-xl:place-self-center  "}>
            <Skill/>
                </div>


            {/*<div className={" w-full  flex place-items-center place-content-center" + "min-h-[50%]  z-10 md:p-[10px] pt-[150px]"}></div>*/}


        </div>
        </>
    )
}