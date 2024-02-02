import { ROOT_URL } from "../index";
import { allProductsAction } from "../store/reducers/ProductsReducer";

export function fetchAllProducts(type) {
  return function (dispatch) {
    fetch(ROOT_URL + "/products/all")
      .then((res) => res.json())
      .then((data) => {
        dispatch(allProductsAction(data));
      });
  };
}