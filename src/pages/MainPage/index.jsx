import React from 'react'
import s from "./MainPage.module.css";
import checkOut from "../../ui/checkOut.jpg"

export default function MainPage() {
  return (
    <div>
        <div className={s.banner}> <img src={checkOut} alt="checkOut" /></div>

        <div className='wrapper'> 
            <p className={s.bannerText}> Amazing Discounts on Garden Products!</p>
            <button className={s.checkout_btn}> Check out</button>
        </div>

        <div className={s.categoriesContainer}>
        <p className={s.categories}>Categories</p>
        <div className={s.cardAll}>
            <div class={s.card}>
               <p class="cardTxt">Fertilizer</p>
            </div>
            <div class="card">
                <p class="cardTxt">Protective products and septic tanks</p>
            </div>
        </div>
    </div>
        </div>
        
     
    
   )
}
