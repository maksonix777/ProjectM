const defaultState = {
  category_title: "",
  products: [ ],

  
};

const ALL_PRODUCTS = "ALL_PRODUCTS";
const ALL_SALE_PRODUCTS = "ALL_SALE_PRODUCTS";
const NOT_ALL_SALES = "NOT_ALL_SALES";
const ONE_CATEGORY_PRODUCTS = "ONE_CATEGORY_PRODUCTS";
const SINGLE_PRODUCT = "SINGLE_PRODUCT";


export const productsReducer = (state = defaultState, action) => {

  switch (action.type) {
      case ALL_PRODUCTS:
        return { products: action.payload, category_title: "All Products" };



      case ALL_SALE_PRODUCTS:
        let sales_products = action.payload.filter((elem) => elem.discont_price);
        return { products: sales_products, category_title: "Discounted Items"  };


      case NOT_ALL_SALES:
        let not_all_sales_products = action.payload
        .filter((elem) => elem.discont_price).map(elem =>
        {let percentSale = elem.discont_price / elem.price * 100;
        return{...elem, percentSale: percentSale }}

        ).sort((a,b) => a.percentSale - b.percentSale)
        .slice(0, 4);
        
        return { products: not_all_sales_products };


      case  ONE_CATEGORY_PRODUCTS:
        return {category_title: action.payload.category.title, products: action.payload.data }/* can get title */

      case  SINGLE_PRODUCT:
        
        return { products: action.payload[0] }

      default:
        return state;
  }
};

export const allProductsAction = (payload) => ({ type: ALL_PRODUCTS, payload });
export const allSalesProductsAction = (payload) => ({type: ALL_SALE_PRODUCTS,payload});

export const notAllSalesProductsAction = (payload) => ({type: NOT_ALL_SALES,payload});
export const oneCategoryProductsAction = (payload) => ({type: ONE_CATEGORY_PRODUCTS,payload});

export const singleProductAction = (payload) => ({ type: SINGLE_PRODUCT, payload });








