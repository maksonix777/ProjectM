import React from 'react'
import ButtonCard from '../../ui/Buttons/ButtonCard'
import ProductBasket from '../../components/ProductBasket'
import { Link } from 'react-router-dom'
import s from './BasketPage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import GreyButtonLane from '../../components/GreyButtonLane'
import LinkButton from '../../ui/Buttons/LinkButton'

export default function BasketPage() {
  const dispatch = useDispatch()
  const item = useSelector(store => store.basket)
  

  return (
      <div className="wrapper">
        <div className="wrapper_Small"> 
      { item.length? <ProductBasket/>:

          (<div>
          <div className={s.buttonGreyContainer}>
                <GreyButtonLane title="Shopping cart" />
                <div className={s.greybtnMainPage} >
                <LinkButton buttonText="Back to the store" link="/products/all" /></div>
                </div>
          
                <Link to={'/products/all'}><ButtonCard title="continue shopping"/></Link>
          <p className={s.looksLike}>Looks like you have no items in your basket currently.</p>
          </div>)}
          </div>
    </div>
  )
}
