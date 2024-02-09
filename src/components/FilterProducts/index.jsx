import React from "react";
import s from "./FilterProducts.module.css";

export default function FilterProducts() {
  return (
    <form className={s.sortAllContainer}>

      <div className={s.price_filter}>
        <label>Price</label>
          <input type="text" placeholder="from" />
          <input type="text" placeholder="to" />
        </div>

      <div className={s.discount_filter}>
        <label>Discounted items</label>
        <input className={s.check_Box} type='checkbox' />
      </div>

      <div className={s.sorted_filter}>
        <label for="dropdown">Sorted</label>
        <select id="dropdown" name="fruit" className={s.select_drop_down}>
          <option className={s.drop_down_option} value="apple">by default</option>
          <option className={s.drop_down_option} value="banana">newest</option>
          <option className={s.drop_down_option} value="orange">price:high-low</option>
          <option className={s.drop_down_option} value="grape">price:low-high</option>
        </select>
      </div>
    </form>
  );
}
