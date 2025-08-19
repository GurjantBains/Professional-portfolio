import {motion} from "motion/react";
import {useRef, useState} from "react";
import Card from "@/Pages/Skills/components/Skill Container/Card.jsx";

export function Skill() {
    const [selectedSkill, setSelectedSkill] = useState(0);
    const [previousSkill, setPreviousSkill] = useState(1)
    return (
        <>
            <motion.div className=" w-[95%] xl:w-[70%] border-2    xl:flex h-[100%]
            {/*bg-[#0e1217]*/}
             overflow-hidden    rounded-2xl">
                <motion.div className=" overflow-hidden rounded-2xl flex  xl:flex-col  xl:w-[30%]  ">
                    <SkillChooser s={selectedSkill} title={"Current Skills"} setselectedSkill={setSelectedSkill} p={setPreviousSkill} keys={0}  />
                    <SkillChooser s={selectedSkill} title={"Learning"} setselectedSkill={setSelectedSkill} p={setPreviousSkill} keys={1}/>
                    <SkillChooser s={selectedSkill} title={"Want to Learn"} setselectedSkill={setSelectedSkill} p={setPreviousSkill} keys={2}/>
                </motion.div>
                <motion.div className="xl:w-[70%] border-2 h-[100%] flex overflow-y-auto ">

                    <SkillCardContainer keys={0} active={selectedSkill} p={previousSkill} title={["Html","Css","Javascript"]}/>
                    <SkillCardContainer keys={1} active={selectedSkill} p={previousSkill} title={["React","PHP"]}/>
                    <SkillCardContainer keys={2} active={selectedSkill} p={previousSkill} title={["Laravel","Next Js"]}/>

                </motion.div>


            </motion.div>

        </>
    )
}
const SkillChooser = (prop) =>{

    return (
        <>
            <motion.div className= {`w-full flex place-items-center justify-center max-sm:text-lg sm:text-2xl lg:text-4xl p-3 border-2 border-white cursor-pointer text-center select-none ${prop.s===prop.keys?"text-[#38bdf8] text-3xl lg:text-5xl":""}`}
                        whileHover={{
                            scale: 1.1,
                        }}
                        whileTap={{
                            scale: 1,
                            backgroundColor: "#344157",
                        }}
                        onClick={()=>{
                            prop.p(prop.s)
                            prop.setselectedSkill(prop.keys);

                        }}
            >
                  {prop.title}
            </motion.div>

        </>
    )
}
const SkillCardContainer = (prop) => {
    const [initial, setInitial] = useState({...{flex:0},...{transition:{
        duration:0.5
    }}})
    const [animate, setAnimate] = useState({flex: 1});
    const oriign = useRef("");
    if(prop.keys===0)oriign.current = "left";
    else if(prop.keys===1)oriign.current = "center";
    else if(prop.keys===2)oriign.current = "right";



    return (
        <>
            <motion.div
                className={`     w-full h-full`}
                initial={prop.keys===prop.p?animate:initial}
                animate={prop.keys===prop.active?animate:initial}
                transition={{duration:0.5}}
                style={{transformOrigin:oriign.current}}
            >
              <motion.div
                  initial={prop.keys===prop.p?{display:"block",scaleX:1,opacity:1}:{display:"none",scaleX:0,duration:0.5,opacity:0}}
                  animate={prop.keys===prop.active?{display:"block",scaleX:1,opacity:1}:{display:"none",scaleX:0,duration:0.5,opacity:0}}


                  transition={{delay:0}}
                  className={"w-full h-full"}
              >
                  <motion.div className={"flex gap-5 w-full h-[100%] border-3 justify-center place-items-center  flex-wrap md:flex-nowrap p-5"}>
                      {prop.title.map((value, index) =>(
                          <Card key={index} title={value}/>
                          ))}
                  </motion.div>
              </motion.div>
            </motion.div>
        </>
    )
}

