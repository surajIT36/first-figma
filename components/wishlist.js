import Navbar from '../components/Navbar';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';

import { Swiper, SwiperSlide } from "swiper/react";
import styles from '../styles/mywishlist.module.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// import Image from 'next/image';
// import User from '../public/T-img-3.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const cardImg = [
    {
        id: 1,
        src: '/T-img-3.png',
        caption: 'Grey cotton tshirt',
        dec: 'Description goes here...',
        amount: '849'
    },
    {
        id: 2,
        src: '/T-img-3.png',
        caption: 'Grey cotton tshirt',
        dec: 'Description goes here...',
        amount: '849'
    }
   
]
const wishlist = () => {
    return(
        <>
        <Navbar />


        <div>
        <p style={{ margin: "0", lineHeight: "40px", fontWeight: "700", color: "#B6B6B6", fontSize: "16px",padding:"15px" }}>
            Home &gt; Account &gt; My Wishlist</p>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                style={{width:"428px",paddingBottom:"20px"}}
            >
                <SwiperSlide>
                    <Row>
                        <Col style={{ display: "flex", justifyContent: "center", fontFamily: 'Poppins' }}>
                            {cardImg.map((x, _id) => {
                                return (
                                    <>
                                        <div key={_id} >
                                            <Card className={styles.tContainer} style={{ width: "10rem", margin: "4px" }}>
                                                <Card.Img variant="top" src={x.src} />
                                                <Card.Body style={{ padding: "3px" }}>
                                                    <Card.Title style=
                                                        {{ fontWeight: "400", fontSize: "16px", margin: "0px" }}>
                                                        {x.caption}
                                                    </Card.Title>
                                                    <Card.Text className={styles.des}>{x.dec}</Card.Text>
                                                    <p className={styles.amount}> ??? {x.amount}
                                                        <span className={styles.del}>
                                                            <del> ??? {x.amount}</del>
                                                        </span>
                                                    </p>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </>
                                )
                            })}
                        </Col>
                    </Row>
                </SwiperSlide>

                <SwiperSlide>
                    <Row>
                        <Col style={{ display: "flex", justifyContent: "center", fontFamily: 'Poppins' }}>
                            {cardImg.map((x, _id) => {
                                return (
                                    <>
                                        <div key={_id} >
                                            <Card className={styles.tContainer} style={{ width: "10rem", margin: "4px" }}>
                                                <Card.Img variant="top" src={x.src} />
                                                <Card.Body style={{ padding: "3px" }}>
                                                    <Card.Title style=
                                                        {{ fontWeight: "400", fontSize: "16px", margin: "0px" }}>
                                                        {x.caption}
                                                    </Card.Title>
                                                    <Card.Text className={styles.des}>{x.dec}</Card.Text>
                                                    <p className={styles.amount}> ??? {x.amount}
                                                        <span className={styles.del}>
                                                            <del> ??? {x.amount}</del>
                                                        </span>
                                                    </p>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </>
                                )
                            })}
                        </Col>
                    </Row>
                </SwiperSlide>

                <SwiperSlide>
                    <Row>
                        <Col style={{ display: "flex", justifyContent: "center", fontFamily: 'Poppins' }}>
                            {cardImg.map((x, _id) => {
                                return (
                                    <>
                                        <div key={_id} >
                                            <Card className={styles.tContainer} style={{ width: "10rem", margin: "4px" }}>
                                                <Card.Img variant="top" src={x.src} />
                                                <Card.Body style={{ padding: "3px" }}>
                                                    <Card.Title style=
                                                        {{ fontWeight: "400", fontSize: "16px", margin: "0px" }}>
                                                        {x.caption}
                                                    </Card.Title>
                                                    <Card.Text className={styles.des}>{x.dec}</Card.Text>
                                                    <p className={styles.amount}> ??? {x.amount}
                                                        <span className={styles.del}>
                                                            <del> ??? {x.amount}</del>
                                                        </span>
                                                    </p>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </>
                                )
                            })}
                        </Col>
                    </Row>
                </SwiperSlide>

            </Swiper>
        </div>

        <JoinNewsLetter />
        <Footer />
        </>
    );
}

export default wishlist;