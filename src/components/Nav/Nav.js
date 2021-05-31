
const Nav = () => {
   return (
    <section className="header__top">
        <span>EN&nbsp; <i className="fas fa-caret-down"></i></span>
        <span>USD&nbsp; <i className="fas fa-caret-down"></i> </span>
        <div className="header__top--user-profile"><a href="login-page.html"><i className="far fa-user"></i> Log-in</a></div>
        <div className="header__top--cart">
            <a href="#" className="">
                <i className="fas fa-shopping-basket"></i> 
                <span className="header__top--cart-items">0 Items</span>
                <span className="header__top--cart-price">$0.00</span>
            </a>
        </div>
        <div className="header__top--search-icon"><i className="fas fa-search"></i></div>
    </section>
   )
}

export default Nav;