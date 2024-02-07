import React from 'react';


import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ROOT_URL } from "../../index";
import { fetchAllProducts } from "../../asyncActions/products";
import s from './AllSales.module.css';
import ButtonCard from "../../ui/Buttons/ButtonCard";
import Sale from '../../components/Sale';

function AllSales({ type }) {
  const { id } = useParams();
  const { category_title, products } = useSelector((store) => store.products);
  const dispatch = useDispatch(); 

  useEffect(() => {
    if (type !== "category") {
      dispatch(fetchAllProducts(type));
    }
  }, [id, type]);

  function priceHandle(elem){
    let currentPrice = 0;
    let price = 0;

    if (elem.discont_price) {
      currentPrice = '$' + elem.discont_price;
      price = '$' + elem.price;
    } else if (!elem.discont_price) {
      currentPrice = '$' + elem.price;
      price = "";
    }

    return currentPrice;
    }  

    function saleHandle(elem) {
    let sale = 0;

    if (elem.discont_price){
      sale = '-' + Math.round(100 - (elem.discont_price * 100 / elem.price)) + '%';
    } else {
        sale = '';
    }

    return sale;
    }

const saleProducts = products.filter(elem => elem.discont_price);

    return (
    <div className="wrapper">
        
        <h2 className={s.productsAllTitle}>{category_title}</h2>
        <Sale type='allSales'/>
    </div>
    );
}

export default AllSales;















