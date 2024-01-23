import React from 'react'
import { Link } from 'react-router-dom'
import s from './Header.module.css';  
import logo from '../../ui/logo.png'
import basket from '../../ui/basket.png'


export default function Header() {
  return (
    <div className="wrapper"> 
      <header>
       <div> <img src={logo} alt= "img" /> </div>
        <div className={s.navbar}>
            <Link to={'/MainPage'}> Main Page </Link>
            <Link to={'/Categories'}> Categories </Link>
            <Link to={'/allProducts'}> All products </Link>
            <Link to={'/allSales'}> Products </Link>
            {/* <a href="#mainPage">Main Page</a>
            <a href="#categories">Categories</a>
            <a href="#allProducts">All products</a>
            <a href="#allSales">All sales</a> */}
        </div>
        <div className={s.basketItem}>
            <a href="#basket" class="basket-link">
                <img src={basket} alt="Basket"/>
            </a>
        </div>
        <div className={s.line}></div>
    </header>
    </div>



   
  )
}
