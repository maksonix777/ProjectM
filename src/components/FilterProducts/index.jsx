import React, { useEffect } from "react";
import s from "./FilterProducts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterAllAction, filterByDefaultAction, filterHighLowAction, filterLowHighAction, filterNewestAction } from "../../store/reducers/ProductsReducer";



  export default function FilterProducts({type}) {
  


  const products = useSelector(store => store.products);
  const filteredProducts = useSelector(store => store.filter);
const dispatch = useDispatch();

  useEffect(() => {
    
  },[products])

  function handleOnChange(e) {
      const value = e.target.value;

      console.log(value);
      if (value >=0 && e.target.name === "from") {
      
          dispatch(filterAllAction({...products, from: value ? value : 0}))  
      }
      if (value !==Number.MAX_SAFE_INTEGER && e.target.name === "to") {

              dispatch(filterAllAction({...products, to: value ? value : Number.MAX_SAFE_INTEGER }))
         
      }
      if (e.target.name === "checkSale") {
          const updatedProducts = {
              ...products,
              isSale: e.target.checked 
          };
          console.log(updatedProducts);
          dispatch(filterAllAction(updatedProducts))
      } 
      
      
      switch (value) {
          case 'default':
              console.log(value);
              dispatch(filterByDefaultAction({...products, sortBy: value }))
              break;
          case 'newest':
              console.log(value);
              dispatch(filterNewestAction({...products, sortBy: value }))
              break;
          case 'high':
              console.log(value);
              dispatch(filterHighLowAction({...products, sortBy: value }))
              break;
          case 'low':
              console.log(value);
              dispatch(filterLowHighAction({...products, sortBy: value }))
              break;
          default:
             
              break;
      }
  }

  return (
    <form onChange={handleOnChange} className={s.sortAllContainer}>

      <div className={s.price_filter}>
        <label>Price</label>                      
          <input type="text" placeholder="from" name="from" />
          <input type="text" placeholder="to" name="to" />
        </div>

      {type!=="allSales" && <div className={s.discount_filter}>
        <label>Discounted items</label>
        <input className={s.check_Box} type='checkbox' name="checkSale"/>
      </div> } 

      <div className={s.sorted_filter}>
        <label for="dropdown">Sorted</label>
        <select id="dropdown" name="filter_by" className={s.select_drop_down}>
          <option className={s.drop_down_option} value="default">by default</option>
          <option className={s.drop_down_option} value="newest">newest</option>
          <option className={s.drop_down_option} value="high">price:high-low</option>
          <option className={s.drop_down_option} value="low">price:low-high</option>
        </select>
      </div>
    </form>
  );
}
