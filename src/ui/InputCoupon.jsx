import React from 'react'
import s from './InputCoupon.module.css'; 

export default function InputCoupon() {
  return (
    <div>
        <div className={s.discount_form}>
        <input className={s.discountInput} type="text" id="name" name="name" placeholder="Name"/>
        <input className={s.discountInput} type="tel" id="phone" name="phone" placeholder="Phone number"/>
        <input className={s.discountInput} type="email" id="email" name="email" placeholder="Email"/>
        <button  className={s.couponBtn}type="submit">Get a discount</button>
        </div>
    </div>
  )
}
