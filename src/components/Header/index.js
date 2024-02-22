import React from 'react'
import { Link } from 'react-router-dom'
import s from './Header.module.css';
import logo from '../../media/logo.png'
import basket from '../../media/basket.png'
import Basket from '../Basket';
import { useSelector } from 'react-redux';
import BurgerMenu from '../BurgerMenu';




export default function Header() {
  const item = useSelector((store) => store.basket);
  const count = item.reduce((acc, item) => acc + item.count, 0);

  return (

    <div className="wrapper_All">
      <div className={s.line}></div>
      <header className="wrapper">
        <div> <Link to={'/'}> <img className={s.logo} src={logo} alt="img" loading="lazy" /></Link> </div>
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
        <div className={s.BasketBurger}>
          <Basket />
          <BurgerMenu />
        </div>
      </header>
    </div>




  )
}
