import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import s from "./CounterShop.module.css"
import { addItemAction } from '../../store/reducers/basketReducer';

export default function CounterShop({ elem,type}) {
    const [count, setCount ] = useState(1);
    const dispatch = useDispatch();
    const handleChange = (elem, isIncr) => {
        if (isIncr && type == "basketPage") {
            dispatch(addItemAction({ ...elem, count: 1 }));
        } 
        if(!isIncr && type == "basketPage" && elem.count > 1 )
        {  dispatch(addItemAction({ ...elem, count: -1 }));}

        if(isIncr && type == "singleProduct"){
            setCount(count + 1)  
        }
        if(!isIncr && type == "singleProduct" && count > 1){
          setCount(count - 1)
        }
           
       
    };
let itemAmout = type == "basketPage" ? elem.count : count
console.log(itemAmout);
    return (
        <div className={s.control}>
            <button onClick={() => handleChange(elem, false)}>-</button>
            <p className={s.itemsAmount}>{elem.count}{itemAmout}</p>
            <button onClick={() => handleChange(elem, true)}>+</button>
           
        </div>
    );
}