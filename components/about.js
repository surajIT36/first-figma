import styles from '../styles/about.module.css';
import Navbar from './Navbar';
import Container from 'react-bootstrap/Container';
import JoinNewsetter from './joinnewsLetter';
import Footer from './footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import aboutImg from '../public/about.png';
import ourteam from '../public/ourTeam.png';


import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const AboutText = [
    {
        id: 1,
        text: ' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using Content here content here making it look like readable English. Many desktop publishing packages and web page editors now use Lor em Ipsum as their default model text, and a search for lorem. '
    },
    {
        id: 2,
        text: ' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using Content here content here making it look like readable English. Many desktop publishing packages and web page editors now use Lor em Ipsum as their default model text, and a search for lorem. '
    },
    {
        id: 3,
        text: ' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using Content here content here making it look like readable English. Many desktop publishing packages and web page editors now use Lor em Ipsum as their default model text, and a search for lorem. '
    },
    {
        id: 4,
        text: ' It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using Content here content here making it look like readable English. Many desktop publishing packages and web page editors now use Lor em Ipsum as their default model text, and a search for lorem. '
    },
]

const index = () => {

    return (
        <>
            <Navbar />

            <Container style={{ fontFamily: 'Poppins', width: "428px" }}>
                <div style={{ padding: "20px" }}>
                    <Row>
                        <Col><h2 style={{ fontWeight: "700", fontSize: "24px" }}>About Us</h2></Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                <Image src={aboutImg} alt='about page' />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p style={{ fontSize: "20px", width: "379px" }}>It is a long established fact that a
                                reader will be distracted by the
                                readable content of a page when
                                looking at its layout. The point of
                                using Lorem Ipsumis that it has a
                                more-or-less normal distribution
                                of letters, as opposed to using
                                Content here content here,
                                it look like readable English. Many
                                desktop publishing packages and
                                web page editors now use Lorem
                                Ipsum as their default model text,
                                and a search for lorem ipsum will
                                uncover many web sites still in their
                                infancy. </p>
                        </Col>
                    </Row>
                </div>

                <div style={{ backgroundImage: `url("/aboutmission.png")` }}>
                    <Row>
                        <Col className='text-center'><p style={{ fontWeight: "400", fontSize: "22px" }}>
                            Our <span style={{ color: "#20C6C6" }}>Mission</span></p>
                        </Col>
                    </Row>

                    <Row style={{ paddingTop: "27px" }}>
                        <Col>
                            <Swiper rewind={true} navigation={true} modules={[Navigation]} className="mySwiper">
                                {AboutText.map((x, _id) => {
                                    return (
                                        <>
                                            <SwiperSlide>
                                                <div>
                                                    <div className={styles.bgcard}>
                                                        <div className={styles.frontcard}>
                                                            <p style={{ padding: "13px", lineHeight: "20px", fontWeight: "400", fontSize: "13px" }}>
                                                                {x.text}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </>
                                    )
                                })}
                            </Swiper>

                        </Col>
                    </Row>

                </div>

                <div className='team'>
                <Row>
                        <Col className='text-center py-3'><p style={{ fontWeight: "400", fontSize: "30px" }}>
                            Our Teams</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='text-center'>
                        <Swiper rewind={true} navigation={true} modules={[Navigation]} className="mySwiper">
                                            <SwiperSlide>
                                               <div>
                                                <div> <Image src={ourteam} alt='about page' /></div>
                                                <div>
                                                <h2>Shrey somi</h2>
                                                <p>Designer</p>
                                                </div>
                                               </div>
                                            </SwiperSlide>

                                            <SwiperSlide>
                                               <div>
                                                <div> <Image src={ourteam} alt='about page' /></div>
                                                <div>
                                                <h2>Shrey somi</h2>
                                                <p>Designer</p>
                                                </div>
                                               </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                               <div>
                                                <div> <Image src={ourteam} alt='about page' /></div>
                                                <div>
                                                <h2>Shrey somi</h2>
                                                <p>Designer</p>
                                                </div>
                                               </div>
                                            </SwiperSlide>
                                 
                            </Swiper>
                        </Col>
                    </Row>
                </div>
            </Container>

            <JoinNewsetter />
            <Footer />
        </>
    );

}

export default index;