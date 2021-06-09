import { BottomHeader } from "./BottomHeader";
import { Card } from "../Card/Card";
import { NavLink } from "react-router-dom";

import './BottomMedia.scss'

export const Bottom = () => {
  return (
    <section id="bottom1" className="bottom1">
      <section className="wrapper">
        <BottomHeader />
        <article className="bottom1__products">
          <Card
            productname={"Apple MacBook Pro"}
            price={"499"}
            image={"macbook-pro.png"}
            star={4}
          />
          <Card
            productname={"Beats Solo2 On Ear Headphones"}
            price={"2999"}
            image={"beats__171717.png"}
            star={5}
          />
          <Card
            productname={"H-Squared tvTray"}
            price={"199"}
            image={"H_tvTry.png"}
            star={3}
          />
          <Card
            productname={"Netatmo Rain Gauge"}
            price={"259"}
            image={"Netatmo_Rain_Gauge.png"}
            star={3}
          />
          <Card
            productname={"Apple MacBook Pro"}
            price={"499"}
            image={"macbook-pro.png"}
            star={2}
          />
          <Card
            productname={"Apple MacBook Pro"}
            price={"499"}
            image={"macbook-pro.png"}
            star={4}
          />
          <Card
            productname={"Apple MacBook Pro"}
            price={"499"}
            image={"macbook-pro.png"}
            star={2}
          />
          <Card
            productname={"Apple MacBook Pro"}
            price={"499"}
            image={"macbook-pro.png"}
            star={1}
          />
        </article>
        <NavLink to="/product" className="bottom1__button">
          Load More
        </NavLink>
      </section>
    </section>
  );
};
