import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export const HeaderTop = () => {
    return(
        <section className="header__top">
            <span>EN&nbsp; <FontAwesomeIcon icon={ faCaretDown } /></span>
            <span>USD&nbsp; <FontAwesomeIcon icon={ faCaretDown } /> </span>
            <div className="header__top--user-profile"><a href="login-page.html"><FontAwesomeIcon icon={ faUser } />Log-in</a></div>
            <div className="header__top--cart">
                <a href="#" className="">
                    <span className="header__top--cart-items">0 Items</span>
                    <span className="header__top--cart-price">$0.00</span>
                </a>
            </div>
            <div className="header__top--search-icon"><i className="fas fa-search"></i></div>
        </section>
    );
}