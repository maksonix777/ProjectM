import React, { useRef, useState } from "react";
import s from "./ButtonCard.module.css";

export default function ButtonCard({onClick, title, widthBtn}) {
  const[btnTitle, setBtnTitle ] = useState(title); 

      /*Button | sett title of a button */
  function preventDefault(e){
    e.preventDefault();
    onClick();
      if (title!=="Check out"){
      setBtnTitle("Added")
      }
      
  }
  return (
    <div className="wrapper">
      <button  onClick={(e) => preventDefault(e)} className={btnTitle=="Added"? s.addedBtn : s.checkout_btn } 
      style={{width: widthBtn }}> {btnTitle} 
      </button>
      </div>
  );
}
