import { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import {
  ProductCategory,
  ProductPrice,
  ProductColorPicker,
} from "./ProductListAside";
import { ProductListBanner } from "./ProductListBanner";
import { ProductListContetNav } from "./ProductListContentNav";
import { ProductContentCard } from "./ProductContentCard";
import "./ProductList.scss";

export const ProductList = () => {
  const [itemsList, setItemsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      return fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => setItemsList(json))
        .then(setIsLoading(false));
    }, 2000);
  });

  let categoryNav = [
      { category: "Apple Car", stock: 2, path: "#", active: "" },
      {
        category: "Air port & wireless",
        stock: 48,
        path: "#",
        active: "active",
      },
      { category: "Cables & Docks", stock: 14, path: "#", active: "" },
      { category: "Cases & Films", stock: 15, path: "#", active: "" },
      { category: "Charging Devices", stock: 23, path: "#", active: "" },
      { category: "Connected Home", stock: 1, path: "#", active: "" },
      { category: "Headphones", stock: 95, path: "#", active: "" },
    ],
    barndNav = [
      { category: "Apple", stock: 99, path: "#", active: "" },
      { category: "LG", stock: 99, path: "#", active: "active" },
      { category: "Samsung", stock: 99, path: "#", active: "" },
      { category: "Siemens", stock: 99, path: "#", active: "" },
    ];

  return (
    <section className="product-listing wrapper">
      <aside className="product-listing__filter">
        <ProductCategory key="1" nav={categoryNav} />
        <ProductPrice key="2" />
        <ProductColorPicker key="3" />
        <ProductCategory key="5" nav={barndNav} />
      </aside>
      <section className="product-listing__products">
        <ProductListBanner />
        <ProductListContetNav />
        <Route path="/store">
          <ProductContentCard
            productname={"AirPods Max"}
            afterPrice={"256"}
            beforePrice={"359"}
            image={"airpods-max-hero-select-202011.jpg"}
            star={4}
            hotProduct={"bottom1__card--hot"}
          />
          <ProductContentCard
            productname={"iPhone 11"}
            afterPrice={"489"}
            beforePrice={"796"}
            image={"iphone11-red-select-2019.png"}
            hotProduct={""}
            star={5}
          />
          <ProductContentCard
            productname={"Apple MacBook Pro"}
            afterPrice={"499"}
            beforePrice={"599"}
            image={"macbook-pro.png"}
            hotProduct={""}
            star={3}
          />
          <ProductContentCard
            productname={"Magic Keyboard for iPad Pro 11-inch"}
            afterPrice={"299"}
            beforePrice={"359"}
            image={"MJQJ3_AV3.png"}
            hotProduct={""}
            star={4}
          />
          <ProductContentCard
            productname={"iPad (8th Generation)"}
            afterPrice={"899"}
            beforePrice={"1099"}
            image={"ipad-2020-hero-landing.jpg"}
            hotProduct={""}
            star={5}
          />
          <ProductContentCard
            productname={"Apple Watch"}
            minidesc={"(Silver Aluminum Case with White Sport Band)"}
            afterPrice={"399"}
            beforePrice={"499"}
            image={"alu-silver-sport-white-s3-2up_gps_varend.png"}
            hotProduct={""}
            star={4}
          />
          <ProductContentCard
            productname={"Apple MacBook Air"}
            afterPrice={"415"}
            beforePrice={"529"}
            image={"macbook-air-space-gray-config-201810.jpg"}
            hotProduct={""}
            star={5}
          />
          <ProductContentCard
            productname={"Air Pods Pro"}
            afterPrice={"459"}
            beforePrice={"599"}
            image={"MWP22.png"}
            hotProduct={""}
            star={4}
          />
        </Route>
        <Route path="/accessories">
          {isLoading ? (
            <span class="loadering">
              <span class="loadering-inner"></span>
            </span>
          ) : (
            itemsList.map((e, index) => {
              return (
                <ProductContentCard
                  productname={e.title}
                  afterPrice={e.price}
                  beforePrice={e.price}
                  image={e.image}
                  star={4}
                  hotProduct={"bottom1__card--hot"}
                />
              );
            })
          )}
        </Route>
      </section>
    </section>
  );
};
