import React, { useEffect, useState } from 'react'
import s from './SingleProduct.module.css'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../../asyncActions/singleproduct';
import { dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ROOT_URL } from '../..';
import ButtonCard from '../../ui/Buttons/ButtonCard';
import { addItemAction } from '../../store/reducers/basketReducer';


export default function SingleProduct() {

  // const id_One_Product = useParams() 

  const { products } = useSelector(store => store.products)

  console.log(products);



  const dispatch = useDispatch();
  const { product_id } = useParams()


  const [currentCount, setCurrentCount] = useState(1);



  useEffect(() => {
    dispatch(fetchProductById(product_id))
  }, []);

  function incr() {
    if (currentCount < 10)
      setCurrentCount(prevCount => prevCount + 1);
  }


  function decr() {
    if (currentCount > 1)
      setCurrentCount(currentCount - 1);
  }


  function addPayload() {
    const payload = { product: products, count: currentCount }
    // dispatch(addManyToCartAction(payload))
  }

  function AddToCartHandle(obj) {

    dispatch(addItemAction({ ...obj, count: currentCount }))
  
  }


  const { id, title, description, price, image, count, discont_price } = products




  return (


    <div className="container">

      <div className={s.productCard}>

        <div><img src={`${ROOT_URL}/${image}`} alt="" /></div>
        <div className={s.cardInfo}>

          <div className={s.description}>
            <h3>{title}</h3>

            <div className={s.cardPrice}>
              {discont_price ? <p className={s.currentPrice}> ${discont_price}</p> : <p className={s.currentPrice}> ${price}</p>}
              {discont_price && <p className={s.oldPrice}>${price}</p>}
              <p>persent</p>
            </div>

            <div className={s.controlBtn}>
              <div className={s.controlAll}>
                <div className={s.control}>
                  <button onClick={decr}>-</button>
                  <p>{currentCount}</p>
                  <button onClick={incr}>+</button>
                </div>


                <ButtonCard title='Add to card' onClick={() => AddToCartHandle(products)} />
              </div>
              {/* /controllAll  */}

            </div>

            <p>{description}</p>

          </div>
          <p>Read more</p>
          <div className={s.cardPriceContainer}>
          </div>

        </div>
        {/* cardInfo */}
      </div>
    </div>
  )
}
