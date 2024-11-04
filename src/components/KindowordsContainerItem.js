import React from "react";

function KindowordsContainerItem(props) {
  return (
    <div className="kindword--items">
      <div className="pimage">
        <img src={props.data.image} alt="demo person" />
      </div>
      <div className="kindword-others">
        <div className="kindword-remark">
          <i className="fa-solid fa-quote-left"></i>
          <p>{props.data.remarks}</p>
        </div>
        <div className="kindword-sep">

        <div className="divider"></div>
        <div className="kindwords-buttons">
          <div className="kindwords-detail">
            <div className="kindword-name">{props.data.name}</div>
            <div className="kindword-about">{props.data.company}</div>
          </div>
          <div className="kindwords-arrowbtns"  id="about">
            <div className="kindwords-rightarrow arr-btn" onClick={()=>{props.HandleChangefuncdec()}}><i className="fa-solid fa-arrow-left-long"></i></div>
            <div className="kindwords-leftarrow arr-btn" onClick={()=>{props.HandleChangefuncinc()}}><i className="fa-solid fa-arrow-right-long"></i></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default KindowordsContainerItem;
