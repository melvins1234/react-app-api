import Header from '../Header/Header';
import Card from '../Card/Card';
import {Product} from '../Product/Product'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const productList = [
    {
        productname: 'Apple MacBook Pro',
        price: '499',
        image: 'macbook-pro.png',
        star: 4
    },
    {
        productname: 'Beats Solo2 On Ear Headphones',
        price: '2999',
        image: 'beats__171717.png',
        star: 5
    },
    {
        productname: 'H-Squared tvTray',
        price: '199',
        image: 'H_tvTry.png',
        star: 3
    },
    {
        productname: 'Netatmo Rain Gauge',
        price: '259',
        image: 'Netatmo_Rain_Gauge.png',
        star: 5
    },
    {
        productname: 'Apple MacBook Pro',
        price: '499',
        image: 'macbook-pro.png',
        star: 4
    },
    {
        productname: 'Apple MacBook Pro',
        price: '499',
        image: 'macbook-pro.png',
        star: 4
    },
    {
        productname: 'Apple MacBook Pro',
        price: '499',
        image: 'macbook-pro.png',
        star: 4
    },
    {
        productname: 'Apple MacBook Pro',
        price: '499',
        image: 'macbook-pro.png',
        star: 4
    },
]
const Home = () => {
    return (
       <Router>
            <div>
                <Header />
                <Route exact path="/">
                    <Card productlist={productList} />
                </Route>
                <Route exact path='/product' component={Product}>
                </Route>
            </div>
       </Router>
    )
}

export default Home;