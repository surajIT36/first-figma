import NavBar from '../components/Navbar';
import styles from '../styles/blog.module.css';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';
import Link from 'next/link';

import { Swiper, SwiperSlide } from "swiper/react";
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
        src: '/slide-1.png',
        caption: 'Grey cotton tshirt',
        dec: 'Description goes here...',
        amount: '849'
    },
   
]

const helpandsupport = () => {
    return(
        <>
        <NavBar />
        <div className={styles.container}>
                <div className={styles.containerBody}>
                    <h2 style={{ fontWeight: "700", fontSize: "24px", paddingBottom: "20px", color: "#161622" }}>Blog</h2>
                    <span
                        style={{ position: "absolute", left: "293px", top: "86px", fontWeight: "500", fontSize: "15px", color: "#F170D3" }}
                    >clear all</span>
                    <div className={styles.paragraph}>
                        <p>The point of using Lorem Ipsum
                            is that it has amore-or-less no
                            rmal distribution of letters, as
                            opposed to using Content
                            here, content here making it
                            look like readable English.
                        </p>
                    </div>

                    <div>
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
                style={{paddingBottom:"20px"}}
            >
                <SwiperSlide>
                    <Row>
                        <Col style={{ display: "flex", justifyContent: "center", fontFamily: 'Poppins' }}>
                            {cardImg.map((x, _id) => {
                                return (
                                    <>
                                        <div key={_id} >
                                            <Card className={styles.tContainer} style={{ width: "18rem",}}>
                                                <Card.Img variant="top" src={x.src} />
                                            
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
                                            <Card className={styles.tContainer} style={{ width: "18rem",}}>
                                                <Card.Img variant="top" src={x.src} />
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

                   
                    <h4 style={{position:"relative",top:"12px",fontWeight: "700",fontSize: "16px",
                    lineHeight: "24px",color: "#000000"}}
                    >The point of using Lorem Ipsum is that it has amore-or-less normal.
                    </h4>

                    <p style={{fontStyle: "normal",paddingTop: "25px",width: "302px",fontWeight: "400",
                        fontSize: "15px",lineHeight: "22px",color: "#000000"}}>
                            The point of using Lorem Ipsum
                            is that it has amore-or-less no
                            rmal distribution of letters, as
                            opposed to using Content
                            here, content here making it
                            look like readable English.</p>
                    <Link href="/blog/blogdetails">
                        <a
                        style={{   
                            fontFamily: "Poppins",
                            background: "rgb(241, 112, 211)",
                            borderRadius: "5px",
                            fontWeight: "500",
                            fontSize: "15px",
                            color: "rgb(22, 22, 34)",
                            padding: "7px",
                            textDecoration: "none"}}
                        >Read More</a>
                    </Link>
            </div>
        </div>

        <JoinNewsLetter />
        <Footer />
        </>
    );
}

export default helpandsupport;