import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Star } from "../Star/Star";

import "./Card.scss";
import { NavLink } from "react-router-dom";

export const Card = (props) => {
  return (
    <div
      key={props.productname}
      className={`bottom1__card ${props.hotProduct}`}
    >
      <div className="bottom1__card__flip">
        <div className="bottom1__card__inner">
          <div className="bottom1__card__front">
            <img
              src={`${process.env.PUBLIC_URL}/images/${props.image}`}
              alt={props.productname}
            />
          </div>
          <div className="bottom1__card__back">
            <section className="bottom1__card__favCart">
              <span className="bottom1__card__add-to-cart">
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <NavLink className="bottom1__card__add-to-cart" to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
              </NavLink>
            </section>
          </div>
        </div>
      </div>
      <h3 className="bottom1__card__title">
        {props.productname}
        <span>{props.minidesc}</span>
      </h3>
      <Star star={props.star} />
      <footer className="bottom1__card__footer">
        <span className="bottom1__card__price">${props.afterPrice}</span>
        <span className="bottom1__card__price bottom1__card__price--before">
          ${props.beforePrice}
        </span>
      </footer>
    </div>
  );
};
