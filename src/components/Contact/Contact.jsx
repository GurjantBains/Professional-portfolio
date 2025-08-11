import {motion} from "motion/react";
import {react ,useState} from "react"
import React from 'react';
import styled from 'styled-components';
import {toast, ToastContainer} from "react-toastify";

export function Contact() {
    const [animation, setAnimation] = useState({
        opacity: 1,
        scaleX:1,
        x:0
    });
    const [initial, setInitial] = useState({
        opacity: 0,
        scaleX: 0,
        x:100,
        transformOrigin: " left",

    });
    const [animate, setAnimate] = useState(initial)
    const handleRedirect = (e)=>{
    const email = "jantywebdev@gmail.com";
    const subject = "I want to create a ...";
    const body = "I want to contact you About..";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const linkedinUrl = `https://www.linkedin.com/in/gurjant-singh-97926518a/`;
    const githubUrl = `https://github.com/GurjantBains`;
            console.log(e);
    switch (e) {
        case "linkedin":
            window.open(linkedinUrl, "_blank");
            break;
        case "github":
            window.open(githubUrl, "_blank");
            break;
        case "gmail":
            window.open(gmailUrl, "_blank");
            break;
        default:
            break;

    }
    }

    return (
        <><div className={"contact-Home-container  w-full flex flex-col justify-evenly"}>
            <div className={"gap-20 flex flex-col justify-center w-full place-self-center"}>
                <div className={"contact-Home-Form-container flex justify-evenly place-items-center gap-3"}>
                    <motion.div  style={{...initial,...{transformOrigin:`left`,}}}
                                 className={"flex flex-col gap-10"}
                                 onViewportEnter={()=>{setAnimate(animation)}}
                                 animate={animate} transition={{delay: 0.3, duration: 0.5,}}>
                        <motion.div className={"text-7xl font-bold"}>
                            Contact Me
                        </motion.div>
                        <div className="text-4xl gap-5 flex flex-col " >
                            Mail
                            <motion.li className={"text-3xl cursor-pointer"} onClick={()=>handleRedirect("gmail")} whileHover={{scale:0.95}} whileTap={{scale:1.1}}>jantywebdev@gmail.com</motion.li>
                        </div>
                        <div className="text-4xl gap-5 flex flex-col " >
                            Linkedin
                            <motion.li className={"text-3xl cursor-pointer"} onClick={()=>handleRedirect("linkedin")} whileHover={{scale:0.95}} whileTap={{scale:1.1}}>Gurjant Singh
                            </motion.li>
                        </div>
                        <div className="text-4xl gap-5 flex flex-col " >
                            Github
                            <motion.li className={"text-3xl cursor-pointer"} onClick={()=>handleRedirect("github")} whileHover={{scale:0.95}} whileTap={{scale:1.1}}>GurjantBains
                            </motion.li>
                        </div>
                    </motion.div>

                        <motion.div style={{...initial,...{transformOrigin:`right`,}}}
                        className={""}
                        onViewportEnter={()=>{setAnimate(animation)}}
                        animate={animate}
                        transition={{delay: 0.3, duration: 0.5,}}>
                            <Form/>
                        </motion.div>
                </div>
            </div>
        </div>
                <Button color={"#181d26"}/>
            <ToastContainer/>
        </>
    )
}



const Form = () => {
    const handleSubmit = async (e) => {
    const baseUrl = "http://localhost/API's/Portfolio%20Api/Portfolio-Api/"
    const url = 'api-contact-me.php'
        const result = await fetch(baseUrl + url, {
            method: "POST",
            body: JSON.stringify({
                email: e.get("email"),
                name: e.get("name"),
                message: e.get("message"),

            }),
            headers: {'content-type': 'application/json'},
            mode:"cors",
        })
        const data = await result.json()
        console.log(e)
        console.log(data)
        if(data.status === 'success'){
            toast("Message successfully sent")
        }else{

            toast("Failed to send message")
        }
    }
    return (
        <StyledWrapper>
            <div className="form-container">
                <form
                    className="form"
                    action={handleSubmit}
                >
                     <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="textarea">How Can I Help You?</label>
                        <textarea name="message" id="textarea" rows={10} cols={50} required />
                    </div>
                    <button className="form-submit-btn" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .form-container {
    width: 600px;
    background: linear-gradient(#212121, #212121) padding-box,
                linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
  }

  .form-container button:active {
    scale: 0.95;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #717171;
    font-weight: 600;
    font-size: 12px;
  }

  .form-container .form-group input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #fff;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid #414141;
  }

  .form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    resize: none;
    color: #fff;
    height: 96px;
    border: 1px solid #414141;
    background-color: transparent;
    font-family: inherit;
  }

  .form-container .form-group input::placeholder {
    opacity: 0.5;
  }

  .form-container .form-group input:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-group textarea:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-submit-btn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    align-self: flex-start;
    font-family: inherit;
    color: #717171;
    font-weight: 600;
    width: 40%;
    background: #313131;
    border: 1px solid #414141;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 6px;
  }

  .form-container .form-submit-btn:hover {
    background-color: #fff;
    border-color: #fff;
  }`;


export const Button = (prop) => {
    const handleRedirect = (e)=>{
        const email = "jantywebdev@gmail.com";
        const subject = "I want to create a ...";
        const body = "I want to contact you About..";
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        const linkedinUrl = `https://www.linkedin.com/in/gurjant-singh-97926518a/`;
        const githubUrl = `https://github.com/GurjantBains`;
        console.log(e);
        switch (e) {
            case "linkedin":
                window.open(linkedinUrl, "_blank");
                break;
            case "github":
                window.open(githubUrl, "_blank");
                break;
            case "gmail":
                window.open(gmailUrl, "_blank");
                break;
            default:
                break;

        }
    }
    return (
        <StyledWrapper1 className="" style={{
            backgroundColor:prop.color,
            paddingBottom:"40px"
        }}>
            <div className="button-container" >
                <button className="button flex-center"onClick={()=>{handleRedirect('gmail')}}>
                    <svg width="23" height="23" viewBox="0 0 134 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M111.5 3.8L103 10.1L66.7 37.4L30.3 10.1L21.8 3.7C12.8 -3 0 3.4 0 14.7V26.8V92C0 97 4.1 101.1 9.1 101.1H30.3V49.5L66.7 76.8L103 49.5V101H124.2C129.2 101 133.3 96.9 133.3 91.9V26.8V14.7C133.3 3.4 120.5 -3 111.5 3.8Z"/>
                    </svg>

                </button>
                <button className="button flex-center overflow-hidden" onClick={()=>{handleRedirect('linkedin')}}>

                    <svg height="23px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 382 382">
                        <path fill="currentColor" d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
                            C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
                            H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
                            c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
                            s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
                            c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
                            c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
                            c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
                            L341.91,330.654L341.91,330.654z"/>
                                </svg>
                </button>
                <button className="button flex-center" onClick={()=>{handleRedirect('github')}}>
                    <svg viewBox="0 0 20 20" width="22px" className="btn-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#fff" stroke="#fff">
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                                                            <defs />
                            <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#fff">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#fff142]" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        </StyledWrapper1>
    );
}

const StyledWrapper1 = styled.div`
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  .button {
    cursor: pointer;
    text-decoration: none;
    color: #ffff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #2d2e32;
    border: 2px solid #2d2e32;
    transition: all 0.45s;
  }

  .button:hover {
    transform: rotate(360deg);
    transform-origin: center center;
    background-color: #ffff;
    color: #2d2e32;
  }

  .button:hover .btn-svg {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(305deg)
      brightness(103%) contrast(103%);
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }`;
