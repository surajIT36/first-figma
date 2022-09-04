import styles from '../styles/TshirtsPage.module.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import Tshirt from '../public/T-img-1.png';
import Tshirt2 from '../public/T-img-2.png';
import arrow from '../public/arrow-up-2.png';

const cardImg = [
    {
        id: 1,
        src: '/T-img-3.png',
        caption: 'Grey cotton tshirt',
        dec: 'Description goes here...',
        amount: '849'
    },
    {
        id: 1,
        src: '/T-img-3.png',
        caption: 'Grey cotton tshirt',
        dec: 'Description goes here...',
        amount: '849'
    }
]

const Tshirts = () => {
    return (
        <>
            <Container fluid style={{ fontFamily: 'Poppins', width: "428px", paddingBottom: "10px" }}>
                <Row className="text-center" style={{ color: "#161622" }}>
                    <Col className='py-3' style={{ fontWeight: "700", fontSize: "20px" }}>Tshirts now available in new trends</Col>
                </Row>
                <Row className="text-center">
                    <Col style={{ fontWeight: "400", fontSize: "24px" }}>Now in new colours</Col>
                </Row>
                <Row className='text-center' style={{ width: "250px", padding: "38px" }}>
                    <Col style={{ fontWeight: "700", fontSize: "32px", border: "5px solid #F170D3" }}>FOR HIM</Col>
                </Row>
                <div className='text-center'>
                    <Image
                        src={Tshirt}
                        alt="Picture of the author"
                    />
                </div>
                <Row className='text-center' style={{ width: "290px", padding: "38px", alignItems: "center" }}>
                    <Col className='d-flex' style={{ fontWeight: "700", fontSize: "32px", background: "#20C6C6" }}>FOR HER
                        <div className='text-center' style={{ paddingLeft: "15px" }}>
                            <Image
                                src={arrow}
                                alt="Picture of the author"
                            />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col >
                        <div className='text-center'>
                            <Image
                                src={Tshirt2}
                                alt="Picture of the author"
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center' style={{ fontWeight: "700", fontSize: "20px" }}>
                        Recommended
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {cardImg.map((x, _id) => {
                            return (
                                <>
                                    <div key={_id} style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
                                        <Card className={styles.tContainer}>
                                            <Card.Img variant="top" src={x.src} />
                                            <Card.Body style={{ margin: "10px" }}>
                                                <Card.Title style={{ position: "relative", top: "-18px", fontWeight: "400", fontSize: "28px" }} >{x.caption}</Card.Title>
                                                <Card.Text className={styles.description}>{x.dec}</Card.Text>
                                                <p style={{
                                                    position: "relative", top: "-37px", fontWeight: "500", fontSize: "18px"
                                                }}>
                                                    ₹ {x.amount} <span style={{ color: "#919191", position: "relative", left: "12px" }}><del> ₹ {x.amount}</del></span>
                                                </p>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </>
                            )
                        })}
                    </Col>
                </Row>

            </Container>

        </>
    );
};

export default Tshirts;