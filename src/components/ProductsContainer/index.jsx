import React from 'react'
import ProductItem from '../ProductItem'
import { useSelector } from 'react-redux'

export default function ProductsContainer() {
  const products_state = useSelector(state => state.products);
  return (
    <div>
      {
        products_state.map(el => <ProductItem key={el.id} {...el} />)
      }
    </div>
  )
}