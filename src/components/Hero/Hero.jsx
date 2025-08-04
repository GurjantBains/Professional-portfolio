import {motion} from "motion/react";
import {use, useState} from "react";
import TextType from "../../blocks/TextAnimations/TextType/TextType.jsx";
import GradientText from "@/blocks/TextAnimations/GradientText/GradientText.jsx";
import {HeroRight} from "@/components/Hero/Hero-Components/HeroRight.jsx";

export function Hero() {
    return (
        <>
            <div className={"heroContainer w-full flex overflow-hidden  p-10 justify-between pb-0"}>
                <div className={" gap-5 flex justify-center flex-col pl-20"}>

                    <div className={"heroText"}>
                    Hey I am <br/>  <b style={{color:"#C6CAED",fontSize:50}} className={"font-extrabold "}>Gurjant Singh

                    </b>
                    </div>
                     <div className={"heroTitle pl-10"}>
                    <TextType text={["Frontend","Backend","Full-Stack"]}
                              textColors={["white","#C9F299",]}
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
                                  textColors={["white","#9CBFA7",]}

                        />





                        {}

                    </div>

                    <div className={"heroBgImg"}></div>

                </div>
                {/*<motion.img src={"heroMainImg.png"}  style={{*/}
                {/*    justifySelf: "center",*/}
                {/*}}  alt={""}/>*/}



                <HeroRight/>


            </div>
        </>
    )
}