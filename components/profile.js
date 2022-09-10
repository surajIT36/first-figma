import Navbar from '../components/Navbar';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import user from '../public/user.png';
import ProgressBar from 'react-bootstrap/ProgressBar';

const profile = () => {
    const now = 60;
    return(
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
                    Home &gt; Account &gt; Profile</p>

         <div >
            <h2 style={{fontWeight:"700",fontSize:"24px",paddingLeft:"24px"}}>Profile</h2>
            <div className='text-center' style={{width:"428px"}}>
                <p>Enter the details</p>
                <div>
                    <Image src={user} alt='user profile' />
                </div>
                <p style={{margin:"0px"}}>Suraj Singh</p>
                <p>ucetsuraj@gmail.com</p>
                <div style={{
                    margin: "25px",
                }}>
                <h2 style={{fontWeight:"700",fontSize:"20px"}}>Profile Complition</h2>
                <ProgressBar now={now}   />
                <p style={{fontWeight:"400",fontSize:"18px",lineHeight:"40px"}}>{`${now}%`} profile is completed</p>
                </div>
            </div>
            </div>           

        <div style={{ margin: "24px", width: "380px" }}>
                        <Form>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Control placeholder="Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                                <Form.Control placeholder="Email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control placeholder="Address" as="textarea" rows={4} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="pincode">
                                <Form.Control placeholder="Add your gender" />
                            </Form.Group>

                            

                            <div className="d-grid gap-2" style={{paddingBottom:"20px"}}>
                                <Button variant="primary" size="lg" type="submit" style={{
                                    background: "#FFFFFF",
                                    borderRadius: "10px",
                                    fontWeight: "400",
                                    fontSize: "20px",
                                    color: "#787878",
                                    border: "1px solid #C4C4C4",
                                    lineHeight: "25px",
                                    display: "flex"
                                }}>
                                    Logout
                                </Button>
                            </div>
                           
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

        <JoinNewsLetter />
        <Footer />
        </>
    );
}

export default profile;