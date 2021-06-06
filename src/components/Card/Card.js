import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "./Card.scss";

const Card = (props) => {
  let stars = [];

  for (let index = 1; index <= 5; index++) {
      if(index <= props.star)
        stars.push(<i key={index} className="bottom1__card__star"><FontAwesomeIcon icon={ faStar } /></i>);
      else
          stars.push(<i key={index} className="bottom1__card__star bottom1__card__star--disable"><FontAwesomeIcon icon={ faStar } /></i>);
  }

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
      {stars}
      <footer className="bottom1__card__footer">
        <span className="bottom1__card__price">${props.price}</span>
        <span className="bottom1__card__price bottom1__card__price--before">
          ${parseInt(props.price) + 100}
        </span>
      </footer>
    </div>
  );
};

export default Card;
