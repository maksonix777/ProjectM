import React, { useEffect, useState } from 'react'
import s from './SingleProduct.module.css'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../../asyncActions/singleproduct';
import { dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { ROOT_URL } from '../..';
import ButtonCard from '../../ui/Buttons/ButtonCard';
import { addItemAction } from '../../store/reducers/basketReducer';
import ShowDescription from '../ShowDescription';
import CounterShop from '../CounterShop';


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
    if (currentCount < 24)/*  Products amount */
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
    <div className='wrapper_All'>
      
      <div className={`${s.cardContainer} wrapper`}>
        <div className={s.title}>
          <h3>{title}</h3>
          </div>

        <div className={s.img}>
            <img  src={`${ROOT_URL}/${image}`} alt="" />
            {discont_price && <h4 className={s.discountSmall}>{`-${Math.round(100 - discont_price * 100 / price)}%`}</h4>}
        </div>


        <div className={s.controlAll}>
            <CounterShop elem={products} type = {"singleProduct"}/>
            <div className={s.addCardtBtn}>
            <ButtonCard title='Add to card'
            widthBtn="316px"
            onClick={ () => AddToCartHandle(products)} />
            </div>
        </div>
              
             

        <div className={s.price}>
        <div className={s.cardPrice}>
                        {discont_price ? <h2 className={s.currentPrice}> ${discont_price}</h2> : <h2 className={s.currentPrice}> ${price}</h2>}
                        {discont_price && <h3 className={s.oldPrice}>${price}</h3>}
                        {discont_price && <h4 className={s.discount}>{`-${Math.round(100 - discont_price * 100 / price)}%`}</h4>}
          
        </div>
        </div>
        <div className={s.description}>
          <ShowDescription description={description}/>
        </div>
      </div>
     
    </div>
  )
}
