import Navbar from '../components/Navbar';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';
import Image from 'next/image';
import bestcategories from '../public/bestcategories.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from '../styles/woman.module.css';
import Card from 'react-bootstrap/Card';


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Form } from 'react-bootstrap';

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

const Woman = () => {
    return (
        <>

            <div style={{ background: "#E5E5E5", width: "428px", fontFamily: 'Poppins' }}>
                <Navbar />

                <p style={{ paddingLeft: "17px", margin: "0", lineHeight: "40px", fontWeight: "700", color: "#B6B6B6", fontSize: "16px" }}>Home &gt; Best Categories &gt; Woman &gt; Tops</p>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide style={{ width: "428px", background: "#FFFFFF", }}>
                        <div>
                            <Image src={bestcategories} alt="slide 1" />
                        </div>
                        <div style={{ fontWeight: "700", fontSize: "20px", margin: "15px" }}>
                            <p style={{ fontWeight: "400", margin: "0px" }}>Black cotton tshirt</p>
                            <p style={{ margin: "0px" }}>₹ 1028</p>
                            <p style={{ color: "#15B024" }}>Inclusive of all taxex</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide style={{ width: "428px", background: "#FFFFFF" }}>
                        <div>
                            <Image src={bestcategories} alt="slide 1" />
                        </div>
                        <div style={{ fontWeight: "700", fontSize: "20px", margin: "15px" }}>
                            <p style={{ fontWeight: "400", margin: "0px" }}>Black cotton tshirt</p>
                            <p style={{ margin: "0px" }}>₹ 1028</p>
                            <p style={{ color: "#15B024" }}>Inclusive of all taxex</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide style={{ width: "428px", background: "#FFFFFF" }}>
                        <div>
                            <Image src={bestcategories} alt="slide 1" />
                        </div>
                        <div style={{ fontWeight: "700", fontSize: "20px", margin: "15px" }}>
                            <p style={{ fontWeight: "400", margin: "0px" }}>Black cotton tshirt</p>
                            <p style={{ margin: "0px" }}>₹ 1028</p>
                            <p style={{ color: "#15B024" }}>Inclusive of all taxex</p>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div style={{ background: "#FFFFFF", marginTop: "20px", padding: "15px" }}>
                    <Row style={{ marginRight: "0px" }}>
                        <Col><p style={{ fontWeight: "500", fontSize: "20px", margin: "0px", paddingLeft: "12px" }}>Size</p></Col>
                        <Col><p style={{ paddingLeft: "49px", margin: "0px" }}>view size chart</p></Col>
                    </Row>
                    <div>
                        <Button variant="primary" style={{
                            color: "#161622",
                            background: "#D9D9D9",
                            border: "none",
                            borderRadius: "50%",
                            margin: "9px",
                        }}>xl</Button>

                        <Button variant="primary" style={{
                            color: "#161622",
                            background: "#D9D9D9",
                            border: "none",
                            borderRadius: "50%",
                            margin: "9px",
                        }}>xl</Button>

                        <Button variant="primary" style={{
                            color: "#161622",
                            background: "#D9D9D9",
                            border: "none",
                            borderRadius: "50%",
                            margin: "9px",
                        }}>xs</Button>

                        <Button variant="primary" style={{
                            color: "#161622",
                            background: "#D9D9D9",
                            border: "none",
                            borderRadius: "50%",
                            margin: "9px",
                        }}>xs</Button>

                        <Button variant="primary" style={{
                            color: "#161622",
                            background: "#D9D9D9",
                            border: "none",
                            borderRadius: "50%",
                            margin: "9px",
                        }}>xl</Button>

                        <Button variant="primary" style={{
                            color: "#161622",
                            background: "#D9D9D9",
                            border: "none",
                            borderRadius: "50%",
                            margin: "9px",
                        }}>xl</Button>
                    </div>
                </div>

                <div style={{ marginTop: "25px", background: "#FFFFFF" }}>
                    <p style={{
                        fontWeight: "500",
                        fontSize: "20px",
                        margin: "0px",
                        paddingTop: "18px",
                        paddingLeft: "12px",
                    }}>CHECK DELIVERY AND SERVICES</p>
                    <div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail"
                                style={{
                                    display: "flex",
                                    margin: "10px",
                                    border: "2px solid #919191"
                                }}>
                                <Form.Control type="email" placeholder="Enter a PIN code" style={{
                                    border: "none",
                                    borderRadius: "0px"
                                }} />
                                <Button style={{
                                    background: "#FFFFFF",
                                    color: "#909090",
                                    border: "none",
                                    borderRadius: "0px"
                                }}>CHECK</Button>

                            </Form.Group>
                        </Form>
                    </div>

                    <div style={{ color: "#919191", fontWeight: "400", fontSize: "16px", paddingLeft: "16px" }}>
                        <p style={{ margin: "0px" }}>Pay on delivery might be available.</p>
                        <p>Easy 30 days return and exchange policy</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around", paddingBottom: "20px" }}>
                        <Button style={{

                            border: "1px solid #000000",
                            background: "#FFFFFF",
                            color: "#000000",
                            fontWeight: "400",
                            fontSize: "20px"
                        }}>WISHLIST</Button>
                        <Button style={{
                            background: "#F170D3",
                            color: "#FFFFFF",
                            fontWeight: "400",
                            fontSize: "20px",
                            border: "none"
                        }}>ADD TO BAG</Button>
                    </div>
                </div>

                <div style={{
                        background: "#FFFFFF",
                        marginTop: "21px",
                        padding: "12px"
                }}>
                    <p style={{fontWeight:"500",fontSize:"20px"}}>PRODUCT DETAILS</p>
                    <ul>
                        <li>Round Neck</li>
                        <li>Black colour</li>
                        <li>Cotton Tshirt</li>
                    </ul>
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
                        style={{ width: "428px" }}
                    >
                        <SwiperSlide>
                            <Row>
                                <Col style={{ display: "flex", justifyContent: "center", fontFamily: 'Poppins', padding: "16px" }}>
                                    {cardImg.map((x, _id) => {
                                        return (
                                            <>
                                                <div key={_id} >
                                                    <Card className={styles.tContainer}
                                                        style={{ boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)", width: "12rem", margin: "4px" }}>
                                                        <Card.Img variant="top" src={x.src} />
                                                        <Card.Body style={{ padding: "3px" }}>
                                                            <Card.Title style=
                                                                {{ fontWeight: "400", fontSize: "16px", margin: "0px" }}>
                                                                {x.caption}
                                                            </Card.Title>
                                                            <Card.Text className={styles.des}>{x.dec}</Card.Text>
                                                            <p className={styles.amount}> ₹ {x.amount}
                                                                <span className={styles.del}>
                                                                    <del> ₹ {x.amount}</del>
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
                                <Col style={{ display: "flex", justifyContent: "center", fontFamily: 'Poppins', padding: "16px" }}>
                                    {cardImg.map((x, _id) => {
                                        return (
                                            <>
                                                <div key={_id} >
                                                    <Card className={styles.tContainer}
                                                        style={{ boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)", width: "11rem", margin: "4px" }}>
                                                        <Card.Img variant="top" src={x.src} />
                                                        <Card.Body style={{ padding: "3px" }}>
                                                            <Card.Title style=
                                                                {{ fontWeight: "400", fontSize: "16px", margin: "0px" }}>
                                                                {x.caption}
                                                            </Card.Title>
                                                            <Card.Text className={styles.des}>{x.dec}</Card.Text>
                                                            <p className={styles.amount}> ₹ {x.amount}
                                                                <span className={styles.del}>
                                                                    <del> ₹ {x.amount}</del>
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
                                <Col style={{ display: "flex", justifyContent: "center", fontFamily: 'Poppins', padding: "16px" }}>
                                    {cardImg.map((x, _id) => {
                                        return (
                                            <>
                                                <div key={_id} >
                                                    <Card className={styles.tContainer}
                                                        style={{ boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)", width: "11rem", margin: "4px" }}>
                                                        <Card.Img variant="top" src={x.src} />
                                                        <Card.Body style={{ padding: "3px" }}>
                                                            <Card.Title style=
                                                                {{ fontWeight: "400", fontSize: "16px", margin: "0px" }}>
                                                                {x.caption}
                                                            </Card.Title>
                                                            <Card.Text className={styles.des}>{x.dec}</Card.Text>
                                                            <p className={styles.amount}> ₹ {x.amount}
                                                                <span className={styles.del}>
                                                                    <del> ₹ {x.amount}</del>
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
                                <Col style={{ display: "flex", justifyContent: "center", fontFamily: 'Poppins', padding: "16px" }}>
                                    {cardImg.map((x, _id) => {
                                        return (
                                            <>
                                                <div key={_id} >
                                                    <Card className={styles.tContainer}
                                                        style={{ boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)", width: "11rem", margin: "4px" }}>
                                                        <Card.Img variant="top" src={x.src} />
                                                        <Card.Body style={{ padding: "3px" }}>
                                                            <Card.Title style=
                                                                {{ fontWeight: "400", fontSize: "16px", margin: "0px" }}>
                                                                {x.caption}
                                                            </Card.Title>
                                                            <Card.Text className={styles.des}>{x.dec}</Card.Text>
                                                            <p className={styles.amount}> ₹ {x.amount}
                                                                <span className={styles.del}>
                                                                    <del> ₹ {x.amount}</del>
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
            </div>

            <JoinNewsLetter />
            <Footer />
        </>
    );
}

export default Woman;