import React, { useEffect, useRef, useState } from "react";
import s from "./MainPage.module.css";
import checkOut from "../../media/checkOut.jpg";
import Coupon from "../../components/Coupon";
import ButtonCard from "../../ui/Buttons/ButtonCard";
import CategoriesContainer from "../../components/CategoriesContainer";
import Sale from "../../components/Sale";
import LinkButtonContainer from "../../components/GreyButtonLane";
import LinkButton from "../../ui/Buttons/LinkButton";
import CloseButton from "../../components/CloseButton";
import GreyButtonLane from "../../components/GreyButtonLane";
import LinkButtonMobile from "../../ui/Mobile/LinkButtonMobile";
import subtract from "../../media/substract.png"

export default function MainPage() {






    const saleRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        saleRef.current?.scrollIntoView({ behavior: "smooth" });
    };


    function scrollToTop() {
        window.scrollTo({
            top: 100,
            behavior: 'smooth' // You can use 'auto' instead of 'smooth' for an instant scroll
        });
    };

    return (
        <div >
            <div className={s.btn_top} onClick={scrollToTop}>
                <span className={s.unicode}> &#8963;</span>
            </div>
            <div className={s.banner}>
                <div className={`${s.bannerTxt} wrapper_All `}>
                    <h1 className={s.bannerText}>Amazing Discounts on Garden Products!</h1>
                    <div className={s.greenBtn}>
                        <ButtonCard onClick={handleClick} title="Check out" widthBtn="218" />
                    </div>
                </div>
            </div>


            <div className="wrapper_All">
                <div className={s.buttonGreyContainer}>
                    <GreyButtonLane title='Categories' />
                    <div className={s.greybtnMainPage}>
                        <LinkButton buttonText='All Categories' link="categories/all" />
                    </div>
                </div>

            </div>
            <div className={s.categoriesAllContainer} >
                <CategoriesContainer type="notAllCategories" />
            </div>

            <div className={s.btnLinkMob}>
                <LinkButtonMobile buttonText='All Categories' link="categories/all" />

            </div>

            <Coupon />

            <div className="wrapper_All">
                <div className={`${s.buttonGreyContainer} wrapper_All`} ref={saleRef}>
                    <GreyButtonLane title='Sale' />
                    <div className={s.greybtnMainPage}>
                        <LinkButton buttonText='All Sales' link="/allSales" /></div>
                </div>
            </div>
            <CloseButton />
            <div className={s.buttonGrey}>
                <Sale type='notAllSales' />
            </div>
            <div className={s.btnLinkMob}>
                <LinkButtonMobile buttonText='All Sales' link="/allSales" />
            </div>
        </div>

    );
}
