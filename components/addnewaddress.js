import Navbar from '../components/Navbar';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';
// import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const address = () => {
    return (
        <>
            <Navbar />

            <div style={{ fontFamily: 'Poppins' }}>
                <p style={{
                    margin: "0",
                    lineHeight: "40px",
                    fontWeight: "700",
                    color: "#B6B6B6",
                    fontSize: "16px",
                    paddingLeft: "15px"
                }}>
                    Home &gt; Account &gt; Addresses</p>

                <div>
                    <div style={{ marginLeft: "24px" }}>
                        <h2 style={{fontSize: "24px",fontWeight: "700", margin: "0", lineHeight: "30px" }}>Add addresses</h2>
                        <p style={{fontWeight:"400",fontSize: "15px"}}>Enter details of new address</p>
                    </div>

                    <div style={{ margin: "24px", width: "380px" }}>
                        <Form>


                            <Form.Group className="mb-3" controlId="name">
                                <Form.Control placeholder="Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="phone">
                                <Form.Control placeholder="Phone" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control placeholder="Address" as="textarea" rows={4} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="pincode">
                                <Form.Control placeholder="Pincode" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="city">
                                <Form.Control placeholder="City" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="state">
                                <Form.Select placeholder="State">
                                    <option>State</option>
                                    <option>Jharkhand</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="state">
                                <Form.Select placeholder="State">
                                    <option>Country</option>
                                    <option>Ranchi</option>
                                </Form.Select>
                            </Form.Group>
                            <div className="d-grid gap-2">
                                <Button variant="primary" size="lg" type="submit" style={{
                                    background: "#F170D3",
                                    borderRadius: "10px",
                                    fontWeight: "700",
                                    fontSize: "28px",
                                    lineHeight: "34px",
                                    border: "none",
                                }}>
                                    Done
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            <JoinNewsLetter />
            <Footer />
        </>
    );
}

export default address;