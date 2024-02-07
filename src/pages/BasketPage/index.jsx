import React from 'react'
import ButtonCard from '../../ui/Buttons/ButtonCard'
import ProductBasket from '../../components/ProductBasket'
import { Link } from 'react-router-dom'
import s from './BasketPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
export default function BasketPage() {
  const dispatch = useDispatch()
  const {items} = useSelector(store => store.basket)
  return (
     <div>
      <ProductBasket/>
      <Link to={'/products/all'}><ButtonCard title="continue shoping"/></Link>
      <p>Looks like you have no items in your basket currently.</p>
        
    </div>
  )
}
