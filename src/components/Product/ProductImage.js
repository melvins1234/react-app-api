export const ProductImage = ({prodImage}) => {
    return(
        <section className="main__product--image">
            <img src = {`${process.env.PUBLIC_URL}/images/${prodImage}.png`} alt="Beat Solo 2 on Ear Headphones - Black"/>
            <footer className="main__product--thumbnail">
                <img src= {`${process.env.PUBLIC_URL}/images/${prodImage}_thumb_1.png`} alt="Beat Solo 2 on Ear Headphones - Black" />
                <img src= {`${process.env.PUBLIC_URL}/images/${prodImage}_thumb_2.png`} alt="Beat Solo 2 on Ear Headphones - Black" />
                <img src= {`${process.env.PUBLIC_URL}/images/${prodImage}_thumb_3.png`} alt="Beat Solo 2 on Ear Headphones - Black" />
                <img src= {`${process.env.PUBLIC_URL}/images/${prodImage}_thumb_4.png`} alt="Beat Solo 2 on Ear Headphones - Black" />
            </footer>
        </section>
    )
}