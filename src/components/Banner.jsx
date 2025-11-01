import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <section className='banner-section'>
            <Carousel fade controls={false} indicators={false} interval={4000}>
                <Carousel.Item>
                    <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" alt="imagen banner" className='d-block w-100 banner-image' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg" alt="imagen banner" className='d-block w-100 banner-image' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg" alt="imagen banner" className='d-block w-100 banner-image' />
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Banner;