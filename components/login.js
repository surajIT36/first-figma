import Loginheader from './loginheader';
import JoinNewsLetter from './joinnewsLetter';
import Footer from './footer';
import Form from 'react-bootstrap/Form';
import styles from '../styles/login.module.css';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';


const login = () => {
    
    return(
        <>
        <Loginheader />

        <div style={{ width: "428px",height: "380px"}}>
                <Form>

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

                    <div>
                        <ul>
                            <li style={{listStyle:"none"}}>
                                <Link href="/forgotpassword">
                                    <a 
                                    style={{textDecoration:"none",fontFamily:'Poppins',color:"#F170D3",
                                    fontWeight:700,fontSize:"19px",lineHeight:"16px",position:"absolute",
                                    left:"211px"
                                    }}>Forget Password</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div style={{textAlign:"center",fontFamily: "Poppins",height:"69px",position:"relative",top: "113px"}}>
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
                    >LOG IN</Button>{' '}

                    <span style={{padding:"18px"}}>OR</span>
                    
                    <Link href="/signup">
                            <a
                                style={{
                                    textDecoration: "none",
                                    fontFamily: "Poppins",
                                    color: "#161622",
                                    fontWeight: "400",
                                    fontSize: "20px",
                                    textAlign: "center",
                                    borderRadius: "10px",
                                    color: "#161622"
                                }}> SIGN UP</a>
                        </Link>
                    </div>
                   

                </Form>
            </div>


        <JoinNewsLetter />
        <Footer />
        </>
    );
}

export default login;