import {motion} from "motion/react";
import TextType from "../../blocks/TextAnimations/TextType/TextType.jsx";
import {HeroRight} from "@/components/Hero/Hero-Components/HeroRight.jsx";

export function Hero() {
    return (
        <>
            <motion.div className={"heroContainer w-full flex overflow-hidden p-10 justify-between sm:pl-30 max-sm:pt-30 pb-0 max-sm:flex-col  "}>
                <div className={" gap-5 flex sm:justify-center flex-col max-sm:text-center   "}>

                    <div className={"heroText text-2xl "}>
                        Hey I am <br/>
                        <b style={{color:"#C6CAED",fontSize:50}} className={"font-extrabold text-3xl sm:text-4xl lg:text-7xl "}>Gurjant Singh</b>
                    </div>
                     <div className={"heroTitle pl-10 text-4xl lg:text-7xl font-bold"}>
                    <TextType text={["Frontend","Backend","Full-Stack","React JS","Javascript",""]}
                              textColors={["white","#C9F299",]}
                              startOnVisible={true}
                              initialDelay={1000}
                              className={""}


                    /> <br/>   Developer
                    </div>

                    <div className={"heroDescription"}>

                        <TextType text={["I'm a Full-Stack Web Developer","I will build Your fully dynamic website"," Make Your Website Beautiful "]}
                        className={"text-3xl text-wrap max-w-3xs"} style={{minHeight: "75px",}} deletingSpeed={40} pauseDuration={500} textColors={["white","#9CBFA7",]}
                        />
                    </div>


                </div>
                    <div className={"heroBgImg"}></div>
                {/*<motion.img src={"herosm1.png"}  style={{*/}
                {/*    justifySelf: "center",*/}
                {/*}}  alt={""}/>*/}
                <img src={"herosm1.png"}    className={"xl:hidden  w-[400px] h-[800px] place-self-end"} alt={""}/>



                <div className={" max-xl:hidden xl:flex"}>
                <HeroRight/>
                </div>


            </motion.div>
        </>
    )
}