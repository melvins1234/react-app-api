import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { itemsInCart } from "../../../store/action/itemsInCart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faShoppingBasket,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export const HeaderTop = () => {
  let dispatch = useDispatch();
  dispatch(
    itemsInCart(
      JSON.parse(localStorage.getItem("cart"))
        ? JSON.parse(localStorage.getItem("cart")).length
        : 0
    )
  );

  // dispatch(itemsTotalInCart());
  let state = useSelector((state) => state.itemsInCart);
  let totalPrice = useSelector((state) => state.totalPrice);

  return (
    <section className="header__top">
      <span>
        EN&nbsp; <FontAwesomeIcon icon={faCaretDown} />
      </span>
      <span>
        USD&nbsp; <FontAwesomeIcon icon={faCaretDown} />{" "}
      </span>
      <div className="header__top--user-profile">
        <NavLink to="/login" activeClassName="active">
          <FontAwesomeIcon icon={faUser} /> Log in
        </NavLink>
      </div>
      <div className="header__top--cart">
        <FontAwesomeIcon icon={faShoppingBasket} />
        <NavLink to="/cart">
          <span className="header__top--cart-items">{state} Items</span>
          <span className="header__top--cart-price">${totalPrice}</span>
        </NavLink>
      </div>
      <div className="header__top--search-icon">
        <i className="fas fa-search">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </i>
      </div>
    </section>
  );
};
