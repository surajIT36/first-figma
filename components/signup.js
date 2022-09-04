import Signupheader from '../components/signupheader';
import Form from 'react-bootstrap/Form';
import styles from '../styles/signup.module.css';
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
                    
                    <Link href="/signupOtpPage">
                            <a
                                style={{
                                    background: "#F170D3",
                                    height: "34px",
                                    width: "133px",
                                    textDecoration: "none",
                                    fontFamily: "Poppins",
                                    color: "#161622",
                                    fontWeight: "500",
                                    fontSize: "20px",
                                    textAlign: "center",
                                    borderRadius: "10px",
                                }}>SIGN UP</a>
                        </Link>
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
