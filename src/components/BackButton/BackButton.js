import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackButton.css";

function BackButton() {
  const history = useNavigate();
  const handleChange = () => {
    history(-1);
  };
  return (
    <div className="wrapper-back" onClick={handleChange}>
      <button className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </button>
    </div>
  );
}
export default BackButton;
