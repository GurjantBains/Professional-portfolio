import {motion} from "motion/react";
import {useEffect, useState} from "react";

const StarBorder = ({
                        as: Component = "button",
                        className = "",
                        color = "white",
                        speed = "6s",
                        thickness = 1,
                        children,
                        shadow,
                        delay,
                        ...rest
                    }) => {
    const [mobile, setMobile] = useState(()=> {
        return window.innerWidth <= 1040
    });
    const handleResize = () => {
        setMobile(()=> window.innerWidth <= 1040)
    }
    const [initial, setInitial] = useState({opacity:0,x:-50});
    const [animate, setAnimate] = useState({opacity:1,x:0});
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return (


        <motion.div
            whileHover={{
                boxShadow:`0px 0px 179px 78px ${shadow}`,
                scale:1.1
            }}
            initial={initial}
            transition={{
                delay:mobile?0.3:delay,
            }}

            whileInView={animate}
            viewport={{
                once: true,
            }}
            onViewportEnter={()=>{
                // setAnimation(animate)
                
            }}
            className={`relative inline-block overflow-hidden rounded-[20px] ${className} `}
            style={{
                padding: `${thickness}px 0`,
                ...rest.style,
                ...initial
            }}
            {...rest}
        >
            <motion.div
                className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed,
                }}
            ></motion.div>
            <motion.div
                whileHover={{
                    boxShadow:`0px 0px 179px 78px white`
                }}
                className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
                style={{
                    background: `radial-gradient(circle, ${color}, transparent 10%)`,
                    animationDuration: speed,
                }}
            ></motion.div>
            <div className="relative z-1 bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-center text-[16px] py-[16px] px-[26px] rounded-[20px]">
                {children}
            </div>
        </motion.div>
    );
};

export default StarBorder;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
//         'star-movement-top': 'star-movement-top linear infinite alternate',
//       },
//       keyframes: {
//         'star-movement-bottom': {
//           '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
//           '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
//         },
//         'star-movement-top': {
//           '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
//           '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
//         },
//       },
//     },
//   }
// }