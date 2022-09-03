import NavBar from '../components/Navbar';
import styles from '../styles/savenewpassword.module.css';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';

const savepassword = () => {
    return(
        <>
        <NavBar />
        <div className={styles.container}>
                <div className={styles.containerHeading}>
                    <h2 style={{fontSize: "24px"}}>New Password</h2>
                    <h3 style={{fontSize: "20px"}}>Enter your new password</h3>
                </div>
            </div>
    
        <div style={{fontFamily: 'Poppins',position:"relative",width:"428px"}}>
                <Form>
                    <div className={styles.signupOtpForm}>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Control type="password" placeholder="Enter New Password" required className={styles.placeholder}
                            style={{boxShadow: "none",background: "border-box"}}  />
                            <span className={styles.underline}></span>
                        </Form.Group>     
                    </div>

                    <div className={styles.signupOtpForm}>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Control type="password" placeholder="Confirm Password" required className={styles.placeholder}
                            style={{boxShadow: "none",background: "border-box"}}  />
                            <span className={styles.underline}></span>
                        </Form.Group>     
                    </div>

                    
                    
                    <div className="d-grid gap-2"style={{paddingBottom: "33px",paddingTop: "78px"}}>
                       
                        <Link href="/login">
                            <a
                                style={{
                                    textDecoration: "none",
                                    fontFamily: "Poppins",
                                    color: "#161622",
                                    background: "#F170D3",
                                    fontWeight: "500",
                                    fontSize: "20px",
                                    textAlign: "center",
                                    borderRadius: "10px",
                                    margin: "auto",
                                    width: "300px",
                                    padding: "1px",
                                }}> Save</a>
                        </Link>
                    </div>
                </Form>
            </div>


        <JoinNewsLetter />
        <Footer />
        </>
    );
}

export default savepassword;