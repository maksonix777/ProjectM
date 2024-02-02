import React from 'react'
import { ROOT_URL } from "../index";
import { allProductsAction } from '../store/reducers/ProductsReducer';
import { titleCategoryAction } from '../store/reducers/categoriesReducer';

export default function categoryProduct({id}) {
    return function (dispatch) {
        fetch(ROOT_URL + "/categories/" + id)
          .then((res) => res.json())
          .then((data) => {
            
            dispatch(titleCategoryAction(data));
          });
      };
}
