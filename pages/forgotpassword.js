import NavBar from '../components/Navbar';
import styles from '../styles/forgotpassword.module.css';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const forgotpassword = () => {
    return(
        <>
        <NavBar />
        <div className={styles.container}>
            <h2 className={styles.containerHeading}>Forgot Password</h2>
                <h3 className={styles.containerpara}>
                    Dont't worry,<br /> reset your password
                </h3>
        </div>
    
        <div style={{fontFamily: 'Poppins',position:"relative",width:"428px"}}>
                <Form>
                    <div className={styles.signupOtpForm}>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Control type="text" placeholder="Username" required className={styles.placeholder}
                            style={{boxShadow: "none",background: "border-box"}}  />
                            <span className={styles.underline}></span>
                        </Form.Group>
                        
                    </div>

                    <p className='text-center' style={{padding:"30px",margin:"0",fontWeight:"400",fontSize:"19px",color:"#161622"}}><a>Back to sign in</a></p>
                    
                    <div className="d-grid gap-2"style={{width:"428px"}}>
                        <Button variant="primary" size="lg" type="submit"
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
                            Send Code
                        </Button>
                    </div>
                </Form>

                <p className='text-center' style={{fontWeight: "700",fontSize: "20px",paddingTop: "21px"}}>Or</p>
                <p className='text-center' style={{fontWeight:"400",fontSize:"19px",color:"#161622"}} >Don’t have an account?</p>

                <div className="d-grid gap-2"style={{width:"428px",paddingBottom:"30px"}}>
                        <Button variant="primary" size="lg" type="submit"
                        style={{
                            background: "white",
                            color: "#161622",
                            border: "1px solid #000000",
                            width: "300px",
                            padding: "1px",
                            margin: "auto",
                            fontSize: "20px",
                            fontWeight: "500"
                        }}>
                            Sign Up
                        </Button>
                    </div>


            </div>


        <JoinNewsLetter />
        <Footer />
        </>
    );
}

export default forgotpassword;