import React from "react";
import client1 from "../images/logo-1.svg";
import client2 from "../images/logo-2.svg";
import client3 from "../images/logo-3.svg";
import client4 from "../images/logo-4.svg";
function Clients() {
  return (
    <div className="Clients-tab">
      <div className="client-data">
        <div className="clientheader"> Awesome Clients</div>
        <div className="clients-name">
          <div>
            <img className="client-logo" src={client1} alt="" />
          </div>
          <div>
            <img className="client-logo" src={client2} alt="" />
          </div>
          <div>
            <img className="client-logo" src={client3} alt="" />
          </div>
          <div id='works'>
            <img className="client-logo" src={client4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
