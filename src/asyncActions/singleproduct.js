import { useDispatch } from "react-redux";
import { ROOT_URL } from "../index";
import { singleProductAction } from "../store/reducers/ProductsReducer";


export function fetchProductById(id){
    console.log((ROOT_URL + '/products/' + id));
    return function(dispatch){
        fetch(ROOT_URL + '/products/' + id)
            .then(res => res.json())
            .then(data => (dispatch(singleProductAction(data))))  
    }
}
