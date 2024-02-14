import React from 'react'
import discount from "../../media/discount.png";
import s from './Coupon.module.css'
import InputCoupon from '../../ui/InputCoupon';

export default function Coupon() {
    return (
        <div className="wrapper">
            <div className={s.discount}>
                <div className={s.discountTxt}>5% off on the first order</div>
                <div className={s.discountItems}>

                    <div className={s.img_container}>
                        <img className={s.img_hands} src={discount} alt="discount"/>

                    </div>

                    <div className={s.form}>
                        <InputCoupon type="coupon" />
                        <div className={s.forHands}></div>
                      
                       
                    </div>

                </div>

            </div>

        </div>
    )
}
