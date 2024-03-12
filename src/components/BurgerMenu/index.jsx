import React, { useState } from "react";
import s from "./BurgerMenu.module.css";
import { Link } from "react-router-dom";
import CloseButton from "../CloseButton";

export default function BurgerMenu() {
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <div>

            <div className={s.menuAndBtn}>
                <div onClick={() => setOpenMenu(!openMenu)} className={s.burger}>
                    <div className={s.burgerLine}></div>
                    <div className={s.burgerLine}></div>
                    <div className={s.burgerLine}></div>
                </div>

                <div className={openMenu ? s.greyBG : ""}>
                    <div className={openMenu ? s.openNavBar : s.navbar}>

                            <div className={s.closeBtnNavBar}>
                            <button className={s.closeBtn} onClick={() => setOpenMenu(!openMenu)}>
                            </button>
                            </div>
                        <Link onClick={() => setOpenMenu(!openMenu)} to={'/'}> Main Page </Link>
                        <Link onClick={() => setOpenMenu(!openMenu)} to={'/categories/all'}> Categories </Link>
                        <Link onClick={() => setOpenMenu(!openMenu)} to={'/products/all'}> All products </Link>
                        <Link onClick={() => setOpenMenu(!openMenu)} to={'/allSales'}> All sales </Link>

                </div>
                </div>
            </div>
        </div>
    );
}
