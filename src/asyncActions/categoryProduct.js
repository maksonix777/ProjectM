import React from 'react'
import { ROOT_URL } from "../index";
import { oneCategoryProductsAction } from '../store/reducers/ProductsReducer';

export default function categoryProduct(id) {
  
    return function (dispatch) {
        fetch(ROOT_URL + "/categories/" + id)
          .then((res) => res.json())
          .then((data) => {
            
            dispatch(oneCategoryProductsAction(data));
          });
      };
}
