import productImage from '../../images/macbook-pro.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Card = (image) => {
    // let imageName = require('../images/macbook-pro.png');
    console.log(productImage)
    return (
        <div className="bottom1__card bottom1__card--hot">
        <div className="bottom1__card__flip">
            <div className="bottom1__card__inner">
                <div className="bottom1__card__front">
                    <img src={productImage} />
                </div>
                <div className="bottom1__card__back">
                    <section className="bottom1__card__favCart">
                        <a className="bottom1__card__add-to-cart" href="#"></a>
                        <a className="bottom1__card__add-to-cart" href="product.html"></a>
                    </section>
                </div>
            </div>
        </div>
        <h3 className="bottom1__card__title">Apple Macbook Pro</h3>
        <i className="bottom1__card__star"><FontAwesomeIcon icon={ faStar } /></i>
        <i className="bottom1__card__star"><FontAwesomeIcon icon={ faStar } /></i>
        <i className="bottom1__card__star"><FontAwesomeIcon icon={ faStar } /></i>
        <i className="bottom1__card__star"><FontAwesomeIcon icon={ faStar } /></i>
        <i className="bottom1__card__star"><FontAwesomeIcon icon={ faStar } /></i>
        <footer className="bottom1__card__footer">
            <span className="bottom1__card__price">$499</span>
            <span className="bottom1__card__price bottom1__card__price--before">$599</span>
        </footer>
    </div>
    )
}

export default Card;