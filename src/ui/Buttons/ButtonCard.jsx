import React, { useRef } from "react";
import s from "./ButtonCard.module.css";

export default function ButtonCard({onClick, title, widthBtn}) {
    
  return (
    <div>
      <button onClick={onClick} className={s.checkout_btn} style={{width : widthBtn + 'px'}}> {title} </button>
    </div>
  );
 
}
