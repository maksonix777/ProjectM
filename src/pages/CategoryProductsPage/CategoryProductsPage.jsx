import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import categoryProduct from '../../asyncActions/categoryProduct';
import { titleCategoryAction } from '../../store/reducers/categoriesReducer';
import { ROOT_URL } from '../..';
import s from './CategoryProductsPage';

export default function CategoryProductsPage() {
   

  const { id } = useParams();
  const { category, products } = useSelector((store) => store.categories);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(categoryProduct(id))
  }, [id]);

  console.log( category, products , id)


  return (

    <div>
    {/* <h2>{category}</h2>
    <div className={s.products}>
        {products?.map(elem => 
            <div>
                <img className={s.product_image} src={ROOT_URL+elem.image}/>
                <p>{elem.title}</p>
            </div>
        )}
    </div> */}
  </div>
  )
}
 