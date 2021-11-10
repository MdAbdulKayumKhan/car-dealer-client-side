import React from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Button
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';
import bn1 from '../../../img/banner/3ecde-01.jpg'
import bn2 from '../../../img/banner/ac5dd-02.jpg'


const Banner = () => {

    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={bn1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Link className="explore" to="/products">
                            <Button variant="warning" size="lg">
                                Explore
                            </Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={bn2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <Link className="explore" to="/products">
                            <Button variant="warning" size="lg">
                                Explore
                            </Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bn1}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <Link className="explore" to="/products">
                            <Button variant="warning" size="lg">
                                Explore
                            </Button>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;