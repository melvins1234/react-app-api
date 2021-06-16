import {  Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { toCart } from "../../store/action/toCart-action";
import { itemsInCart } from "../../store/action/itemsInCart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Star } from "../Star/Star";


const ProductContentCard = (props) => {

  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  const addToCartAnimationHandler = (e) => {
    let shoppingCart = document.querySelector(".header__top--search-icon");
    let imgToDrag = e.target.offsetParent.querySelector("img");

    if (imgToDrag) {
      var imgclone = imgToDrag.cloneNode(true);
      imgclone.style.cssText =
        "top: 50%; left: 0; transform: translateY(-50%); opacity: 0.8; position: absolute; height: 150px; width: 150px; z-index: 100;";

      e.target.offsetParent.appendChild(imgclone);
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

  let dispatch = useDispatch();
  const addToCartHandler = (data) => {
    dispatch(toCart(data));
    dispatch(
      itemsInCart(
        JSON.parse(localStorage.getItem("cart"))
          ? JSON.parse(localStorage.getItem("cart")).length
          : 0
      )
    );
  };

  return (
    <section className="product-listing__products__card">
      <section className="product-listing__products__card--image">
        <span>HOT</span>
        <Route path="/store">
          <img
            src={`/images/${props.image}`}
            // src={props.image}
            alt={props.product}
          />
        </Route>
        <Route path="/accessories">
          <img src={props.image} alt={props.product} />
        </Route>
      </section>
      <section className="product-listing__products__card__details">
        <h3 className="product-listing__products__card__details--title">
          {props.product}
        </h3>
        <section className="product-listing__products__card__details--review">
          <Star star="4" />
          <span>0 Reviews</span>
          <span className="main__product--submit">Submit a review</span>
        </section>
        <hr />
        <span className="product-listing__products__card__details--price">
          ${props.discountedPrice}
          <span className="product-listing__products__card__details--price--before">
            ${props.price}
          </span>
        </span>
        <p>{truncate(props.description, 150)}</p>
        <footer>
          <button
            onClick={(e) => {
              addToCartAnimationHandler(e);
              addToCartHandler(props)
            }}
            id="product-listing--add-to-cart-btn"
          >
            <i>
              <FontAwesomeIcon icon={faShoppingCart} />
            </i>
            Add to Cart
          </button>

          <button id="product-listing--like-btn">
            <i className="far fa-heart">
              <FontAwesomeIcon icon={faHeart} />
            </i>
          </button>
        </footer>
      </section>
    </section>
  );
};

export default ProductContentCard;