import React from "react";
function Rcardcomp(props) {
  let Rcardcontainerbf = {
    // background-image:linear-gradient( 145deg , #073655 ,#020A0D) ;
    backgroundImage: `linear-gradient(146deg, ${props.data.lgfirst},${props.data.lgsec})`,
  };


  let Rcardimgcontainerbf = {
    backgroundImage: `linear-gradient(to bottom, ${props.data.lgimgfirst},${props.data.lgimgsec})`,
  };


  return (
    <div className="Rcardcontainer" style={Rcardcontainerbf}>
      <div className="other-data-title">
        <div className="rcard-header">
          <p>{props.data.header}</p>
        </div>
        <p className="rcardcontiner-title">{props.data.title}</p>
        {/* eslint-disable-next-line */}
        <a className="link-rcard" target="_blank" href={props.data.link}>
          <p>View Live Project </p>
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
      <div className="rcard-image" style={Rcardimgcontainerbf}>
        <img src={props.data.image} alt="" className={`rcard-img-${props.ind}`}/>

      </div>
    </div>
  );
}

export default Rcardcomp;
