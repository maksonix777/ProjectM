import React from 'react'
import { deleteProduct } from '../../store/reducers/ProductsReducer'
import { useDispatch } from 'react-redux'
export default function ProductItem({ id, title, price }) {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(deleteProduct(id))}>
      <p>Title: {title}</p>
      <p>Price: {price}$</p>
    </div>
  )
}