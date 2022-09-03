import NavBar from '../components/Navbar';
import styles from '../styles/passwordverificationcode.module.css';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import Link from 'next/link';

const passwordverification = () => {
    const Router = useRouter();
    const digitValidate = (x) => {
        x.target.value = x.value.replace(/[^0-9]/g, '');
    }
    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <div className={styles.containerHeading}>
                    <h2 style={{ fontSize: "24px" }}>Verification</h2>
                    <h3 style={{ fontSize: "20px" }}>Enter Verification Code</h3>
                </div>
            </div>

            <div className='text-center' style={{ fontFamily: 'Poppins', position: "relative", width: "428px" }}>
                <Form className='mt-5'>
                    <input className={styles.otp} type="text" />
                    <input className={styles.otp} type="text" />
                    <input className={styles.otp} type="text" />
                    <input className={styles.otp} type="text" />

                    <p style={{fontWeight:"400",fontSize:"20px"}}>if you didn t receive a code! <br /> <a><strong>Resend</strong></a> </p>


                    <div className="d-grid mt-5 mb-5" style={{padding:"30px"}}>
                    <Link href="/savenewpassword">
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
                                }}> Continue</a>
                        </Link>
                    </div>
                </Form>
            </div>


            <JoinNewsLetter />
            <Footer />
        </>
    );
}

export default passwordverification;