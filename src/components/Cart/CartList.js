export const CartList = (props) => {
  return (
    <div className="cart-section__table-row" id="beats__dbdbdb.png">
      <div className="cart-section__table-row--product">
        <button className="cart-section__table-row--product--cancel-item-btn">
          <i className="fas fa-times"></i>
        </button>
        <img
          src={`images/${props.image}`}
          alt="Beats Solo2 On Ear Headphones"
        />
        {props.product}
      </div>
      <div className="cart-section__table-row--unit-price">
        <span className="cart-section__table-row--unit-price--label">
          Unit Price
        </span>
        {props.discountedPrice}
      </div>
      <div className="cart-section__table-row--qty">
        <button
          className="cart-section__table-row--qty--minus-btn"
          id="qty-minus-btn"
        >
          -
        </button>
        <div className="cart-section__table-row--qty--number">{props.quantity}</div>
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
  );
};
