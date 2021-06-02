import './Nav.scss';
export const Nav = () => {
   return (
      <nav className="header__main-nav header__mobile">
      <section className="header__nav">
          <button type="button" className="header__main-nav--toggle">
              <i className="fas fa-bars"></i>
          </button>

          <div className="header--brand header__mobile--logo">
              <h1><a href="index.html">RAKU<span>TECH</span></a></h1>
          </div>

          <div className="header__top--cart header__mobile--cart">
              <a href="cart.html" className="">
                  <i className="fas fa-shopping-basket"></i>
                  <span className="header__top--cart header__mobile--cart--badge"></span>  
              </a>
          </div>
      </section>

      <section className="header__nav-bar">
          <ul>
              <li>
                  <div className="header__main-nav__arrow-guide">
                      <i id="main-nav-arrow" className="header__main-nav__arrow-guide--arrow-up"></i>
                  </div>
                  <a href="index.html" className="header__main-nav--home active" >
                      HOME
                  </a>
                  <span className="header__main-nav--carret"><i className="fas fa-caret-down"></i></span>
                  

                  <nav className="header__mega-menu">
                      <div className="header__mega-menu__products">
                          <h5>Category</h5>
                          <ul>
                              <li>Airport & Wireless</li>
                              <li>AppleCare</li>
                              <li>Bags, Shells & Sleeves</li>
                              <li>Business & Security</li>
                              <li>Cable & Docs</li>
                              <li>Cameras & Video</li>
                              <li>Car & Travel</li>
                              <li>Cases & Films</li>
                          </ul>
                      </div>
                      <div className="header__mega-menu__accessories-1">
                          <h5>Category</h5>
                          <ul>
                              <li>Charging Devices</li>
                              <li>Connected Home</li>
                              <li>Device Care</li>
                              <li>Display & Graphic</li>
                              <li>Fitness & Sport</li>
                              <li>Headphones</li>
                              <li>HealthKit</li>
                          </ul>
                      </div>
                      <div className="header__mega-menu__accessories-2">
                          <h5>Category</h5>
                          <ul>
                              <li>Mice & Keyboards</li>
                              <li>Music Creation</li>
                              <li>Networking & Server</li>
                          </ul>
                      </div>
                  </nav>
              </li>
              <li><a href="product-list.html" className="header__main-nav--store" >STORE</a></li>
              <li><a href="product-list.html" className="header__main-nav--iphone" >IPHONE</a></li>
              <li><a href="product-list.html" className="header__main-nav--ipad" >IPAD</a></li>
              <li><a href="product-list.html" className="header__main-nav--macbook" >MACBOOK</a></li>
              <li><a href="product.html" className="header__main-nav--accessories" >ACCESSORIES</a></li>
          </ul>
      </section>
  </nav>
   )
}
