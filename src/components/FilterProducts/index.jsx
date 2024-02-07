import React from "react";
import s from "./FilterProducts.module.css";

export default function FilterProducts() {
  return (
    <div className={s.sortAllContainer}>
      <div className={s.price_filter}>
        <label>Price</label>
        <input type="text" placeholder="from" />
        <input type="text" placeholder="to" />
      </div>

      <div className={s.discount_filter}>
        <label>Discounted items</label>
        <input type="checkbox" />
      </div>

      <div className={s.sorted_filter}>
        <label for="dropdown">Select a fruit:</label>
        <select id="dropdown" name="fruit">
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
          <option value="grape">Grape</option>
        </select>
      </div>
    </div>
  );
}
