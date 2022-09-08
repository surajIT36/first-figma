import Link from 'next/link';
import Navbar from '../components/Navbar';
import styles from '../styles/chechout.module.css';
import Table from 'react-bootstrap/Table';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


const cartImg = [
    {
        id: 1,
        src: '/cart.png',
        caption: 'In Stok',
        dec: 'Grey cotton tshirt',
        size: 'M',
        amount: '849'
    },
    {
        id: 2,
        src: '/cart.png',
        caption: 'In Stok',
        dec: 'Grey cotton tshirt',
        size: 'M',
        amount: '1755'
    },
    {
        id: 3,
        src: '/cart.png',
        caption: 'In Stok',
        size: 'S',
        amount: '978'
    },
    {
        id: 4,
        src: '/cart.png',
        caption: 'In Stok',
        size: 'S',
        amount: '978'
    }
]

const checkoutPage = () => {
    return (
        <>
            <div className={styles.main}>
                <Navbar />
                <h3 style={{ fontWeight: "500", fontSize: "24px", margin: "20px" }}>Your Cart</h3>
                <p className='text-center' style={{
                    fontWeight: "400",
                    fontSize: "26px",
                    color: "#161622"
                }}>Already Registered?<Link href='/login' ><a style={{ textDecoration: "none", color: "#161622" }}>Sign In</a></Link></p>

                <div style={{ padding: "20px" }}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Control placeholder="Full Name*" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Control placeholder="Address*" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Control placeholder="Landmark*" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Control placeholder="City*" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Control placeholder="State*" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Control placeholder="Phone Number*" />
                        </Form.Group>



                    </Form>
                </div>



                <Card style={{ width: '24rem', margin: "22px", padding: "20px", border: "10px" }}>
                    <div style={{ background: "white", }}>
                        <div>
                            <h2>Order Summary</h2>
                            <div>
                                <Table size="sm">
                                    <tbody>
                                        <tr>
                                            <td className={styles.orderItems}>Sub Total</td>
                                            <td className={styles.orderAmount}>₹ 849</td>
                                        </tr>

                                        <tr>
                                            <td className={styles.orderItems}>Sub Total(2 items)</td>
                                            <td className={styles.orderAmount}>₹ 849</td>
                                        </tr>

                                        <tr>
                                            <td className={styles.orderItems}>Total</td>
                                            <td className={styles.orderAmount}>₹ 849</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div>
                                {cartImg.map((x, _id) => {
                                    return (
                                        <>
                                            <div className={styles.container} key={_id}>
                                                <div>
                                                    <Image src={x.src} alt='src pic' width={93} height={134} />
                                                    <p style={{ fontWeight: "400", fontSize: "20px", color: "#F170D3" }}>{x.caption}</p>
                                                </div>
                                                <div className={styles.LeftContainer} >
                                                    <div style={{ display: "flex" }}>
                                                        <div>
                                                            <p>Size : {x.size}</p>
                                                            <p style={{ fontWeight: "500" }}>₹{x.amount}</p>
                                                        </div>
                                                        <div style={{ position: "relative", left: "50px" }}>
                                                            <Form>
                                                                <Row className="mb-3">

                                                                    <Form.Group as={Col} controlId="formGridState" style={{ display: "flex" }}>
                                                                        <Form.Label>Qty: </Form.Label>
                                                                        <Form.Select defaultValue="Choose..." style={{ border: "none" }}>
                                                                            <option>1</option>
                                                                            <option>2</option>
                                                                            <option>3</option>
                                                                            <option>4</option>
                                                                            <option>5</option>
                                                                        </Form.Select>
                                                                    </Form.Group>
                                                                </Row>

                                                            </Form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                            <div className="d-grid gap-2" style={{ background: "#20C6C6", borderRadius: "10px", textAlign: "center" }}>
                                <Link href='/'><a style={{
                                    textDecoration: "none",
                                    fontWeight: "500",
                                    fontSize: "20px",
                                    lineHeight: "35px",
                                    color: "#FFFFFF"
                                }}>PROCEED</a></Link>
                            </div>
                        </div>
                    </div>
                </Card>
                <br />
            </div>
            <JoinNewsLetter />
            <Footer />
        </>
    );
};

export default checkoutPage;