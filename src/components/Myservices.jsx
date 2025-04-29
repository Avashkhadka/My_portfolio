import React from "react";
import { IoMdArrowDown } from "react-icons/io";

function Myservices({refloc,handlescroll}) {
  let data = [
    {
      icon: <i className="fa-solid fa-code"></i>,
      heading: "Web Development",
      content: (
        <p>
          Turn your vision into interactive, responsive, and eye-catching
          websites. We craft clean, user-focused designs that not only look
          stunning but also ensure smooth performance on every device.
        </p>
      ),
    },
    {
      icon: <i className="fa-solid fa-paintbrush"></i>,
      heading: "UI/UX Design",
      content: (
        <p>
          Deliver immersive digital experiences with our expert UI/UX design
          services. We focus on seamless navigation, stunning visuals, and user
          engagement to create interfaces that captivate and inspire.
        </p>
      ),
    },
    {
      icon: <i className="fa-solid fa-palette"></i>,
      heading: "Graphic Design",
      content: (
        <p>
          From branding to marketing assets, our graphic design services provide
          innovative solutions customized to your vision. We create visually
          compelling designs that make your message unforgettable.
        </p>
      ),
    },
    {
      icon: <i className="fa-solid fa-database"></i>,
      heading: "Database",
      content: (
        <p>
          Streamline your data with expert database management services. We
          ensure secure storage, efficient organization, and seamless access to
          keep your information structured and reliable.
        </p>
      ),
    },
    {
      icon: <i className="fa-solid fa-display"></i>,
      heading: "Video Editing",
      content: (
        <p>
          Bring your stories to life with expert video editing services. We
          craft seamless transitions, stunning effects, and polished final cuts
          designed to captivate your audience.
        </p>
      ),
    },
  ];
  return (
    <div className="port-section scrolltotop" ref={refloc}>
      <div className="under-services">
        <div className="services-items">
          <div className="clientheader serv-section-header">My Services</div>
          <div className="container-services-item">
            {data.map((data, index) => {
              return <ServicesItems key={index} data={data} handlescroll={handlescroll} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const ServicesItems = ({ data,handlescroll }) => {
  return (
    <div className="servicesItem">
      <div className="serv-icon">
        {data.icon}
        <span className="serv-icon-rightIcon" onClick={handlescroll}>
        <IoMdArrowDown size={25} />
        </span>
      </div>
      <div className="serv-header">
        <h3>{data.heading}</h3>
      </div>
      <div className="serv-content">{data.content}</div>
    </div>
  );
};

export default Myservices;
