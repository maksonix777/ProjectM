import React from 'react';
import s from './InputCoupon.module.css';
import ButtonCard from './Buttons/ButtonCard';

export default function InputCoupon({ type }) {
  const blackInput = type === "order" ? s.blackPlaceholder : s.discountInput;

  return (
    <div>
      <form className={`${s.discount_form} ${blackInput}`}>
        <input className={s.discountInput} type="text" id="name" name="name" placeholder="Name" />
        <input className={s.discountInput} type="tel" id="phone" name="phone" placeholder="Phone number" />
        <input className={s.discountInput} type="email" id="email" name="email" placeholder="Email" />
        
      </form>
      { type === "order" ? <ButtonCard title="Order" widthBtn="100%" /> : <button className={s.couponBtn} type="submit">Get a discount</button>}
    </div>
  );
}
