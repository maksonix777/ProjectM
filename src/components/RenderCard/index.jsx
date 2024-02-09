import React from 'react'
import s from './RenderCard.module.css' 
import { Link } from 'react-router-dom'
import ButtonCard from '../../ui/Buttons/ButtonCard'
import { ROOT_URL } from '../..'
import { useDispatch } from 'react-redux'
import { addItemAction } from '../../store/reducers/basketReducer'



export default function RenderCard({products,type}) { /* { ? } */

const dispatch = useDispatch();


let currentPrice = 0; {/* posle skidki */ }
let price = 0;


function priceHandle(elem) {
  if (elem.discont_price) {
    currentPrice = '$' + elem.discont_price
    price = '$' + elem.price
  }
  else if (!elem.discont_price) {
    currentPrice = '$' + elem.price
    price = ""
  }
  return currentPrice
}



function saleHandle(elem) {
  let sale = 0

  if (elem.discont_price) {
    sale = '-' + Math.round(100 - (elem.discont_price * 100 / elem.price)) + '%'

  }
  else
    sale = ''

  return sale
}


function AddToCartHandle(obj) {

  dispatch(addItemAction({ ...obj, count: 1 }))

}
console.log(type + '1213242326525')




    return (
        <div>RenderCard
            <div className={s.productsContainer}>
                {products?.map((elem) => (

                    <Link to={"/product/" + elem.id}>
                        <div className={s.ProductCard} key={elem.id}>
                            {elem.discont_price && (<div className={s.greenDiscount}><p className={s.txtDiscount}>{saleHandle(elem)}</p></div>)}

                            <div className={s.imgBtnContainer}>
                                <img className={s.productsImg} src={ROOT_URL + elem.image} />

                                <div className={s.btn}>
                                    <ButtonCard onClick={() => AddToCartHandle(elem)} title="Add to card" widthBtn="284" />
                                </div>
                            </div>

                            <abbr title={elem.title}>

                                <p className={s.productTitle}>{elem.title}</p>

                            </abbr>

                            <div className={s.productPrices}>
                                <p className={s.productPrice}>{priceHandle(elem)}</p>
                                {elem.discont_price && <p className={s.discount_price}>{price}</p>}
                                {/* esli elem disc = true, togda render p */}
                            </div>

                        </div></Link>
                ))}
            </div>



        </div>
    )
}
