import React from 'react'
import discount from "../../media/discount.png";
import s from './Coupon.module.css'
import InputCoupon from '../../ui/InputCoupon';

export default function Coupon() {
    return (
    <div className="wrapper">
        <div className={s.discount}>

           <p className={s.discountTxt}>5% off on the first order</p>
            <div className={s.discountItems}>
            <div className={s.hands}>
                <img src={discount} alt ="discount"/>
            </div>
            <InputCoupon/>
        </div>
        
    </div>

    </div>
    )
}
