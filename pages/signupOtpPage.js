import Signupheader from '../components/signupheader';
import styles from '../styles/signupOtpPage.module.css';
import Form from 'react-bootstrap/Form';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';
import Image from 'next/image';
import RightArrow from '../public/right-arrow.png';
import Link from 'next/link';

const signupOtp = () => {
    return (
        <>
            <Signupheader />
            <div className={styles.signupContainer}>
                <div style={{ position: "relative", left: "-150px" }}>
                    <Image className={styles.rightArrow}
                        src={RightArrow}
                        alt="Picture of the author"
                        style={{
                            position: "relative",
                            display: "block", padding: "11px 16px"
                        }}
                    />
                </div>
                <p className={styles.otpTitle} style={{
                    display: "inline-block",
                    width: "297px", fontFamily: 'Poppins',
                    fontWeight: "400",
                    fontSize: "14px"
                }} >We have send you OTP to verify your
                    phone number to verify your account
                </p>

                <div className={styles.otpContent}>
                    <p>Enter OTP</p>
                </div>

                <div className={styles.signupOtpForm}>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        placeholder='Enter otp'
                        aria-describedby="passwordHelpBlock"
                        style={{ boxShadow: "none", position: "relative", left: "-12px" }}
                    />
                    
                    <Link href="/login">
                            <a className={styles.buttonVerifyCode}
                                style={{
                                    textDecoration: "none",
                                }}>Verify code</a>
                        </Link>
                    <p className={styles.footer}>Didn t  get OTP? Resend</p>
                </div>

            </div>


            <JoinNewsLetter />
            <Footer />
        </>
    );
}
export default signupOtp;