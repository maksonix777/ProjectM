import React from 'react';
import s from './Basket.module.css';
import basketImg from '../../media/basket.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Basket = () => {
  // Calculate the total number of items in the basket
  const products = useSelector(store => store.basket)
  const totalItems =  products.reduce((acc, item) => acc + item.count, 0) ;

 
return (
    <div className={s.basketItem}>
     
      <div className={s.basketGrey}alt="logo">
        <Link to='/BasketProducts'> <img src={basketImg}  alt="Basket" /> </Link> 
      { totalItems > 0 && <div className={s.basketGreenCount}>{totalItems}</div>}
      </div>
    </div>
  );
};

export default Basket;




