import React from 'react';


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ROOT_URL } from "../../index";
import { fetchAllProducts } from "../../asyncActions/products";
import s from './Sale.module.css';
import ButtonCard from "../../ui/Buttons/ButtonCard";
import { addItemAction } from '../../store/reducers/basketReducer';

function Sale({ type }) {
  const { id } = useParams();
  const { category_title, products } = useSelector((store) => store.products);
  const dispatch = useDispatch(); 


  
  useEffect(() => {
    if (type !== "category") {
      dispatch(fetchAllProducts(type));
    }
  }, [id, type]);


  function priceHandle(elem){
    let currentPrice = 0;
    let price = 0;

    if (elem.discont_price) {
      currentPrice = '$' + elem.discont_price;
      price = '$' + elem.price;
    } else if (!elem.discont_price) {
      currentPrice = '$' + elem.price;
      price = "";
    }

    return currentPrice;
  } 

  function saleHandle(elem) {
    let sale = 0;

    if (elem.discont_price){
      sale = '-' + Math.round(100 - (elem.discont_price * 100 / elem.price)) + '%';
    } else {
      sale = '';
    }

    return sale;
  }
  function AddToCartHandle(obj) {

    dispatch(addItemAction({ ...obj, count: 1 }))
  
  }
  // Filter products with a discount
  const saleProducts = products;
console.log(saleProducts);
  return (
    
    <div className="wrapper_All">


     <div className={`${s.productsContainer} wrapper`}>
        {saleProducts.map((elem) => (
          <div className={s.ProductCard} key={elem.id}>
            {elem.discont_price && (<div className={s.greenDiscount}><p className={s.txtDiscount}>{saleHandle(elem)}</p></div>)}

            <div className={s.imgBtnContainer}> 
              <img className={s.productsImg} src={ROOT_URL + elem.image} />
              <div className={s.btn}> 
                <ButtonCard onClick={()=> AddToCartHandle(elem)}  title="Add to cart" widthBtn="284"/>
              </div>
            </div>

            <abbr title={elem.title}> 
              <p className={s.productTitle}>{elem.title}</p>
            </abbr>

            <div className={s.productPrices}>
              <h3 >{priceHandle(elem)}</h3>
              {elem.discont_price && <p className={s.discount_price}></p>} 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sale;













// export default function Sale({ id, title, price }) {
//   const products_state = useSelector(state => state.products);

//   // Check if products_state is an array before mapping
//   if (!Array.isArray(products_state)) {
//     console.error('products_state is not an array:', products_state);
//     return null; // or handle the loading state or error state as needed
//   }

//   return (
//     <div>
//       {products_state.map(el => <ProductItem key={el.id} {...el} />)}
//     </div>
//   );
// }


