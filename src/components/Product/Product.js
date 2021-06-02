import {useState} from 'react';
import {ProductImage} from './ProductImage';
import {ProductDetails} from './ProductDetails';
import './Product.scss';

export let Product = () => {

    const [prodImage, setProdImage] = useState('beats__171717');
    return(
        <section id="main" className="main">
            <section className="wrapper">
                <section className='main__product--info'>
                    <section className="main__product--upper">
                         <ProductImage prodImage={prodImage}/>
                         <ProductDetails setProdImage={setProdImage}/>
                     </section>
                 </section>
            </section>
        </section>
    );
}