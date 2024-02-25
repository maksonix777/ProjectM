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
      <div className="wrapper_All">
        {item.length ? <ProductBasket /> :

          (<div className='wrapper shopping_wrapper'>
            <div className={s.buttonGreyContainer}>
              <GreyButtonLane title="Shopping cart" />

              <div className={s.greybtnMainPage}>
                <LinkButton buttonText="Back to the store" link="/products/all" />

              </div>
            </div>
            <p className={s.looksLike}>
              Looks like you have no items
              in your basket currently.</p>
            <Link to={'/products/all'}><ButtonCard title="Continue Shopping" /></Link>

            <div className={s.greybtnMainPageMob}>
            <LinkButton buttonText="Back to the store" link="/products/all" />
            </div>
            
          </div>)}



      </div>
    </div>
  )
}
