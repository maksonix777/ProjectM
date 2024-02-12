import React from 'react';
import s from './InputCoupon.module.css';
import ButtonCard from './Buttons/ButtonCard';
import { useForm } from 'react-hook-form';

export default function InputCoupon({ type,onclick }) {
  const { handleSubmit } = useForm(); // Move the hook outside the function

  const blackInput = type === "order" ? s.blackPlaceholder : s.discountInput;

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3333/sale/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Coupon was sended successfully!');
        console.log(response);
        console.log(data + "ghfljhiortjh");
      } else {
        alert('Registration error!');
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };

  return (
    <div>
      <form className={`${s.discount_form} ${blackInput}`} onSubmit={handleSubmit(onSubmit)}>
        <input className={s.discountInput} type="text" id="name" name="name" placeholder="Name" />
        <input className={s.discountInput} type="tel" id="phone" name="phone" placeholder="Phone number" />
        <input className={s.discountInput} type="email" id="email" name="email" placeholder="Email" />
        
        {type === "order" ? (
          <ButtonCard onClick={onclick} title="Order" widthBtn="100%" type={type}/>
        ) : (
          <button className={s.couponBtn} type="submit">
            Get a discount
          </button>
        )}
      </form>
    </div>
  );
}
