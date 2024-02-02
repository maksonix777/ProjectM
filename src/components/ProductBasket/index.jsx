import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ROOT_URL } from "../../index";
import { fetchAllProducts } from "../../asyncActions/products";
import s from "./ProductBasket.module.css";
import ButtonCard from "../../ui/Buttons/ButtonCard";

function ProductBasket({ type }) {
  const { id } = useParams();
  const { category_title, products } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (type !== "category") {
      dispatch(fetchAllProducts(type));
    }
  }, [id, type]);

  let currentPrice = 0;
  {
    /* posle skidki */
  }
  let price = 0;

  function priceHandle(elem) {
    if (elem.discont_price) {
      currentPrice = "$" + elem.discont_price;
      price = "$" + elem.price;
    } else if (!elem.discont_price) {
      currentPrice = "$" + elem.price;
      price = "";
    }
    return currentPrice;
  }

  return (
    <div className="wrapper">
      <h2 className={s.productsAllTitle}>Basket Product</h2>
      <div className={s.productsContainer}>
        {products.slice(0, 4).map((elem) => (
          <div className={s.ProductCard} key={elem.id}>
            <div className={s.closeBtn}>X</div>
            <div className={s.imgContainer}>
              <img className={s.productsImg} src={ROOT_URL + elem.image} />
            </div>

            <div className={s.productTxtAll}>
              <p className={s.productTitle}>{elem.title}</p>
              <div className={s.controlAll}>
            <div className={s.control}>
                <button>-</button>
                <p>2</p>
                <button>+</button>
              </div>
              <div className={s.allPrice}>
                <div className={s.productPrices}>
                  <p className={s.productPrice}>{priceHandle(elem)}</p>
                  {elem.discont_price && (
                    <p className={s.discount_price}>{price}</p>
                  )}
                  {/* esli elem disc = true, togda render p */}
                </div>
              </div>
            </div>
           </div>

            
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductBasket;
