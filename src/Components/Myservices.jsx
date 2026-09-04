import React from "react";

import { data } from "../Data/Services";
import { ServicesItems } from "../UI/ServicesItems";

function Myservices({ hasAnimated }) {
    return (
        <div
            className={`port-section scrolltotop transition-all duration-500 ${
                hasAnimated.services
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
            }`}
            id="services"
        >
            <div className="under-services">
                <div className="services-items">
                    <div className="clientheader serv-section-header">
                        My Services
                    </div>
                    <div className="container-services-item">
                        {data.map((data, index) => {
                            return <ServicesItems key={index} data={data} hasAnimated={hasAnimated}/>;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Myservices;
