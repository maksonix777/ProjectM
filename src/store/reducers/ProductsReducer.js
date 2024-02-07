const defaultState = {
  category_title: "",
  products: [ ],
};

const ALL_PRODUCTS = "ALL_PRODUCTS";
const ALL_SALE_PRODUCTS = "ALL_SALE_PRODUCTS";
const NOT_ALL_SALES = "NOT_ALL_SALES";
const ONE_CATEGORY_PRODUCTS = "ONE_CATEGORY_PRODUCTS";
const SINGLE_PRODUCT = "SINGLE_PRODUCT"

export const productsReducer = (state = defaultState, action) => {

  switch (action.type) {
      case ALL_PRODUCTS:
        return { products: action.payload };


      case ALL_SALE_PRODUCTS:
        let sales_products = action.payload.filter((elem) => elem.discont_price);
        return { products: sales_products };

      case NOT_ALL_SALES:
        let not_all_sales_products = action.payload
        .filter((elem) => elem.discont_price)
        .slice(0, 4);
        return { products: not_all_sales_products };

      case  ONE_CATEGORY_PRODUCTS:
       
        return { category_title: action.payload.category.title, products: action.payload.data }

        case  SINGLE_PRODUCT:
       
        return { category_title: action.payload.category.title, products: action.payload.data }

     default:
        

      return state;
  }
};

export const allProductsAction = (payload) => ({ type: ALL_PRODUCTS, payload });
export const allSalesProductsAction = (payload) => ({type: ALL_SALE_PRODUCTS,payload});
export const notAllSalesProductsAction = (payload) => ({type: NOT_ALL_SALES,payload});
export const oneCategoryProductsAction = (payload) => ({type: ONE_CATEGORY_PRODUCTS,payload});
export const singleProductAction = (payload) => ({ type: SINGLE_PRODUCT, payload });









//-----------------------------------------
// const products = [
//     {
//       id: 1,
//       title: 'Apple',
//       price: 50
//     },
//     {
//       id: 2,
//       title: 'Orange',
//       price: 24
//     },
//     {
//       id: 3,
//       title: 'Kiwi',
//       price: 67
//     }
//   ]

//   const DELETE_PRODUCT = 'DELETE_PRODUCT';

//   export const deleteProduct = product_id => ({ type: DELETE_PRODUCT, payload: product_id });
  
//   // Создали "маленький" reducer
//   export const productReducer = (state = products, action) => {
//     if(action.type === DELETE_PRODUCT){
//       return state.filter(el => el.id !== action.payload)
//     }
//     return state
//   }