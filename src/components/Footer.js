import React, { useEffect, useState } from "react";
import myCv from "../images/myCv.jpg";
function Footer() {
  let CardHead = [
    {
      name: "Linkedin",
      logo: <i className="fa-brands fa-linkedin-in"></i>,
      link: "https://www.linkedin.com/in/avash-khadka-720886308/",
    },
    {
      name: "Instagram",
      logo: <i className="fa-brands fa-instagram"></i>,
      link: "https://www.instagram.com/aavash.khadka_/",
    },
    {
      name: "Github",
      logo: <i className="fa-brands fa-github"></i>,
      link: "https://github.com/Avashkhadka",
    },
    {
      name: "twitter",
      logo: <i className="fa-brands fa-x-twitter"></i>,
      link: "https://x.com/avashkhadka10",
    },
  ];
  

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
      let min = new Date().getMinutes();
      // return(`${uniHour}:${min}:${sec}`)
      settime(`${uniHour}:${min} ${hour > 12 ? "PM" : "AM"}`);
    }, 1000);
  };

  const [temp, settemp] = useState();
  const getTemp = async () => {
    let apikey = process.env.REACT_APP_API_KEY;
    try {
      let response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=kathmandu&days=1&aqi=no&alerts=no`
      );
      if (!response.ok) {
        throw new Error("error has been found on line 63 of of footer.js");
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
    <div className="footer-container" id="contact">
      <p>Contact</p>
      <div className="contact-grid">
        <p>
          Get in touch with me for full-time job opportunities, freelance,
          design advice, or simply say to hello 😃
        </p>
      </div>
      <div className="footer-container-links">
        <div className="footer-links-grid">
          {CardHead.map((item, index) => {
            return <Linkcards item={item} key={index} />;
          })}
          <a className="footer-link-card downloadcv" href={myCv} download="Avash's.jpg">
            <div className="footer-left">
              <p className="soc-icon"><i className="fa-regular fa-paper-plane"></i></p>
              <p className="footer-social-name">Download CV</p>
            </div>
            <i className="fa-solid fa-arrow-right"></i>
          </a>

          {/*this is a seperation of footer download and email btn */}
          <a className="footer-link-card hplinkemail" href="mailto:avash2063@gmail.com">
            <div className="footer-left">
              <p className="soc-icon"><i className="fa-regular fa-envelope"></i></p>
              <p className="footer-social-name">avash2063@gmail.com</p>
            </div>
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          AvashKhadka ©{Thisyear} | &nbsp; Nepali&nbsp; |&nbsp;{temp}°C&nbsp;|{" "}
          {time}
        </p>
      </div>
    </div>
  );
}

const Linkcards = (props) => {
  return (
    <a className="footer-link-card" href={props.item.link}>
      <div className="footer-left">
        <p className="soc-icon">{props.item.logo}</p>
        <p className="footer-social-name">{props.item.name}</p>
      </div>
      <i className="fa-solid fa-arrow-up-right-from-square "></i>
    </a>
  );
};

export default Footer;
