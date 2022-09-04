import styles from '../styles/SliderPage.module.css';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import slide from '../public/slide-1.png'

const slider = () => {
    return (
        <>
            <div className={styles.sliderContainer}>
                <Carousel>
                    <Carousel.Item>
                        <div>
                            <Image className="d-block w-100" src={slide} alt="Picture of the author" />
                        </div>
        
                        <Carousel.Caption>
                            <h3 className={styles.firstslideheading}>Sale of the season</h3>
                            <p className={styles.firstslidetitle}>
                                Best in basic tshirts and buttoms..
                            </p>
                            <div className={styles.firstslideoffer}>
                                <h4 className={styles.offer}>Get 10% off on online payment</h4>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        </>
    );
};

export default slider;




