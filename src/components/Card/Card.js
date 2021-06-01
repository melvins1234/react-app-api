import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Card.scss';

const Card = (props) => {
    let stars = [],
        productCards = [],
        keyIndex = 0;

    props.productlist.forEach(e => {
        for (let index = 0; index < 5; index++) {
            if(index <= e.stars)
                stars.push(<i key={index} className="bottom1__card__star"><FontAwesomeIcon icon={ faStar } /></i>);
            else
                stars.push(<i key={index} className="bottom1__card__star bottom1__card__star--disable"><FontAwesomeIcon icon={ faStar } /></i>);
        }

        productCards.push(
            <div key={keyIndex} className="bottom1__card bottom1__card--hot">
                <div className="bottom1__card__flip">
                    <div className="bottom1__card__inner">
                        <div className="bottom1__card__front">
                        <img src = {`${process.env.PUBLIC_URL}/images/${e.image}`} />
                        </div>
                        <div className="bottom1__card__back">
                            <section className="bottom1__card__favCart">
                                <a className="bottom1__card__add-to-cart" href="#"><FontAwesomeIcon icon={ faHeart } /></a>
                                <a className="bottom1__card__add-to-cart" href="#"><FontAwesomeIcon icon={ faShoppingCart } /></a>
                            </section>
                        </div>
                    </div>
                </div>
                <h3 className="bottom1__card__title">{e.productname}</h3>
                {stars}
                <footer className="bottom1__card__footer">
                    <span className="bottom1__card__price">${e.price}</span>
                    <span className="bottom1__card__price bottom1__card__price--before">${(parseInt(e.price) + 100)}</span>
                </footer>
            </div>
        )
        stars = [];
        keyIndex++;
    })

    return (
        <section className="wrapper bottom1__products">
          {productCards}
        </section>
    )
}

export default Card;