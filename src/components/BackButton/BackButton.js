import React from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";
function BackButton() {
  const navigate = useNavigate();
  return (
    <div>
         <button className='back' onClick={() => navigate(-1)}>Go back 1 Page</button> 
    </div>
  )
}

export default BackButton