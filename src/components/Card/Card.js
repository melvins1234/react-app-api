import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import {Star} from '../Star/Star'

import "./Card.scss";

export const Card = (props) => {
  return (
    <div key={props.productname} className="bottom1__card bottom1__card--hot">
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
              <a className="bottom1__card__add-to-cart" href="index.html">
                <FontAwesomeIcon icon={faHeart} />
              </a>
              <a className="bottom1__card__add-to-cart" href="index.html">
                <FontAwesomeIcon icon={faShoppingCart} />
              </a>
            </section>
          </div>
        </div>
      </div>
      <h3 className="bottom1__card__title">{props.productname}</h3>
      <Star star={props.star}/>
      <footer className="bottom1__card__footer">
        <span className="bottom1__card__price">${props.price}</span>
        <span className="bottom1__card__price bottom1__card__price--before">
          ${parseInt(props.price) + 100}
        </span>
      </footer>
    </div>
  );
};
