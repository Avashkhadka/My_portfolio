import React from "react";
import client1 from "../assets/images/logo-1.svg";
import client2 from "../assets/images/logo-2.svg";
import client3 from "../assets/images/logo-3.svg";
import client4 from "../assets/images/logo-4.svg";

function Clients({ hasAnimated }) {
    return (
        <div
            className={`Clients-tab transition-all duration-500 ${
                hasAnimated.client
                    ? " opacity-100 translate-y-0"
                    : " opacity-0 translate-y-10"
            }`}
            id="client"
        >
            <div className="client-data animate-fade-in-up delay-300">
                <div className="clientheader  animate-fade-in-up delay-300">
                    {" "}
                    Awesome Clients
                </div>
                <div className="clients-name  animate-fade-in-up delay-300">
                    <div>
                        <img className="client-logo" src={client1} alt="" />
                    </div>
                    <div>
                        <img className="client-logo" src={client2} alt="" />
                    </div>
                    <div>
                        <img className="client-logo" src={client3} alt="" />
                    </div>
                    <div>
                        <img className="client-logo" src={client4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clients;
