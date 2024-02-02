import React from 'react'
import ButtonCard from '../../ui/Buttons/ButtonCard'
import ProductBasket from '../../components/ProductBasket'
import { Link } from 'react-router-dom'

export default function EmptyCardPage() {
  return (
    <div>
      <ProductBasket/>
      <Link to={'/products/all'}><ButtonCard title="continue shoping"/></Link>
     
     
       
        <p>Looks like you have no items in your basket currently.</p>
        
    </div>
  )
}
