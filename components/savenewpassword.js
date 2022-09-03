import NavBar from '../components/Navbar';
import styles from '../styles/savenewpassword.module.css';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';

const savepassword = () => {
    const Router = useRouter();
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
                        <Button variant="primary" size="lg" type="submit" onClick={()=>Router.push('/login')}
                        style={{
                            background: "#F170D3",
                            color: "#161622",
                            border: "none",
                            width: "300px",
                            padding: "1px",
                            margin: "auto",
                            fontSize: "20px",
                            fontWeight: "500"
                        }}>
                            Save
                        </Button>
                    </div>
                </Form>
            </div>


        <JoinNewsLetter />
        <Footer />
        </>
    );
}

export default savepassword;