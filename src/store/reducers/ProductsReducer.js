

const defaultState = {
  category_title: '',
  products: []
 }

 const ALL_PRODUCTS = 'ALL_PRODUCTS'
 const DELETE_PRODUCT = 'DELETE_PRODUCT' //???


 export const productsReducer = (state = defaultState, action) => {
   switch (action.type) {
      case ALL_PRODUCTS:
           return { category_title: 'All products', products: action.payload }
       default:
           return state
   }
 }


 export const allProductsAction = (payload) => ({ type: ALL_PRODUCTS, payload })
 export const deleteProduct = (productId) => ({ type: DELETE_PRODUCT, payload: productId })









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