import styles from '../styles/SliderPage.module.css';
import Carousel from 'react-bootstrap/Carousel';


const slider = () => {
    return(
        <>
        <div className={styles.sliderContainer}> 
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/slide-1.png"
                            alt="First slide"
                        />
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




