import { IoMdArrowDown } from "react-icons/io";

export const ServicesItems = ({ data, hasAnimated }) => {
    const handlescroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        // console.log("hi");
    };
    return (
        <div
            className={`servicesItem transition-all duration-500 ${
                hasAnimated[`si${data.heading}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            } `}
            id={`si${data.heading}`}
        >
            <div className="serv-icon">
                <i className={data.icon}></i>
                <span className="serv-icon-rightIcon" onClick={handlescroll}>
                    <IoMdArrowDown size={25} />
                </span>
            </div>
            <div className="serv-header">
                <h3>{data.heading}</h3>
            </div>
            <div className="serv-content">
                <p>{data.content}</p>
            </div>
        </div>
    );
};
