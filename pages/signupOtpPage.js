import Signupheader from '../components/signupheader';
import styles from '../styles/signupOtpPage.module.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';

const signupOtp = () => {
    return (
        <>
            <Signupheader />
            <div className={styles.signupContainer}>
                <img src='/right-arrow.png' className={styles.rightArrow} style={{
                    position: "relative",
                    display: "block", padding: "11px 16px"
                }} />
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
                        style={{boxShadow: "none", position: "relative", left: "-12px" }}
                    />
                    <Button variant="primary" className={styles.buttonVerifyCode}>Verify Code</Button>{' '}
                    <p className={styles.footer}>Didn’t  get OTP? Resend</p>
                </div>

            </div>


            <JoinNewsLetter />
            <Footer />
        </>
    );
}

export default signupOtp;