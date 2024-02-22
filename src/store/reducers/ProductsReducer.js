const defaultState = { /* обект */
  category_title: "",
  products: [ ],
  from: 0,
  to: Infinity,
  isSale: false,
  sortBy: 'default'
};

const ALL_PRODUCTS = "ALL_PRODUCTS";
const ALL_SALE_PRODUCTS = "ALL_SALE_PRODUCTS";
const NOT_ALL_SALES = "NOT_ALL_SALES";
const ONE_CATEGORY_PRODUCTS = "ONE_CATEGORY_PRODUCTS";
const SINGLE_PRODUCT = "SINGLE_PRODUCT";

const FILTER_ALL = 'FILTER_ALL';
const FILTER_BY_DEFAULT = 'FILTER_BY_DEFAULT';
const FILTER_BY_NEWEST = 'FILTER_BY_NEWEST';
const FILTER_HIGH_LOW = 'FILTER_HIGH_LOW';
const FILTER_LOW_HIGH = 'FILTER_LOW_HIGH';


function getDefaultState(arr) {/* дополн своиства в кашдии продукт[ ] */
    return  arr.map(el => ({...el, isShowFrom: true, isShowTo: true, isShowSale: true, count: 1}))                     
            
    }

    function getFilterFrom(el, from) {
   
      if(el.discont_price && el.discont_price > from){        
          return {...el, isShowFrom: true }
      } 
       if(!el.discont_price && el.price > from){
          return {...el, isShowFrom: true }
      } else return {...el, isShowFrom: false }
      
  }
  
  function getFilterTo(el, to) {
      if(el.discont_price && el.discont_price < to){
          return {...el, isShowTo: true }
      } else if(!el.discont_price && el.price < to){
          return {...el, isShowTo: true }
      } else return {...el, isShowTo: false }
  }
  
  function getSale(el, isSale) {
      // Show only discounted items ?
      
      if(isSale) {
          if(el.discont_price){
              return {...el, isShowSale: true }
          } else {
              return {...el, isShowSale: false}
          }
      } else {        
              return {...el, isShowSale: true }        
      }
  }




export const productsReducer = (state = defaultState, action) => {

  switch (action.type) {
      case ALL_PRODUCTS:
        console.log(action.payload);
        return { ...state, products: getDefaultState(action.payload), category_title: "All Products" };



      case ALL_SALE_PRODUCTS:
        let sales_products = getDefaultState(action.payload).filter((elem) => elem.discont_price);
        return { ...state, products: sales_products, category_title: "Discounted Items"  };


      case NOT_ALL_SALES:
        let not_all_sales_products = getDefaultState(action.payload).filter((elem) => elem.discont_price).map(elem =>
        {let percentSale = elem.discont_price / elem.price * 100;
        return{...elem, percentSale: percentSale }}

        ).sort((a,b) => a.percentSale - b.percentSale)
        .slice(0, 4);

        return { products: not_all_sales_products };


      case  ONE_CATEGORY_PRODUCTS:
        return {...state,
          category_title: action.payload.category.title, products:getDefaultState(action.payload.data) }/* can get title */

      case  SINGLE_PRODUCT:
        return { products: action.payload[0] } 

/*      */
case FILTER_ALL:
 
  if(action.payload.from >=0){
      let filterAll = action.payload.products.map(el => {
          el = getFilterFrom(el, action.payload.from);
          el = getFilterTo(el, action.payload.to);
          el = getSale(el, action.payload.isSale);
          return el;
      });
  return {...action.payload, products: filterAll };
  }
  case FILTER_BY_DEFAULT:
   const filterDefault = action.payload.products.sort((a, b) => a.id - b.id);
  return { ...action.payload, products: filterDefault };
 case FILTER_BY_NEWEST:
  const filterNewest = action.payload.products.sort((a, b) => b.updatedAt - a.updatedAt);
  return { ...action.payload, products: filterNewest };
 case FILTER_HIGH_LOW:
  const filterHighLow = action.payload.products.map(el => ({...el, curent_price: el.discont_price ?  el.discont_price : el.price}) ).sort((a, b) => b.curent_price - a.curent_price);
  return { ...action.payload, products: filterHighLow };
 case FILTER_LOW_HIGH:
  const filterLowHigh = action.payload.products.map(el => ({...el, curent_price: el.discont_price ?  el.discont_price : el.price}) ).sort((a, b) => a.curent_price - b.curent_price);
  return { ...action.payload, products: filterLowHigh };

    default:
        return state;
  }
};

export const allProductsAction = (payload) => ({ type: ALL_PRODUCTS, payload });
export const allSalesProductsAction = (payload) => ({type: ALL_SALE_PRODUCTS,payload});
export const notAllSalesProductsAction = (payload) => ({type: NOT_ALL_SALES,payload});

export const oneCategoryProductsAction = (payload) => ({type: ONE_CATEGORY_PRODUCTS,payload});
export const singleProductAction = (payload) => ({ type: SINGLE_PRODUCT, payload });
export const filterAllAction = (payload) => ({ type: FILTER_ALL, payload });


export const filterByDefaultAction = (payload) => ({ type: FILTER_BY_DEFAULT, payload });
export const filterNewestAction = (payload) => ({ type: FILTER_BY_NEWEST, payload });
export const filterHighLowAction = (payload) => ({ type: FILTER_HIGH_LOW, payload });
export const filterLowHighAction = (payload) => ({ type: FILTER_LOW_HIGH, payload });








