import styles from '../styles/cart.module.css';
import Navbar from '../components/Navbar';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';
import Image from 'next/image';
import close from '../public/close.png'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


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
        dec: 'Grey cotton tshirt',
        size: 'S',
        amount: '978'
    }
]
const cart = () => {
    return (
        <>

            <div className={styles.main}>
                <Navbar />
                <h3 style={{ fontWeight: "500", fontSize: "24px", margin: "20px" }}>Your Cart</h3>
                {cartImg.map((x, _id) => {
                    return (
                        <>
                            <div className={styles.container} key={_id}>
                                <div>
                                    <Image src={x.src} alt='src pic' width={93} height={134} />
                                    <p style={{ fontWeight: "400", fontSize: "20px", color: "#F170D3" }}>{x.caption}</p>
                                </div>
                                <div className={styles.LeftContainer} >
                                    <h3 style={{ margin: 0, fontWeight: "400", fontSize: "20px" }}>{x.dec}</h3>
                                    <h3 style={{ color: "#919191", fontWeight: "400", fontSize: "20px" }}>{x.dec}</h3>
                                    <div style={{ display: "flex", position: "absolute", top: "86px" }}>
                                        <div>
                                            <p style={{ margin: 0 }}>Size : {x.size}</p>
                                            <p>₹{x.amount}</p>
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

               
            <div className='d-flex' style={{
                padding: "5px",
                justifyContent: "space-around",
                background: "#FFFFFF",
                fontWeight: "400",
                boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)"
            }}>
                <div>
                <p style={{fontSize:"22px"}}>Apply coupon</p>
                </div>
                <div>
                <Button variant="primary" style={{
                     background: "#FFFFFF",
                     border:"none",
                     color: "#F170D3",
                     fontSize: "20px"
                }}>Apply</Button>
                </div>
            </div>
                    
               


            </div>

            <JoinNewsLetter />
            <Footer />
        </>
    );
}

export default cart;