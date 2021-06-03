import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faShoppingBasket, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';

export const HeaderTop = () => {
    return(
        <section className="header__top">
            <span>EN&nbsp; <FontAwesomeIcon icon={ faCaretDown } /></span>
            <span>USD&nbsp; <FontAwesomeIcon icon={ faCaretDown } /> </span>
            <div className="header__top--user-profile">
                <NavLink to='/login' activeClassName='active'><FontAwesomeIcon icon={ faUser } /> Log in</NavLink>
            </div>
            <div className="header__top--cart">
            <FontAwesomeIcon icon={ faShoppingBasket } />
                <a href="index.html" className="">
                    <span className="header__top--cart-items">0 Items</span>
                    <span className="header__top--cart-price">$0.00</span>
                </a>
            </div>
            <div className="header__top--search-icon"><i className="fas fa-search"><FontAwesomeIcon icon = {faSearch}></FontAwesomeIcon></i></div>
        </section>
    );
}