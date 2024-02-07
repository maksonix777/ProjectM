import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ROOT_URL } from "../../index";
import { fetchAllProducts } from "../../asyncActions/products";
import s from "./ProductBasket.module.css";
import ButtonCard from "../../ui/Buttons/ButtonCard";
import InputCoupon from "../../ui/InputCoupon";
// import { selectTotalCost } from "./SelectTotalCost";
import LinkButton from "../../ui/Buttons/LinkButton";
import LinkButtonContainer from "../../components/LinkButtonContainer";
import {
    addItemAction,
    deleteItemAction,
} from "../../store/reducers/basketReducer";

function CounterShop({ elem }) {
    const dispatch = useDispatch();
    const handleChange = (elem, isIncr) => {
        if (isIncr) {
            dispatch(addItemAction({ ...elem, count: 1 }));
        } else {
            if (elem.count > 1) {
                dispatch(addItemAction({ ...elem, count: -1 }));
            }
        }
    };

    // const handleDecrement = (elem) => { if (elem.count > 0) {elem.count - 1;}};

    console.log(elem);
    return (
        <div className={s.control}>
            <button onClick={() => handleChange(elem, false)}>-</button>
            <span>{elem.count}</span>
            <button onClick={() => handleChange(elem, true)}>+</button>
        </div>
    );
}

function ProductBasket({ type }) {
    const item = useSelector((store) => store.basket.items);
    const { id } = useParams();
    const dispatch = useDispatch();

    const totalPrice = () => {
        return item.reduce((acc, elem) => {
            if (elem.discont_price) {
                acc += elem.discont_price * elem.count;
            } else {
                acc += elem.price * elem.count;
            }
            return acc;
        }, 0);
    }

    function priceHandle(elem) {
        let currentPrice = 0;
        let price = 0;
        if (elem.discont_price) {
            currentPrice = "$" + elem.discont_price;
            price = "$" + elem.price;
        } else if (!elem.discont_price) {
            currentPrice = "$" + elem.price;
            price = "";
        }
        return { currentPrice, price };
    }
    return (
        <div className="wrapper">
            <div className={s.buttonGreyContainer}>
                <LinkButtonContainer title="Shopping cart" />
                <LinkButton buttonText="Back to the store" link="/products/all" />
            </div> <div className={s.basketAllContent}>
                <h2 className={s.productsAllTitle}>Basket Product</h2>
                <div className={s.productsContainer}>
                    {item.map((elem) => (
                        <div className={s.ProductCard} key={elem.id}>
                            <button
                                className={s.closeBtn}
                                onClick={() => dispatch(deleteItemAction(elem))}>
                                X
                            </button>
                            <div className={s.imgContainer}>
                                <img
                                    className={s.productsImg}
                                    src={ROOT_URL + elem.image}
                                    alt={elem.title}
                                />
                            </div>
                            <div className={s.productTxtAll}>
                                <p className={s.productTitle}>{elem.title}</p>
                                <div className={s.controlAll}>
                                    <CounterShop elem={elem} />
                                    <div className={s.allPrice}>
                                        <div className={s.productPrices}>
                                            <p className={s.productPrice}>
                                                {priceHandle(elem).currentPrice}
                                            </p>
                                            {elem.discont_price && (
                                                <p className={s.discount_price}>
                                                    {priceHandle(elem).price}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={s.OrderDetails}>
                    <h3>Order details</h3>
                    <div className={s.OrderDetailsTxt}>
                        <p className={s.ItemsAmount}>{item.length} Item</p>
                        <div className={s.TotalandPrice}>
                            <p className={s.ItemsAmount}>Total</p>
                            <h2 className={s.ItemsCostTotal}>${totalPrice()}</h2>
                        </div>
                    </div>

                    <InputCoupon type="order" />
                </div>
            </div>
        </div>
    );
}

export default ProductBasket;
