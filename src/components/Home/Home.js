import Header from '../Header/Header';
import Card from '../Card/Card';

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
        <div>
            <Header />
            <Card productlist={productList} />
        </div>
    )
}

export default Home;