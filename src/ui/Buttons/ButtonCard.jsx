import React, { useRef } from "react";
import s from "./ButtonCard.module.css";

export default function ButtonCard({onClick, title, widthBtn}) {
  function preventDefault(e){
    e.preventDefault();
    onClick();
  }
  return (
    <div>
      <button onClick={(e) => preventDefault(e)} className={s.checkout_btn} style={{width: widthBtn }}> {title} </button>
    </div>
  );
 
}
