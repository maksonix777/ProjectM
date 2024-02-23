import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import s from "./CounterShop.module.css"
import { addItemAction } from '../../store/reducers/basketReducer';
import { addCountProductAction } from '../../store/reducers/ProductsReducer';

export default function CounterShop({ elem,type}) {
    const dispatch = useDispatch();
    const handleChange = (elem, isIncr) => {
        if (isIncr && type == "basketPage") {
            dispatch(addItemAction({ ...elem, count: 1 }));
        } 
        if(!isIncr && type == "basketPage" && elem.count > 1 )
        {  dispatch(addItemAction({ ...elem, count: -1 }));}

        if(isIncr && type == "singleProduct"){
            dispatch(addCountProductAction({ ...elem, count: elem.count + 1 }));
            console.log(type, elem.count);
        }
        if(!isIncr && type == "singleProduct" && elem.count > 1){
            dispatch(addCountProductAction({ ...elem, count: elem.count - 1 }));
        }
           
       
    };
let itemAmout =  elem.count
    return (
        <div className={s.control}>
            <button onClick={() => handleChange(elem, false)}>-</button>
            <p className={s.itemsAmount}>{itemAmout}</p>
            <button onClick={() => handleChange(elem, true)}>+</button>
           
        </div>
    );
}