import {motion} from "motion/react";
import {use, useState} from "react";
import TextType from "../../blocks/TextAnimations/TextType/TextType.jsx";

export function Hero() {
    return (
        <>
            <div className={"heroContainer w-full flex  p-10 justify-between pb-0 "}>
                <div className={" gap-5 flex justify-center flex-col pl-20"}>

                    <div className={"heroText"}>
                    Hey I am <b>  Gurjant Singh </b>
                    </div>
                     <div className={"heroTitle pl-10"}>
                    <TextType text={["Frontend","Backend","Full-Stack"]}
                              textColors={["white","palenpx jsrepo add https://reactbits.dev/tailwind/Components/ScrollStack",]}
                              startOnVisible={true}
                              initialDelay={1000}

                    /> <br/>   Developer
                    </div>

                    <div className={"heroDescription"}>

                        <TextType text={["I'm a Full-Stack Web Developer","I will build" +
                        " Your fully dynamic website"," Make Your Website Beautiful "]}
                        className={"text-3xl text-wrap max-w-3xs"}
                                  style={{
                                      minHeight: "75px",
                                  }}
                                  deletingSpeed={40}
                                  pauseDuration={500}
                        />





                        {}

                    </div>

                    <div className={"heroBgImg"}></div>

                </div>
                <motion.img src={"heroMainImg.png"} height={"500px"} width={"400px"} style={{
                    justifySelf: "center",
                }}  alt={""}/>

                    <div>

                    </div>

            </div>
        </>
    )
}