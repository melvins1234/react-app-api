import { NavLink } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faShoppingBasket, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

export const HeaderTop = () => {
    let state = useSelector((state) => state.itemsInCart);
    return(
        <section className="header__top">
            <span>EN&nbsp; <FontAwesomeIcon icon={ faCaretDown } /></span>
            <span>USD&nbsp; <FontAwesomeIcon icon={ faCaretDown } /> </span>
            <div className="header__top--user-profile">
                <NavLink to='/login' activeClassName='active'><FontAwesomeIcon icon={ faUser } /> Log in</NavLink>
            </div>
            <div className="header__top--cart">
            <FontAwesomeIcon icon={ faShoppingBasket } />
                <NavLink to='/cart'>
                    <span className="header__top--cart-items">{(state)} Items</span>
                    <span className="header__top--cart-price">$0.00</span>
                </NavLink>
            </div>
            <div className="header__top--search-icon"><i className="fas fa-search"><FontAwesomeIcon icon = {faSearch}></FontAwesomeIcon></i></div>
        </section>
    );
}