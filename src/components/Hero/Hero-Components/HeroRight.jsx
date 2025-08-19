// Circle.jsx
import React, {  useRef, useState} from 'react';
import {motion,useAnimation} from "motion/react";
export function HeroRight() {
    const controls = useAnimation();
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const mainCircleInView = useRef(true);
    const [count, setCount] = useState(0);
    const aniData = [["💻 React","🎨 Tailwind","Bootstrap"],["🌐 PHP","🗄 MySQL","📊 SQL"],["Laravel","Next JS","Kubernetes"]]
    const title = ["Frontend","Backend","Future Goals"];

    const transition = useRef({
        duration: 0.4,
        // type: "spring",
        // ease:"easeInOut"
        ease: [1,-1.21,0,2.08],
    });
    const scale = useRef(2)


    async function animateCircle() {
        // if(count === 2){
        // setCount(count=>count + 1);
        // }
        // else {
        // setCount((count)=>count + 1);
        // }
        setCount(count => (count + 1) % 3);

           if(!mainCircleInView.current)return;
            // Move left
        await controls.start({
                x: -400,
                scale:scale.current,
                transition:transition,

            });
        await new Promise(res => setTimeout(res, 50));


        await controls1.start({
            x: -150,
            y:-250,
            scale:scale.current,
            transition:transition
        });
        await new Promise(res => setTimeout(res, 50));


        await controls2.start({
            x: -150,
            y:250,
            scale:scale.current,
            transition:transition
        });

            // Wait 5 seconds
            await new Promise(res => setTimeout(res, 5000));



            // Move back (right)
            await controls.start({
                x: 0,
                scale:1,
                transition: { duration: 0.2 }
            });

            // Wait
            await new Promise(res => setTimeout(res, 50));

        await controls1.start({
            x: 0,
            y:0,
            scale:1,
            transition: { duration: 0.2 }
        });

        // Wait
        await new Promise(res => setTimeout(res, 50));

        await controls2.start({
            y:0,
            x: 0,
            scale:1,
            transition: { duration: 0.2 }
        });

        // Wait
        await new Promise(res => setTimeout(res, 2000));
            await animateCircle();
        }


        return <div className={"   place-self-center relative justify-center place-content-center right-30 "}>
    <motion.div className="circle absolute bigC "

                           style={{
                               zIndex: 10,
                           }}
                           onViewportEnter={()=>{
                               mainCircleInView.current= true
                                animateCircle().then();
                           }}
                           onViewportLeave={()=>{
                               mainCircleInView.current=false
                           }}
                           // animate={{}}
    >
        {title[count]}
        </motion.div>


            <motion.div  className={"circle circleElement absolute  bg-black bgOfcircles"}
                         style={{zIndex:1}}
                        animate={controls}
            >{aniData[count][0]}</motion.div>
            <motion.div  className={"circle circleElement absolute bg-black bgOfcircles"}
                         style={{zIndex:1}}
                         animate={controls1}
            >{aniData[count][1]}</motion.div>
            <motion.div  className={"circle circleElement absolute bg-black bgOfcircles"}
                         style={{zIndex:1}}
                         animate={controls2}
            >{aniData[count][2]}</motion.div>


    </div>
}

