import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header/Header";
import { Product } from "./components/Product/Product";
import { SignIn } from "./components/SignIn/SignIn";
import { Banner } from "./components/Banner/Banner";
import { Middle } from "./components/Middle/Middle";
import { Bottom, BottomProduct } from "./components/Bottom/Bottom";
import { Bottom2 } from "./components/Bottom2/Bottom2";
import { Bottom3 } from "./components/Bottom3/Bottom3";
import { Bottom4 } from "./components/Bottom4/Bottom4";
import { Footer } from "./components/Footer/Footer";
import { Breadcrumbs } from "./components/Breadcrumbs/Breadcrumbs";
import { Modal } from "./components/Modal/Modal";
const App = () => {
  
  const isModalClose = () => (!sessionStorage.getItem('isModalClose')) ? true : false;

  let [showModal, setShowModal] = useState(isModalClose());
  return (
    <Router>
      <Route
        exact
        path={["/", "/product", "/store", "/iphone", "/ipad", "/macbook"]}
        component={() => [ (showModal) ? <Modal key='modal' setShowModal={setShowModal} /> : null, <Header key="Header" />]}
      />
      <Route
        exact
        path={["/product", "/store", "/iphone", "/ipad", "/macbook"]}
        component={() => [<Breadcrumbs key="breadcrumbs" />]}
      />
      <Route
        exact
        path="/"
        component={() => [
          <Banner key="Banner" />,
          <Middle key="Middle" />,
          <Bottom key="Bottom" />,
          <Bottom2 key="Bottom2" />,
          <Bottom3 key="Bottom3" />,
          <Bottom4 key="Bottom4" />,
        ]}
      />
      <Route
        exact
        path="/product"
        component={() => [<Product key="Product" />, <BottomProduct />]}
      />
      <Route exact path={["/login", "/signup"]} component={SignIn} />
      <Route
        exact
        path={["/", "/product", "/store", "/iphone", "/ipad", "/macbook"]}
        component={() => [<Footer key="Footer" />]}
      />
    </Router>
  );
};

export default App;
