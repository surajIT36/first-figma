import Navbar from '../components/Navbar';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from '../styles/bestcategoriespage.module.css';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import downarrow from '../public/down-arrow.png';
import uparrow from '../public/down-arrow1.png';


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
    },
    {
        id: 3,
        src: '/T-img-3.png',
        caption: 'Grey cotton tshirt',
        dec: 'Description goes here...',
        amount: '849'
    },
    {
        id: 4,
        src: '/T-img-3.png',
        caption: 'Grey cotton tshirt',
        dec: 'Description goes here...',
        amount: '849'
    },


]

const BestCategoriesPage = () => {
    return (
        <>

            <div style={{ background: "#E5E5E5", width: "428px" }}>
                <Navbar />
                <p style={{ paddingLeft: "24px", margin: "0", lineHeight: "40px", fontWeight: "700", color: "#B6B6B6", fontSize: "16px" }}>Home &gt; Best Categories</p>
                <hr style={{
                    color: '#000000',
                    backgroundColor: '#000000',
                    height: .5,
                    borderColor: '#000000',
                    margin: "0px 24px",
                }} />


                <div style={{
                    background: "#FFFFFF",
                    padding: "5px",
                    margin: "16px",
                }}>
                    <Link href='/bestcategories/woman'><a style={{
                        textDecoration: "none",
                        color: "#161622",
                        fontWeight:"500",fontSize: "24px",
                        paddingLeft:"12px",
                    }}>Men</a></Link><span style={{
                            position:"relative",top: "2px",
                    }}><Image src={downarrow} alt="arrow" /></span>

                    <Link href='/bestcategories/woman'><a style={{
                        textDecoration: "none",
                        color: "#161622",
                        fontWeight:"500",fontSize: "24px",
                        paddingLeft:"30px",
                    }}>Women</a></Link><span style={{
                            position:"relative",top: "2px",
                    }}><Image src={downarrow} alt="arrow" /></span>

                    <Link href='/bestcategories/woman'><a style={{
                        textDecoration: "none",
                        color: "#161622",
                        fontWeight:"500",fontSize: "24px",
                        paddingLeft:"36px",
                    }}>Groups</a></Link><span style={{
                            position:"relative",top: "2px",
                    }}><Image src={downarrow} alt="arrow" /></span>
                </div>

                <div style={{
                    background: "#FFFFFF",
                    margin: "30px",
                    borderRadius: "10px"
                }}>
                    <Button style={{
                        background: "#D9D9D9",
                        borderRadius: "5px",
                        fontWeight: "400",
                        fontSize: "20px",
                        color: "#161622",
                        margin: "5px",
                        border: "none",
                    }}>Shirt</Button>
                    <Button style={{
                        background: "#D9D9D9",
                        borderRadius: "5px",
                        fontWeight: "400",
                        fontSize: "20px",
                        color: "#161622",
                        border: "none",
                        margin: "5px"
                    }}>T Shirt</Button>
                    <Button style={{
                        background: "#D9D9D9",
                        borderRadius: "5px",
                        fontWeight: "400",
                        fontSize: "20px",
                        color: "#161622",
                        border: "none",
                        margin: "5px"
                    }}>Jeans</Button>
                    <Button style={{
                        background: "#D9D9D9",
                        borderRadius: "5px",
                        fontWeight: "400",
                        fontSize: "20px",
                        color: "#161622",
                        border: "none",
                        margin: "5px"
                    }}>Shirt</Button>
                    <Button style={{
                        background: "#D9D9D9",
                        borderRadius: "5px",
                        fontWeight: "400",
                        fontSize: "20px",
                        color: "#161622",
                        border: "none",
                        margin: "5px"
                    }}>Boggy shirt</Button>
                </div>


                <Row style={{ margin: "0px" }}>
                    <Col style={{ fontFamily: 'Poppins' }}>
                        {cardImg.map((x, _id) => {
                            return (
                                <>
                                    <div key={_id} style={{ display: "flex", margin: "10px" }}>
                                        <Card style={{ width: "30rem", margin: "4px" }}>
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
                                        <Card style={{ width: "30rem", margin: "4px", boxShadow: "0px 2px 2px rgb(0 0 0 / 25%)" }}>
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


            </div>


            <JoinNewsLetter />
            <Footer />
        </>
    );
}

export default BestCategoriesPage;