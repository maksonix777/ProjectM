import React, { useRef } from "react";
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


export default function MainPage() {


    const saleRef = useRef();

    const handleClick = () => {
        saleRef.current?.scrollIntoView({ behavior: "smooth" });
    };


    return (
        <div >
            <div className={s.banner}>
                <div className={s.bannerTxt}>
                    <h1 className={s.bannerText}>Amazing Discounts on Garden Products!</h1>
                    <div className={s.greenBtn}>
                        <ButtonCard onClick={handleClick} title="Check out" widthBtn="218" />
                    </div>
                </div>
            </div>

            <div className={`${s.buttonGreyContainer} wrapper_All`}>
                <GreyButtonLane title='Categories' />
                <div className={s.greybtnMainPage}>
                    <LinkButton buttonText='All Categories' link="categories/all" />
                </div>

            </div>
            <div className={s.categoriesAllContainer} >
                <CategoriesContainer type="notAllCategories" />
            </div>

            <div className={s.btnLinkMob}>
                <LinkButtonMobile buttonText='All Categories' link="categories/all" />

            </div>

            <Coupon />

            <div className={`${s.buttonGreyContainer} wrapper_All`} ref={saleRef}>
                <GreyButtonLane title='Sale' />
                <div className={s.greybtnMainPage}>
                    <LinkButton buttonText='All Sales' link="/allSales" /></div>
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
