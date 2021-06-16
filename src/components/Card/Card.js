import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { toCart } from "../../store/action/toCart-action";
import { itemsInCart } from "../../store/action/itemsInCart";
import { favProd, unFavProd } from "../../store/action/favProd";
import { itemsTotalInCart } from "../../store/action/itemsTotalInCart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import { Star } from "../Star/Star";

import "./Card.scss";

export const Card = (props) => {
  let dispatch = useDispatch();
  const [addToCart, setAddToCart] = useState(false);
  const [favoriteProd, setFavoriteProd] = useState(props.favorite);

  const addToCartAnimationHandler = (e) => {
    let shoppingCart = document.querySelector(".header__top--search-icon");
    let imgToDrag =
      e.target.offsetParent.offsetParent.previousSibling.querySelector("img");

    if (imgToDrag) {
      var imgclone = imgToDrag.cloneNode(true);
      imgclone.style.cssText =
        "top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 0.8; position: absolute; height: 150px; width: 150px; z-index: 100;";

      e.target.offsetParent.offsetParent.offsetParent.parentElement.parentElement.appendChild(
        imgclone
      );

      imgclone.animate(
        [
          {
            opacity: "0.8",
            position: "absolute",
            height: "150px",
            width: "150px",
            "z-index": "100",
          },
          {
            top: shoppingCart.offsetTop - 1000 + "px",
            left: shoppingCart.offsetLeft + 10 + "px",
            width: "75px",
            height: "75px",
          },
        ],
        {
          easing: "cubic-bezier(0.42, 0, 0.58, 1)",
          duration: 1000,
        }
      );
      imgclone.animate([{}, { width: 0, height: 0 }], 1000);
      setTimeout(function () {
        imgclone.remove();
      }, 900);
    }
  };

  const addToCartHandler = (data) => {
    setAddToCart(true);
    setTimeout(() => {
      setAddToCart(false);
    }, 2000);
    dispatch(toCart(data));
    dispatch(
      itemsInCart(
        JSON.parse(localStorage.getItem("cart"))
          ? JSON.parse(localStorage.getItem("cart")).length
          : 0
      )
    );

    dispatch(itemsTotalInCart(data.discountedPrice));
  };

  const favProdHandler = (data) => {
    !favoriteProd ? setFavoriteProd(true) : setFavoriteProd(false);

    if (!favoriteProd) dispatch(favProd(data));
    else dispatch(unFavProd(data));
  };

  return (
    <div key={props.product} className={`bottom1__card ${props.hotProduct}`}>
      <NavLink
        className="bottom1__card__back--link"
        to={{ pathname: "/product", state: { data: props } }}
      ></NavLink>
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
              <span
                onClick={() => favProdHandler(props)}
                className={`bottom1__card__add-to-cart ${
                  favoriteProd ? "fave" : ""
                }`}
              >
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <span
                onClick={(e) => {
                  addToCartAnimationHandler(e);
                  addToCartHandler(props);
                }}
                className="bottom1__card__add-to-cart"
              >
                <FontAwesomeIcon icon={addToCart ? faCheck : faShoppingCart} />
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
