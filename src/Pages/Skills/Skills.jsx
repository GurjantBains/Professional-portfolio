import {Navbar} from "../../components/Navbar/Navbar.jsx";
import {Skill} from "@/Pages/Skills/components/Skill Container/Skill.jsx";
import Particles from "@/blocks/Backgrounds/Particles/Particles.jsx";
export function Skills() {
    return (
        <><div className={" w-full h-[900px] flex place-content-center"}>

            <div className={"w-full h-full absolute top-0 left-0"}>
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>


            <Navbar/>
            <div className={" w-full flex place-items-center place-content-center z-10"}>
            <Skill/>
            </div>


        </div>
        </>
    )
}