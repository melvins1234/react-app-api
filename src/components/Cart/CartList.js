import { useDispatch } from "react-redux";

import { toCart, toCartMinus } from "../../store/action/toCart-action";
import { itemsTotalInCart } from "../../store/action/itemsTotalInCart";

export const CartList = (props) => {
  let dispatch = useDispatch();

  const addClickHandler = (e) => {
    let quantity = (e.target.previousElementSibling.innerText =
      parseInt(e.target.previousElementSibling.innerText) + 1);

      console.log(e.target.previousElementSibling.innerText);

    e.target.parentElement.nextElementSibling.querySelector(
      ".cart-section__table-row--price--label-price"
    ).innerText = parseFloat(props.discountedPrice) * quantity;

    dispatch(toCart({ ...props, quantity: 1 }));
    dispatch(itemsTotalInCart());
  };

  const deductClickHandler = (e) => {
    let quantity = (e.target.nextElementSibling.innerText =
      parseInt(e.target.nextElementSibling.innerText) - 1);
      e.target.parentElement.nextElementSibling.querySelector(
        ".cart-section__table-row--price--label-price"
      ).innerText = parseFloat(props.discountedPrice) * quantity;
    dispatch(toCartMinus(props))
    dispatch(itemsTotalInCart());
  }

  const addDefaultSrc = (e)=> {
    e.target.src = props.image
  }

  return (
    <div className="cart-section__table-row" id="beats__dbdbdb.png">
      <div className="cart-section__table-row--product">
        <button className="cart-section__table-row--product--cancel-item-btn">
          <i className="fas fa-times"></i>
        </button>
        <img
        onError={(e) => addDefaultSrc(e)}
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
        onClick={(e)=> {
          deductClickHandler(e)
        }}
          className="cart-section__table-row--qty--minus-btn"
          id="qty-minus-btn"
        >
          -
        </button>
        <div className="cart-section__table-row--qty--number">
          {props.quantity}
        </div>
        <button
          onClick={(e) => {
            addClickHandler(e);
          }}
          className="cart-section__table-row--qty--plus-btn"
          id="qty-plus-btn"
        >
          +
        </button>
      </div>
      <div className="cart-section__table-row--price">
        <span className="cart-section__table-row--price--label">Price</span>
        <span className="cart-section__table-row--price--label-price">
          ${parseFloat(props.discountedPrice) * props.quantity}
        </span>
      </div>
    </div>
  );
};
