import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import categoryProduct from '../../asyncActions/categoryProduct';

import { ROOT_URL } from '../..';
import s from './CategoryProductsPage.module.css';

export default function CategoryProductsPage() {
   

  const { id } = useParams();
  const { products } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(categoryProduct(id))
  }, [id]);

  console.log(products)

/* add */
  return (

    <div>

  {products.map((elem) =>  
  ( <Link to={"/products/" + elem.id} key={elem.id}>

  <h2>{products.title}</h2>
    <div className={s.products}>
        {products.map(elem => 
            <div>
              
                <img className={s.product_image} src={ROOT_URL+elem.image}/>
                <p>{elem.title}</p>
            </div>
        )}
    </div>
    </Link>
  ))}



 </div>
  
  )}
 