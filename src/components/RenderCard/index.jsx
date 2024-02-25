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
  else sale = ''

  return sale
}


 function AddToCartHandle(obj) {

  dispatch(addItemAction({ ...obj, count: 1 }))

}
console.log(type + '1213242326525')




    return (
        <div className='wrapper_All'>
            <div className={s.productsContainer} >
              {/* {!products.length && <div className={s.noResult}> no result found </div>} */}
                {products?.map((elem) => ( 
                  elem?.isShowFrom && elem?.isShowTo && elem?.isShowSale &&
                    <Link to={"/product/" + elem.id}>
                        <div className={s.ProductCard} key={elem.id}>
                            {elem.discont_price && (<div className={s.greenDiscount}><p className={s.txtDiscount}>{saleHandle(elem)}</p></div>)}

                            <div className={s.imgBtnContainer}>
                                <img className={s.productsImg} src={ROOT_URL + elem.image} />

                                <div className={s.btn}>
                                    <ButtonCard onClick={() => AddToCartHandle(elem)} title="Add to cart" widthBtn="284" />
                                </div>
                            </div>

                            <abbr title={elem.title}>

                                <p className={s.productTitle}>{elem.title}</p>

                            </abbr>

                            <div className={s.productPrices}>
                                <h3 className={s.productPrice}>{priceHandle(elem)}</h3>
                                {elem.discont_price && 
                                <h3 className={s.discount_price}>{elem.price}</h3>}
                                {/* esli elem disc = true, togda render p */}
                            </div>

                        </div></Link>
                ))}
            </div>



        </div>
    )
}
