import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header/Header';
import Card from './components/Card/Card';
import {Product} from './components/Product/Product'
import {SignIn} from './components/SignIn/SignIn'

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
const App = () => {
    return (
       <Router>
            <div>
                <Route exact path={['/','/product', '/store', '/iphone', '/ipad', '/macbook']} component={Header}></Route>
                <Route exact path="/" component={() => (<Card productlist={productList} />)} />
                <Route exact path='/product' component={Product} />
                <Route exact path='/login' component={SignIn} />
            </div>
       </Router>
    )
}

export default App;