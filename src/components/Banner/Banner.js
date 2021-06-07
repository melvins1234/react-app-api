import { NavLink } from "react-router-dom"
import './Banner.scss';

export const Banner = () => {
    return (
        <section id="banner" className="banner">
        <section className="wrapper banner__wrapper--flex">
            <section className="banner__content">
                <h2 className="banner__product">iPhone X</h2>
                <p className="banner__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                <NavLink to='/product' className="banner__button">More</NavLink>
            </section>

            <img className="banner__image" src={`${process.env.PUBLIC_URL}/images/iphone-banner.png`} alt="iphone" />
            <i className="fas banner__icon banner__icon--left fa-chevron-left"></i>
            <i className="fas banner__icon banner__icon--right fa-chevron-right"></i>
        </section>
    </section>
    )
}
