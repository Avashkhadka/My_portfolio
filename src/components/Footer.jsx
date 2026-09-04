import React, { useEffect, useState } from "react";
import myCv from "../assets/pdf/MYCV.pdf";
import { Send } from "lucide-react";
import { useIntersectionObserver } from "../Hooks/useIntersectionObserver";
function Footer() {
    const hasAnimated = useIntersectionObserver();
    let Thisyear = new Date().getFullYear();
    const [time, settime] = useState("");
    let CurrentTime = () => {
        setInterval(() => {
            let hour = new Date().getHours();
            let uniHour;
            if (hour > 12) {
                uniHour = `${hour - 12}`;
            } else {
                uniHour = `${hour}`;
            }
            if (hour < 10) {
                uniHour = `0${hour}`;
            }

            let min = new Date().getMinutes();

            if (min < 10) {
                min = `0${min}`;
            }
            // return(`${uniHour}:${min}:${sec}`)
            settime(`${uniHour}:${min} ${hour > 12 ? "PM" : "AM"}`);
        }, 1000);
    };

    let CardHead = [
        {
            name: "Linkedin",
            logo: <i className="fa-brands fa-linkedin-in"></i>,
            link: "https://www.linkedin.com/in/avash-khadka-720886308/",
            class: "footer-link-card",
        },
        {
            name: "Instagram",
            logo: <i className="fa-brands fa-instagram"></i>,
            link: "https://www.instagram.com/aavash.khadka_/",
            class: "footer-link-card",
        },
        {
            name: "Github",
            logo: <i className="fa-brands fa-github"></i>,
            link: "https://github.com/Avashkhadka",
            class: "footer-link-card",
        },
        {
            name: "twitter",
            logo: <i className="fa-brands fa-x-twitter"></i>,
            link: "https://x.com/avashkhadka10",
            class: "footer-link-card",
        },
        {
            name: "Download CV",
            logo: <Send />,
            link: myCv,
            class: "footer-link-card downloadcv",
        },
        {
            name: "avash2063@gmail.com",
            logo: <i className="fa-regular fa-envelope"></i>,
            link: "mailto:avash2063@gmail.com",
            class: "footer-link-card hplinkemail",
        },
    ];

    const [temp, settemp] = useState();
    const getTemp = async () => {
        // let apikey = import.meta.env.VITE_WEATHER_API;
        try {
            let response = await fetch(
                `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=kathmandu&days=1&aqi=no&alerts=no`
            );
            if (!response.ok) {
                throw new Error(
                    "error has been found on line 63 of of footer.js"
                );
            }
            let data = await response.json();

            settemp(data.current.temp_c ? data.current.temp_c : "20.3°C");
        } catch (error) {
            settemp("20.3");
        }
    };

    useEffect(() => {
        CurrentTime();
        getTemp();
    }, []);
    return (
        <div
            className={`footer-container scrolltotop transition-all duration-500 ${
                hasAnimated.contact
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            } `}
            id="contact"
        >
            <p>Contact</p>
            <div className="contact-grid">
                <p>Get in touch with me 😃</p>
            </div>
            <div id="contact" className={`footer-container-links`}>
                <div className="footer-links-grid">
                    {CardHead.map((item, index) => {
                        return (
                            <Linkcards
                                item={item}
                                hasAnimated={hasAnimated}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="footer-copyright">
                <p>
                    AvashKhadka ©{Thisyear} | &nbsp; Nepali&nbsp; |&nbsp;{temp}
                    °C&nbsp;| {time}
                </p>
            </div>
        </div>
    );
}

// export const GoToTop = ({ refloc, handlescroll }) => {
//     return (
//         <div className="Gotoup" ref={refloc} onClick={handlescroll}>
//             <i className="fa-solid fa-arrow-up"></i>
//         </div>
//     );
// };

const Linkcards = (props) => {
    return (
        <a
            className={`${props.item.class} ${
                props.hasAnimated[`fc${props.item.name}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            } `}
            href={props.item.link}
            id={`fc${props.item.name}`}
        >
            <div className="footer-left">
                <p className="soc-icon">{props.item.logo}</p>
                <p className="footer-social-name">{props.item.name}</p>
            </div>
            {props.item.name !== "avash2063@gmail.com" &&
            props.item.name !== "Download CV" ? (
                <i className="fa-solid fa-arrow-up-right-from-square "></i>
            ) : (
                ""
            )}
            {props.item.name === "Download CV" ? (
                <i className="fa-solid fa-arrow-right"></i>
            ) : (
                ""
            )}
        </a>
    );
};

export default Footer;
