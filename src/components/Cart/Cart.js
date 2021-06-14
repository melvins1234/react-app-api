import "./Cart.scss";

import { useSelector } from "react-redux";

export const Cart = () => {
  const productImage = useSelector((state) => state.cart);
  console.log(productImage);

  return (
    <section className="cart-section wrapper">
      <div className="cart-section__table-header">
        <div className="cart-section__table-header--product">PRODUCT</div>
        <div className="cart-section__table-header--unit-price">UNIT PRICE</div>
        <div className="cart-section__table-header--qty">QTY</div>
        <div className="cart-section__table-header--price">PRICE</div>
      </div>
      <div className="cart-section__product-list">
        <div className="cart-section__table-row" id="beats__dbdbdb.png">
          <div className="cart-section__table-row--product">
            <button className="cart-section__table-row--product--cancel-item-btn">
              <i className="fas fa-times"></i>
            </button>
            <img
              src={`images/${productImage}`}
              alt="Beats Solo2 On Ear Headphones"
            />
            Beats Solo2 On Ear Headphones
          </div>
          <div className="cart-section__table-row--unit-price">
            <span className="cart-section__table-row--unit-price--label">
              Unit Price
            </span>
            2999
          </div>
          <div className="cart-section__table-row--qty">
            <button
              className="cart-section__table-row--qty--minus-btn"
              id="qty-minus-btn"
            >
              -
            </button>
            <div className="cart-section__table-row--qty--number">3</div>
            <button
              className="cart-section__table-row--qty--plus-btn"
              id="qty-plus-btn"
            >
              +
            </button>
          </div>
          <div className="cart-section__table-row--price">
            <span className="cart-section__table-row--price--label">Price</span>
            <span className="cart-section__table-row--price--label-price">
              $8997
            </span>
          </div>
        </div>
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
            <span id="cart-section__subtotal">$ 8997.00</span>
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
            <span id="cart-section__total">$ 9017.00</span>
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
