import {SkillHomeComponent} from "./Skill Components/SkillHomeComponent.jsx";

export function SkillsHome() {
    return (
        <>
            <div className={"w-full p-10 skillHome"} >
                <div className={"skill-home-heading text-center "}>

                    Skills

                </div>
                <div className={"skillCard-container flex-wrap flex justify-center items-center gap-10 p-10"}>

                    <SkillHomeComponent image="Html.png"
                        title="Html 5"
                        desc="Html 5"
                    />
                    <SkillHomeComponent image="Css.png"
                                        title="Css 3"
                                        desc="Css 3"
                    />
                    <SkillHomeComponent image="Js.png"
                                        title="Javascript"
                                        desc="Javascript "
                    />
                    <SkillHomeComponent image="react.png"
                                        title="React Js"
                                        desc="Javascript "
                    />
                    <SkillHomeComponent image="php.png"
                                        title="PHP"
                                        desc="Javascript "
                    />

                </div>
            </div>
        </>
    )
}