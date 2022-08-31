import Signupheader from '../components/signupheader';
import Form from 'react-bootstrap/Form';
import styles from '../styles/signup.module.css';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';

const signup = () => {
    return(
        <>
        <Signupheader />
            <div style={{ width: "428px" }}>
                <Form>
                    <div className={styles.signupOtpForm}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email" className={styles.placeholder}  />
                            <span className={styles.underline}></span>
                        </Form.Group>
                    </div>

                    <div className={styles.signupOtpForm}>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Control type="text" placeholder="Username" className={styles.placeholder} />
                            <span className={styles.underline}></span>
                        </Form.Group>
                    </div>

                    <div className={styles.signupOtpForm}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" className={styles.placeholder} />
                            <span className={styles.underline}></span>
                        </Form.Group>
                    </div>

                    <div className={styles.signupOtpForm}>
                        <Form.Group className="mb-3" controlId="formBasicConformPassword">
                            <Form.Control type="password" placeholder="Conform Password" className={styles.placeholder} />
                            <span className={styles.underline}></span>
                        </Form.Group>
                    </div>

                    <div >
                    <Form.Group className="mb-5" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox"  />                       
                        <span>By signing in i agree with <span style={{color:"#F170D3"}} >terms and condition</span></span>                      
                    </Form.Group>
                    </div>
                   

                </Form>
            </div>

       <JoinNewsLetter />
        <Footer />
        </>
    );
}

export default signup;
