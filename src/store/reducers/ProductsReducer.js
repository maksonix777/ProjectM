const products = [
    {
      id: 1,
      title: 'Apple',
      price: 50
    },
    {
      id: 2,
      title: 'Orange',
      price: 24
    },
    {
      id: 3,
      title: 'Kiwi',
      price: 67
    }
  ]

  const DELETE_PRODUCT = 'DELETE_PRODUCT';

  export const deleteProduct = product_id => ({ type: DELETE_PRODUCT, payload: product_id });
  
  // Создали "маленький" reducer
  export const productReducer = (state = products, action) => {
    if(action.type === DELETE_PRODUCT){
      return state.filter(el => el.id !== action.payload)
    }
    return state
  }