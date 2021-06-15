import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Star } from "../Star/Star";
import { NavLink, Route } from "react-router-dom";

export const ProductContentCard = (props) => {
  return (
    <section className="product-listing__products__card">
      <section className="product-listing__products__card--image">
        <span>HOT</span>
        <Route path='/store'>
          <img
            src={`/images/${props.image}`}
            // src={props.image}
            alt={props.productname}
          />
        </Route>
        <Route path='/accessories'>
          <img
            src={props.image}
            alt={props.productname}
          />
        </Route>
      </section>
      <section className="product-listing__products__card__details">
        <h3 className="product-listing__products__card__details--title">
          {props.productname}
        </h3>
        <section className="product-listing__products__card__details--review">
          <Star star="4" />
          <span>0 Reviews</span>
          <span className="main__product--submit">Submit a review</span>
        </section>
        <hr />
        <span className="product-listing__products__card__details--price">
          ${props.afterPrice}
          <span className="product-listing__products__card__details--price--before">
            ${props.beforePrice}
          </span>
        </span>
        <p>
          Elit officiis exercitationem temporibus perferendis atque consequatur,
          molestias tempore iusto expedita nisi natus nulla quam quia culpa amet
          eligendi? Mollitia assumenda fugit cupiditate! Quod corrupti dicta,
          iure velit voluptatem eaque. Cum, placeat at! Ratione alias hic illum
          exercitationem sint esse.
        </p>
        <footer>
          <NavLink to="/cart" id="product-listing--add-to-cart-btn">
            <button id="product-listing--add-to-cart-btn">
              <i>
                <FontAwesomeIcon icon={faShoppingCart} />
              </i>
              Add to Cart
            </button>
          </NavLink>

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
