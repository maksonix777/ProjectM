import React, { useState } from 'react';

const CounterShop = () => {
  const [count, setCount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    setCurrentPrice("$" + elem.discont_price);
    setDiscountPrice("$" + elem.price);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setCurrentPrice("$" + elem.price);
      setDiscountPrice("");
    }
  };

  const getProductPrice = () => {
    // Здесь реализуйте логику для получения стоимости одного товара
    // Например, в зависимости от выбранного товара
    return 10; // Замените на логику получения стоимости
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
      <p>Total Cost: ${totalCost}</p>
    </div>
  );
};

export default CounterShop;

