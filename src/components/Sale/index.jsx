import React from 'react';
import ProductItem from '../ProductItem';
import { useSelector } from 'react-redux';

export default function Sale({ id, title, price }) {
  const products_state = useSelector(state => state.products);

  // Check if products_state is an array before mapping
  if (!Array.isArray(products_state)) {
    console.error('products_state is not an array:', products_state);
    return null; // or handle the loading state or error state as needed
  }

  return (
    <div>
      {products_state.map(el => <ProductItem key={el.id} {...el} />)}
    </div>
  );
}


