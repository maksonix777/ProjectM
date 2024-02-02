import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ROOT_URL } from "../../index";
import { fetchAllProducts } from "../../asyncActions/products";
import s from './ProductsContainer.module.css';
import ButtonCard from "../../ui/Buttons/ButtonCard";

function ProductsContainer({ type }) {
  const { id } = useParams();
  const { category_title, products } = useSelector((store) => store.products);
  const dispatch = useDispatch(); 

  useEffect(() => {
    if (type !== "category") {
      dispatch(fetchAllProducts(type));
    }
  }, [id, type]);


  let currentPrice = 0; {/* posle skidki */}
  let price = 0;


  function priceHandle(elem){
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

    if (elem.discont_price){
      sale = '-' + Math.round(100 - (elem.discont_price * 100 / elem.price)) + '%'

    }
    else
      sale = ''

    return sale
  }



return (
  <div className="wrapper">
 
    <h2 className={s.productsAllTitle}>All products</h2>
    <div className={s.productsContainer}>
      {products.map((elem) => (
        <div className={s.ProductCard} key={elem.id}>
          {elem.discont_price && (<div className={s.greenDiscount}><p className={s.txtDiscount}>{saleHandle(elem)}</p></div>)}

          <div className={s.imgBtnContainer}> 
              <img className={s.productsImg} src={ROOT_URL + elem.image} />
              <div className={s.btn}> 
              <ButtonCard title="Add to card" widthBtn="284"/>
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
         
        </div>
      ))}
    </div>
  </div>
);

}

export default ProductsContainer;


// import React from 'react'
// import ProductsContainer from '../../components/ProductsContainer'

// export default function ProductsPage() {
//   return (
//     <div><ProductsContainer/></div>
//   )
// }
