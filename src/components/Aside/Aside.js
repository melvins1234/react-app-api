import { Card } from "../Card/Card";

export const Aside = () => {
  return (
    <aside className="main__best-seller">
      <h3 className="main__best-seller__title">Best Seller</h3>
      <Card
        productname={"Apple MacBook Pro"}
        price={"499"}
        image={"macbook-pro.png"}
        star={4}
      />
      <section className="main__best-seller--selector">
        <span></span>
        <span className="active"></span>
        <span></span>
        <span></span>
      </section>
      <footer className="">
        <article className="middle__article middle__article--bgcolorGray main__side--product">
          <section className="middle__content middle__content--last main__side--content">
            <h3 className="middle__title main__side--title">GoPro Hero 6</h3>
            <p className="middle__description main__side--description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span className="middle__price main__side--price">$299</span>
          </section>

          <img
            src="images/GoPro.png"
            alt="Go Pro"
            className="middle__image middle__image--gopro main__side--image"
          />
        </article>
      </footer>
    </aside>
  );
};
