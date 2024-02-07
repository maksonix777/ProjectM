import { ROOT_URL } from "../index";
import {
  allProductsAction,
  allSalesProductsAction,
  notAllSalesProductsAction,
} from "../store/reducers/ProductsReducer";

export function fetchAllProducts(type) {
  return function (dispatch) {
    fetch(ROOT_URL + "/products/all")
      .then((res) => res.json())
      .then((data) => {
        if (type === "allProducts") {
          dispatch(allProductsAction(data));
        } else if (type === "allSales") {
          dispatch(allSalesProductsAction(data));
        } else if (type === "notAllSales") {
          dispatch(notAllSalesProductsAction(data));
        }
        
      });
  };
}
