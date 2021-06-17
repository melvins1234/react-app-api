import { useSelector } from "react-redux";

import "./Cart.scss";
import {CartList} from './CartList'

export const Cart = () => {
  const products = useSelector((state) => state.cart);
  let totalPrice = useSelector((state) => state.totalPrice);

  let cartList = products.map((e) => {
    return(<CartList
      key={JSON.stringify(e)}
      id={e.id}
      image={e.image}
      product={e.product}
      price={e.price}
      discountedPrice={e.discountedPrice}
      stars={e.stars}
      hotProduct={e.hotProduct}
      quantity={e.quantity}
    />)
  })

  return (
    <section className="cart-section wrapper">
      <div className="cart-section__table-header">
        <div className="cart-section__table-header--product">PRODUCT</div>
        <div className="cart-section__table-header--unit-price">UNIT PRICE</div>
        <div className="cart-section__table-header--qty">QTY</div>
        <div className="cart-section__table-header--price">PRICE</div>
      </div>
      <div className="cart-section__product-list">
        {cartList}
      </div>

      <div className="cart-section__bottom">
        <div className="cart-section__bottom__voucher">
          <input type="text" defaultValue="Voucher code" />
          <button className="cart-section__bottom__voucher--redeem-btn">
            Redeem
          </button>
        </div>
        <div className="cart-section__bottom__total-table">
          <div className="cart-section__bottom__total-table--subtotal">
            <span>Subtotal</span>
            <span id="cart-section__subtotal">$ {totalPrice}</span>
          </div>
          <div className="cart-section__bottom__total-table--shipping-fee">
            <span>Shipping fee</span>
            <span id="cart-section__shipping">$ 20.00</span>
          </div>
          <div className="cart-section__bottom__total-table--coupon">
            <span>Coupon</span>
            <span>No</span>
          </div>
          <div className="cart-section__bottom__total-table--total">
            <span>Total</span>
            <span id="cart-section__total">$ {(parseFloat(totalPrice) + 20).toFixed(2)}</span>
          </div>
          <div className="cart-section__bottom__total-table--check-out">
            <button className="cart-section__bottom__total-table--check-out--btn">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
