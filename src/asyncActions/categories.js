import { ROOT_URL } from "../index";
import { allCategoriesAction, notAllCategoriesAction,} from "../store/reducers/categoriesReducer";

export function fetchAllCategories(type) {
    return function (dispatch) {
    fetch(ROOT_URL + "/categories/all")
        .then((res) => res.json())
        .then((data) => {
        if (type === 'allCategories'){
            dispatch(allCategoriesAction(data));
        } else if (type ==='notAllCategories'){
            dispatch(notAllCategoriesAction(data))
        }
        })
    }
};