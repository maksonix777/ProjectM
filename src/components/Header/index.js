import React from 'react'
import { Link } from 'react-router-dom'
import s from './Header.module.css';  
import logo from '../../media/logo.png'
import basket from '../../media/basket.png'
import Basket from '../Basket';
import { useSelector } from 'react-redux';




export default function Header() {
  const item = useSelector((store) => store.basket);
  const count = item.reduce((acc, item) => acc + item.count, 0);
  
  return (
    
    <div > 
        <div className={s.line}></div>
        <header className="wrapper">
        <div> <img src={logo} alt= "img" /> </div>
        <div className={s.navbar}>
            <Link to={'/'}> Main Page </Link>
            <Link to={'/categories/all'}> Categories </Link>
            <Link to={'/products/all'}> All products </Link>
            <Link to={'/allSales'}> All sales </Link>
            {/* <a href="#mainPage">Main Page</a>
            <a href="#categories">Categories</a>
            <a href="#allProducts">All products</a>
            <a href="#allSales">All sales</a> */}
        </div>
        <Basket/>
        {/* <div className={s.basketItem}>
             
                <img src={basket} alt="Basket"/>
            
        </div> */}
       
    </header>
    </div>



   
  )
}
