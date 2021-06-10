import { BottomHeader } from "./BottomHeader";
import { Card } from "../Card/Card";
import { NavLink } from "react-router-dom";

import "./BottomMedia.scss";

export const Bottom = () => {
  return (
    <section id="bottom1" className="bottom1">
      <section className="wrapper">
        <BottomHeader />
        <article className="bottom1__products">
          <Card
            productname={"AirPods Max"}
            afterPrice={"256"}
            beforePrice={"359"}
            image={"airpods-max-hero-select-202011.jpg"}
            star={4}
            hotProduct={'bottom1__card--hot'}
          />
          <Card
            productname={"iPhone 11"}
            afterPrice={"489"}
            beforePrice={"796"}
            image={"iphone11-red-select-2019.png"}
            hotProduct={''}
            star={5}
          />
          <Card
            productname={"Apple MacBook Pro"}
            afterPrice={"499"}
            beforePrice={"599"}
            image={"macbook-pro.png"}
            hotProduct={''}
            star={3}
          />
          <Card
            productname={"Magic Keyboard for iPad Pro 11-inch"}
            afterPrice={"299"}
            beforePrice={"359"}
            image={"MJQJ3_AV3.png"}
            hotProduct={''}
            star={4}
          />
          <Card
            productname={"iPad (8th Generation)"}
            afterPrice={"899"}
            beforePrice={"1099"}
            image={"ipad-2020-hero-landing.jpg"}
            hotProduct={''}
            star={5}
          />
          <Card
            productname={"Apple Watch"}
            minidesc = {'(Silver Aluminum Case with White Sport Band)'}
            afterPrice={"399"}
            beforePrice={"499"}
            image={"alu-silver-sport-white-s3-2up_gps_varend.png"}
            hotProduct={''}
            star={4}
          />
          <Card
            productname={"Apple MacBook Air"}
            afterPrice={"415"}
            beforePrice={"529"}
            image={"macbook-air-space-gray-config-201810.jpg"}
            hotProduct={''}
            star={5}
          />
          <Card
            productname={"Air Pods Pro"}
            afterPrice={"459"}
            beforePrice={"599"}
            image={"MWP22.png"}
            hotProduct={''}
            star={4}
          />
        </article>
        <NavLink to="/product" className="bottom1__button">
          Load More
        </NavLink>
      </section>
    </section>
  );
};

export const BottomProduct = () => {
  return (
    <section id="bottom1" className="bottom1">
      <section className="wrapper">
        <header className="bottom1__header">
          <h2>Related Products</h2>
        </header>

        <article className="bottom1__products bottom1__products--margin">
          <Card
            productname={"Apple MacBook Pro"}
            afterPrice={"459"}
            beforePrice={"599"}
            image={"macbook-pro.png"}
            star={4}
          />
          <Card
            productname={"Apple MacBook Pro"}
            afterPrice={"459"}
            beforePrice={"599"}
            image={"macbook-pro.png"}
            star={5}
          />
          <Card
            productname={"Apple MacBook Pro"}
            afterPrice={"459"}
            beforePrice={"599"}
            image={"macbook-pro.png"}
            star={3}
          />
          <Card
            productname={"Apple MacBook Pro"}
            afterPrice={"459"}
            beforePrice={"599"}
            image={"macbook-pro.png"}
            star={5}
          />
        </article>
      </section>
    </section>
  );
};
