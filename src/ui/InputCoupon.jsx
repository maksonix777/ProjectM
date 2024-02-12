// InputCoupon.jsx
import React, { useEffect, useState } from 'react';
import s from './InputCoupon.module.css';
import ButtonCard from './Buttons/ButtonCard';
import { useForm } from 'react-hook-form';
import formDataSend from '../asyncActions/formDataSend';
import { useSelector } from 'react-redux';
import Modal from '../components/Modal';

export default function InputCoupon({ type, onclick }) {
  const { handleSubmit, register, reset } = useForm();
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission
  const blackInput = type === "order" ? s.blackPlaceholder : s.discountInput;
  const [isShowModal,setIsShowModal] = useState(false)
  const onSubmit = async (data) => {
    try {
      setIsShowModal(true);
      setFormSubmitted(true); // Set the formSubmitted state to true

      console.log('User Input Data:', data);
      setTimeout(() => {setIsShowModal(false)},7000)
      await formDataSend(data);
      reset(); // Clear the form inputs after successful submission
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };
  
   useEffect(() => {} , [isShowModal ])
    
   
  return (
    <div>
      {isShowModal && <Modal onClose={() => setIsShowModal(false)}>
        <div className={s.modalTxt}>
          <p className={s.congratulations}>Congratulations!</p>
          <p>Your order has been successfully placed on the website.</p>
          <p>A manager will contact you shortly to confirm your order.</p>
        </div>
      </Modal>}
      <form className={`${s.discount_form} ${blackInput}`} onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: "" })} className={s.discountInput} type="text" id="name" name="name" placeholder="Name" />
        <input {...register("phone", { required: "" })} className={s.discountInput} type="tel" id="phone" name="phone" placeholder="Phone number" />
        <input {...register("email", { required: "" })} className={s.discountInput} type="email" id="email" name="email" placeholder="Email" />

        {type === "order" ? (
          <ButtonCard onClick={onclick} title="Order" widthBtn="100%" type={type} disabled={formSubmitted} />
        ) : (
          <button 
           className={formSubmitted ? s.disabledBtn : s.couponBtn}
           type="submit" 
           disabled={formSubmitted}>{formSubmitted  ? "Request Submitted" : "Get a discount" }
          </button>
        )}
      </form>
    </div>
  );
}
