import React, { useEffect, useState } from 'react';
import s from './InputCoupon.module.css';
import ButtonCard from './Buttons/ButtonCard';
import { useForm } from 'react-hook-form';
import formDataSend from '../asyncActions/formDataSend';
import { useSelector } from 'react-redux';
import Modal from '../components/Modal';

export default function InputCoupon({ type, onclick }) {
  const { handleSubmit, register, reset, formState: { errors } } = useForm(); // Destructuring errors from formState
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission
  const blackInput = type === "order" ? s.blackPlaceholder : s.discountInput;
  const [isShowModal, setIsShowModal] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsShowModal(true);
      setFormSubmitted(true); // Set the formSubmitted state to true

      console.log('User Input Data:', data);
      setTimeout(() => { setIsShowModal(false) }, 7000);
      await formDataSend(data);
      reset(); // Clear the form inputs after successful submission
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };

  useEffect(() => { }, [isShowModal]);

  const modalTxt = ['Your Sale Coupon was successfully sent!'];

  return (
    <div>
      {isShowModal && <Modal modalTxt={modalTxt} onClose={() => setIsShowModal(false)}>
        <div className={s.modalTxt}>
          <p className={s.congratulations}>Congratulations!</p>
          <p>Your order has been successfully placed on the website.</p>
          <p>A manager will contact you shortly to confirm your order.</p>
        </div>
      </Modal>}
      <form className={`${s.discount_form} ${blackInput}`} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            {...register("name", {
              required: true,
              minLength: { value: 2, message: "Name is too short" }
            })}
            autoComplete='name'
            className={s.discountInput}
          />
          {errors.name && <span className={s.error__message}>{errors.name.message}</span>}
        </label>
        
        <label htmlFor="phone">
        <input
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /\(?\+\(?49\)?[ ()]?([- ()]?\d[- ()]?){10}/g,
              message: "Phone number must start from +49"
            }
          })}
          className={s.discountInput}
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone number"
        />
        {errors.phone && <span className={s.error__message}>{errors.phone.message}</span>}
        </label>
        <input
          {...register("email", { required: "Email is required" })}
          className={s.discountInput}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
        {errors.email && <span className={s.error__message}>{errors.email.message}</span>}

        {type === "order" ? (
          <></>
        ) : (
          <button
            className={formSubmitted ? s.disabledBtn : s.couponBtn}
            type="submit"
            disabled={formSubmitted}
          >
            {formSubmitted ? "Request Submitted" : "Get a discount"}
          </button>
        )}
      </form>
    </div>
  );
}
