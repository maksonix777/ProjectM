import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ROOT_URL } from '../../index';
import { fetchAllProducts } from '../../asyncActions/products';
import s from './ProductBasket.module.css';

import InputCoupon from '../../ui/InputCoupon';
import LinkButton from '../../ui/Buttons/LinkButton';

import {
    addItemAction,
    cleanItemAction,
    deleteItemAction,
} from '../../store/reducers/basketReducer';
import GreyButtonLane from '../GreyButtonLane';
import Modal from '../Modal';
 

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

    return (
        <div className={s.control}>
            <button onClick={() => handleChange(elem, false)}>-</button>
            <span className={s.itemsAmount}>{elem.count}</span>
            <button onClick={() => handleChange(elem, true)}>+</button>
        </div>
    );
}


function ProductBasket({ type }) {
    const [isModalVisible, setModalVisible] = useState(false);
    const item = useSelector((store) => store.basket);
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
    };

    function priceHandle(elem) {
        let currentPrice = 0;
        let price = 0;
        if (elem.discont_price) {
            currentPrice = '$' + elem.discont_price;
            price = '$' + elem.price;
        } else if (!elem.discont_price) {
            currentPrice = '$' + elem.price;
            price = '';
        }
        return { currentPrice, price };
    }

    const handleOrderClick = () => {setModalVisible(true);
  
      
    };
    const modalTxt = ['Your order has been successfully placed on the website.',
     'A manager will contact you shortly to confirm your order.']
    return (
        <div >
            <div className={s.buttonGreyContainer}>
                
                <GreyButtonLane title="Shopping cart"/>
                <div className={s.revButton}>
                   
                    <div className={s.greybtnMainPage}>
                    <LinkButton buttonText="Back to the store" link="/products/all" />
                </div>
                </div>
            </div>

            <div className={s.basketAllContent}>
                <div className={s.productsContainer}>
                    <div className={s.productsContainerCards}>
                        {item.map((elem) => (
                            <div className={s.ProductCard} key={elem.id}>
                                <button className={s.closeBtn}
                                    onClick={() => dispatch(deleteItemAction(elem))}
                                ></button>
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
                </div>
                <div className={s.OrderDetails}>
                    <h3>Order details</h3>
                    <div className={s.OrderDetailsTxt}>
                        <p className={s.ItemsAmount}>{item.length} Item</p>
                    </div>
                    <div className={s.TotalAndPrice}>
                        <p className={s.ItemsAmount}>Total</p>
                        <h2 className={s.ItemsCostTotal}>
                            ${totalPrice().toFixed(2).replace('.', ',')}
                        </h2>
                    </div>
                    <InputCoupon onClick={handleOrderClick} type="order"  />
                    <button className={s.orderBtn} onClick={handleOrderClick} >
                        Order
                    </button>
                </div>
            </div>   

            {isModalVisible && (
                <Modal modalTxt={modalTxt} onClose={() => { setModalVisible(false);dispatch(cleanItemAction()) } }>
                    <div className={s.modalTxt}>
                        <p className={s.congratulations}>Congratulations!</p>
                        <p>Your order has been successfully placed on the website.</p>
                        <p>A manager will contact you shortly to confirm your order.</p>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default ProductBasket;
