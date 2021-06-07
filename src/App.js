import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import { Product } from "./components/Product/Product";
import { SignIn } from "./components/SignIn/SignIn";
import { Banner } from './components/Banner/Banner'
import { Middle } from './components/Middle/Middle'

const App = () => {
  return (
    <Router>
      <div>
        <Route
          exact
          path={["/", "/product", "/store", "/iphone", "/ipad", "/macbook"]}
          component={() => [<Header />]}
        />
        <Route 
          exact
          path='/'
          component={() => [<Banner />, <Middle />]}
        />
        <section className="wrapper bottom1__products">
          <Route
            exact
            path="/"
            component={() => [
              <Card
                productname={"Apple MacBook Pro"}
                price={"499"}
                image={"macbook-pro.png"}
                star={4}
              />,
              <Card
                productname={"Beats Solo2 On Ear Headphones"}
                price={"2999"}
                image={"beats__171717.png"}
                star={5}
              />,
              <Card
                productname={"H-Squared tvTray"}
                price={"199"}
                image={"H_tvTry.png"}
                star={3}
              />,
              <Card
                productname={"Netatmo Rain Gauge"}
                price={"259"}
                image={"Netatmo_Rain_Gauge.png"}
                star={3}
              />,
              <Card
                productname={"Apple MacBook Pro"}
                price={"499"}
                image={"macbook-pro.png"}
                star={2}
              />,
              <Card
                productname={"Apple MacBook Pro"}
                price={"499"}
                image={"macbook-pro.png"}
                star={4}
              />,
              <Card
                productname={"Apple MacBook Pro"}
                price={"499"}
                image={"macbook-pro.png"}
                star={2}
              />,
              <Card
                productname={"Apple MacBook Pro"}
                price={"499"}
                image={"macbook-pro.png"}
                star={1}
              />
            ]}
          />
        </section>

        <Route exact path="/product" component={Product} />
        <Route exact path={["/login", "/signup"]} component={SignIn} />
      </div>
    </Router>
  );
};

export default App;
