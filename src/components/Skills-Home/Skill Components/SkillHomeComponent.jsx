import {motion} from "motion/react";
import {useState} from "react";
import StarBorder from "../../../blocks/Animations/StarBorder/StarBorder.jsx";
export function SkillHomeComponent(prop) {
    const [imgSize, setImgSize] = useState(1.0);
    const [cardBg, setCardBg] = useState("#d4d4d4");
    return (
        <>

            <StarBorder
                as="button"
                className="custom-class"
                color="cyan"
                speed="5s"
                classname={"border-10"}
            >

            <motion.div className={"skillCard flex z-0 flex-col justify-between  gap-3 items-center bg-white" +
                " p-5 rounded-4xl relative overflow-hidden  "}
                        style={{
                            minHeight:"404px"
                        }}
            onMouseEnter={()=>{
                    setImgSize(1.1);
                    setCardBg("#253092")
            }}
                        onMouseLeave={()=>{
                            setImgSize(1.0);
                            setCardBg("#d4d4d4")
                        }}>


                <div className={"z-10 p-0 overflow-hidden rounded-4xl "}
                     style={{
                         backgroundColor:"#e8e7e4",
                         minHeight:"300px",
                         minWidth:"300px"
                     }}>
                    <motion.img src={prop.image} alt="fg"
                    width={"300px"}
                         animate={{
                             scale:imgSize,
                             transition:{
                                 duration:0.31
                             }
                    }}
                         className={" overflow-hidden"}
                    />
                </div>

                <div className={"z-10"}>


                    <div className={"text-center z-10 text-black font-bold text-3xl"}>
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
