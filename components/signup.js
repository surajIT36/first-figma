import Signupheader from '../components/signupheader';
import Form from 'react-bootstrap/Form';
import styles from '../styles/signup.module.css';
import Button from 'react-bootstrap/Button';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';
import Link from 'next/link';

const signup = () => {
    return(
        <>
        <Signupheader />
            <div style={{ width: "428px" }}>
                <Form>
                    <div className={styles.signupOtpForm}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" required className={styles.placeholder} 
                            style={{boxShadow: "none",background: "border-box"}} />
                            <span className={styles.underline}></span>
                        </Form.Group>
                    </div>

                    <div className={styles.signupOtpForm}>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Control type="text" placeholder="Username" required className={styles.placeholder}
                            style={{boxShadow: "none",background: "border-box"}}  />
                            <span className={styles.underline}></span>
                        </Form.Group>
                    </div>

                    <div className={styles.signupOtpForm}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" required className={styles.placeholder}
                            style={{boxShadow: "none",background: "border-box"}}  />
                            <span className={styles.underline}></span>
                        </Form.Group>
                    </div>

                    <div className={styles.signupOtpForm}>
                        <Form.Group className="mb-3" controlId="formBasicConformPassword">
                            <Form.Control type="password" placeholder="Conform Password" required className={styles.placeholder}
                            style={{boxShadow: "none",background: "border-box"}}  />
                            <span className={styles.underline}></span>
                        </Form.Group>
                    </div>

                    <div style={{display:"flex",padding:"30px",width:"393px"}} >
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox"  /> 
                        <span style={{position:"relative",bottom:"30px",left:"37px"}}>By signing in i agree with <span style={{color:"#F170D3"}} >terms and condition</span></span> 
                    </Form.Group>
                    </div>

                    <div style={{textAlign:"center",fontFamily: "Poppins",height:"69px",position:"relative",top: "-9px"}}>
                    <Button variant="primary" type="submit"
                    style={{    
                        background: "#F170D3",
                        border: "none",
                        width: "133px",
                        borderRadius: "10px",
                        height: "34px",     
                        fontWeight: "500",
                        fontSize: "20px",
                        lineHeight: "23px",
                        color: "#161622"}}
                    >SIGN UP</Button>{' '}
                    <span style={{padding:"18px"}}>OR</span>
                    <Link href="/login">
                            <a
                                style={{
                                    textDecoration: "none",
                                    fontFamily: "Poppins",
                                    color: "#161622",
                                    fontWeight: "400",
                                    fontSize: "20px",
                                    textAlign: "center",
                                    borderRadius: "10px",
                                }}> LOG IN</a>
                        </Link>
                    </div>
                   

                </Form>
            </div>

       <JoinNewsLetter />
        <Footer />
        </>
    );
}

export default signup;
