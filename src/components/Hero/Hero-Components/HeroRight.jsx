// Circle.jsx
import React, { useEffect, useRef, useState} from 'react';
import {motion,useAnimation} from "motion/react";
import {animate, cubicBezier} from "motion";
export function HeroRight() {
    const controls = useAnimation();
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const mainCircleInView = useRef(true);
    const transition = useRef({
        duration: 0.4,
        // type: "spring",
        // ease:"easeInOut"
        ease: [1,-1.21,0,2.08],
    });
    const scale = useRef(2)


    async function animateCircle() {
            console.log(mainCircleInView.current);
           if(!mainCircleInView.current)return;
            // Move left
        await controls.start({
                x: -600,
                scale:scale.current,
                transition:transition
            });
        await new Promise(res => setTimeout(res, 50));


        await controls1.start({
            x: -350,
            y:-300,
            scale:scale.current,
            transition:transition
        });
        await new Promise(res => setTimeout(res, 50));


        await controls2.start({
            x: -350,
            y:300,
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
            animateCircle();
        }


        return <div className={"flex place-self-center relative justify-center place-content-center right-30"}>
    <motion.div className="circle absolute  "

                           style={{
                               zIndex: 10,
                           }}
                           onViewportEnter={()=>{
                               mainCircleInView.current= true
                                animateCircle();
                           }}
                           onViewportLeave={()=>{
                               mainCircleInView.current=false
                           }}
                           animate={{}}>
        </motion.div>


            <motion.div  className={"circle circleElement absolute bg-black "}
                         style={{zIndex:1}}
                        animate={controls}
            ></motion.div>
            <motion.div  className={"circle circleElement absolute bg-black "}
                         style={{zIndex:1}}
                         animate={controls1}
            ></motion.div>
            <motion.div  className={"circle circleElement absolute bg-black "}
                         style={{zIndex:1}}
                         animate={controls2}
            ></motion.div>


    </div>
}

