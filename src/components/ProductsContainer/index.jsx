import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ROOT_URL } from "../../index";
import { fetchAllProducts } from "../../asyncActions/products";
import s from './ProductsContainer.module.css';
import ButtonCard from "../../ui/Buttons/ButtonCard";
import FilterProducts from "../FilterProducts";
import { addItemAction } from "../../store/reducers/basketReducer";
import { allProductsAction, allSalesProductsAction } from "../../store/reducers/ProductsReducer";
import categoryProduct from "../../asyncActions/categoryProduct";
import RenderCard from "../RenderCard";
/* add */
function ProductsContainer({ type }) {
  const { id } = useParams();
  const { category_title, products } = useSelector((store) => store.products);
  const { basket } = useSelector((store) => store.basket);

  const dispatch = useDispatch();
  // if (type == "categoryProduct"){
  //   const {id} = useParams();
  // } 
  console.log(products)
  useEffect(( ) => {
    if (type !== "category") {
      dispatch(fetchAllProducts(type));
    }
    if(type == "allSales"){
      
      dispatch(fetchAllProducts(type));
    }
    if(type == "allProducts"){
      
      dispatch(fetchAllProducts(type));
    }
    if(type == "categoryProducts"){

     
        dispatch(categoryProduct(id));
    }
  }, [id, type]);




  return (
    <div className="wrapper_All">

      <h2 className={s.productsAllTitle}>{category_title}</h2>
      <FilterProducts type={type} />
    {products && <RenderCard  products = {products} type = {type}/>}
    </div>
  );

}

export default ProductsContainer;



