import React, { useRef } from "react";
import s from "./MainPage.module.css";
import checkOut from "../../media/checkOut.jpg";
import Coupon from "../../components/Coupon";
import ButtonCard from "../../ui/Buttons/ButtonCard";
import CategoriesContainer from "../../components/CategoriesContainer";
import Sale from "../../components/Sale";
import LinkButtonContainer from "../../components/GreyButtonLane";
import LinkButton from "../../ui/Buttons/LinkButton";


export default function MainPage() {


const saleRef = useRef();

const handleClick = () => {
    saleRef.current?.scrollIntoView({ behavior: "smooth" });
};


return (
    <div className="wrapper">
    <div className={s.banner}> 
        <div>
       
            <div className={s.bannerTxt}> 
                <p className={s.bannerText}>Amazing Discounts on Garden Products!</p>
                <div className={s.greenBtn}>
                <ButtonCard onClick={handleClick} title="Check out" widthBtn="218" />
                </div>
                
            </div>
            </div>
        </div>
        
    <div className={s.buttonGreyContainer}>    
        <LinkButtonContainer title='Categories'/> 
        <LinkButton buttonText='All Categories'link="categories/all"/>
    </div>
        <div className={s.categoriesAllContainer}>
        <CategoriesContainer type="notAllCategories" />
        </div>

        <Coupon />

        <div className={s.buttonGreyContainer}ref={saleRef}> 
        <LinkButtonContainer title='Sale' />
        <LinkButton buttonText='All Sales'link="/allSales" />
        </div>
        <div className={s.buttonGrey}>
            <Sale type='notAllSales' />
            
        </div>
        
    </div>
     
);
}
