// Basket.js
import React from 'react';
import s from './Basket.module.css';
import basketImg from '../../media/basket.png';
import { Link } from 'react-router-dom';



const Basket = ({ basketItems, removeFromBasket }) => {
  // Calculate the total number of items in the basket
  const totalItems = basketItems ? basketItems.reduce((acc, item) => acc + item.quantity, 0) : 0;

  return (
    <div className={s.basketItem}>
       
      
      
      {totalItems > 0 && (
        <div className={s.basketCount}>
          <span>{totalItems}</span>
        </div>
      )}

      {/* Basket image */}
     
      <div>
       <Link to='/emptyBasket'> <img src={basketImg} alt="Basket" /> </Link> 
      </div>

      {/* Basket items */}
      <ul>
        {basketItems?.map(item => (
          <li key={item.id}>
            <div>
              <img src={basketImg} alt={item.name} />
            </div>
            <div>
              <p>{item.name} - ${item.price}</p>
              <button onClick={() => removeFromBasket(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Basket;




