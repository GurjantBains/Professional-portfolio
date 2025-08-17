import {motion} from "motion/react";
import {useState} from "react";
import StarBorder from "../../../blocks/Animations/StarBorder/StarBorder.jsx";
export function SkillHomeComponent(prop) {
    const [imgSize, setImgSize] = useState(1.0);
    const [cardBg, setCardBg] = useState("#bfb2b2");
    return (
        <>
            <StarBorder
                as="button"
                color="cyan"
                speed="5s"
                className="m-2"
                shadow={prop.color}
                delay={prop.delay}
            >

            <motion.div className={" flex z-0 flex-col justify-between  gap-3 items-center bg-white" +
                " p-5 rounded-4xl relative overflow-hidden  "}


            onMouseEnter={()=>{ setImgSize(1.1);setCardBg("#253092")}}
                        onMouseLeave={()=>{setImgSize(1.0);setCardBg("#bfb2b2")}}>

                <div className={"z-10 p-0 overflow-hidden rounded-4xl place-content-center max-[550px]:min-h-[150px] min-h-[300px]"}
                     style={{backgroundColor:"#e8e7e4",}}
                >
                    <motion.img src={prop.image} alt="fg"

                    width={"300px"}
                         animate={{
                             scale:imgSize,
                             transition:{
                                 duration:0.31
                             }
                    }}
                         className={" overflow-hidden "}
                    />
                </div>

                <div className={"z-10"}>


                    <div className={"text-center z-10 text-black font-bold text-3xl"}
                    style={{
                        color:prop.color?prop.color:"black"
                    }}>
                    {prop.title}
                    </div>
                    <div className={"text-black z-10"}>
                    {prop.desc}
                    </div>
                </div>
                <motion.div className={"absolute bottom-0 h-1/2  z-1 w-full"} animate={{
                    backgroundColor:cardBg
                }} ></motion.div>

            </motion.div>
            </StarBorder>

        </>
    )
}
