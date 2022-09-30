import React from "react";
import "./BackButton.css";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const history = useNavigate();
  return (
      <button className="back-btn" onClick={() => history(-1)}>
        Go back
      </button>
   
  );
}
export default BackButton;
