import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Star } from "../Star/Star";
import { toCart } from "../../store/action/toCart-action";

import "./Card.scss";

export const Card = (props) => {
  let dispatch = useDispatch();
  const addToCartHandler = () => {
    console.log(props);
    dispatch(toCart(props));
  };

  return (
    <div key={props.product} className={`bottom1__card ${props.hotProduct}`}>
      <div className="bottom1__card__flip">
        <div className="bottom1__card__inner">
          <div className="bottom1__card__front">
            <img
              src={`${process.env.PUBLIC_URL}/images/${props.image}`}
              alt={props.product}
            />
          </div>
          <div className="bottom1__card__back">
            <section className="bottom1__card__favCart">
              <span className="bottom1__card__add-to-cart">
                <FontAwesomeIcon icon={faHeart} />
              </span>
              {/* <NavLink
                className="bottom1__card__add-to-cart"
                to={{ pathname: "/product", state: { data: props } }}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
              </NavLink> */}
              <span
                onClick={() => addToCartHandler()}
                className="bottom1__card__add-to-cart"
              >
                <FontAwesomeIcon icon={faShoppingCart} />
              </span>
            </section>
          </div>
        </div>
      </div>
      <h3 className="bottom1__card__title">
        {props.product}
        <span>{props.minidesc}</span>
      </h3>
      <Star star={props.stars} />
      <footer className="bottom1__card__footer">
        <span className="bottom1__card__price">${props.price}</span>
        <span className="bottom1__card__price bottom1__card__price--before">
          ${props.discountedPrice}
        </span>
      </footer>
    </div>
  );
};
