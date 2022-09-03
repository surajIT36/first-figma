import NavBar from '../components/Navbar';
import styles from '../styles/forgotpassword.module.css';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import Link from 'next/link';


const forgotpassword = () => {
    const Router = useRouter();
    return (
        <>
        <NavBar />
        <div className={styles.container}>
                <div className={styles.containerHeading}>
                    <h2 style={{fontSize: "24px"}}>Forgot Password</h2>
                    <h3 style={{fontSize: "20px"}}>Don't worry,<br /> reset ypur password</h3>
                </div>
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

                    <p className='text-center' style={{ padding: "30px", margin: "0", fontWeight: "400", fontSize: "19px", color: "#161622" }}>
                        <Link href="/login"><a style={{
                            textDecoration: "none",
                            fontFamily: "Poppins",
                            color: "#161622",
                        }}>
                            Back to sign in</a></Link></p>
                    
                    <div className="d-grid gap-2"style={{width:"428px",padding: "30px"}} >
                        <Link href="/passwordverificationcode">
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
                                }}> Send Code</a>
                        </Link>
                    </div>
                </Form>

                <p className='text-center' style={{fontWeight: "700",fontSize: "20px",paddingTop: "21px"}}>Or</p>
                <p className='text-center' style={{fontWeight:"400",fontSize:"19px",color:"#161622"}} >Don’t have an account?</p>

                <div className="d-grid gap-2"style={{width:"428px",paddingBottom:"30px"}}>
                        <Button variant="primary" size="lg" type="submit" onClick={() => Router.push('/signup')}
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


            </div >


        <JoinNewsLetter />
        <Footer />
        </>
    );
}

export default forgotpassword;