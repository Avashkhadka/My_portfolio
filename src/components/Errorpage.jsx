import React from "react";
import { useNavigate } from "react-router";

function Errorpage() {
  let navigate = useNavigate();
  return (
    <div className="Errorpage">
      <p>404</p>
      <span>Oops! The page you're looking for does not exist.</span>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back To Previous Page <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Errorpage;
