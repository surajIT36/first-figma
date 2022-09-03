import styles from '../styles/Footer.module.css';
import Nav from 'react-bootstrap/Nav';
import Image from 'next/image';
import Facebook from '../public/facebook-1.png';
import Instagram from '../public/instagram.jpeg';
import twitter from '../public/twitter.jpeg';
import playstore from '../public/google-play-badge-1.png';

const footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.heading}>
                    <span style={{ position: "relative", left: "25px" }}>SELF<span style={{ color: "#000000" }}>MADE</span></span>
                    <img src='/Vector.png' style={{ position: "relative", right: "-43px", top: "-2px" }} />
                </div>

                <div className={styles.footerHeading}>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <h3 style={{ padding: "60px 0px 5px", fontWeight: "700" }}>CUSTOMER SERVICES</h3>
                        <div>
                            <Nav.Link href="/home" className={styles.footerLink}>Contact Us</Nav.Link>
                            <Nav.Link eventKey="link-1" className={styles.footerLink}>Track Order</Nav.Link>
                            <Nav.Link eventKey="link-2" className={styles.footerLink}>Return Order</Nav.Link>
                            <Nav.Link eventKey="link-2" className={styles.footerLink}>Cancel Order</Nav.Link>
                        </div>
                        <h3 style={{ padding: "60px 0px 5px", fontWeight: "700" }}>COMPANY</h3>
                        <div>
                            <Nav.Link href="/home" className={styles.footerLink}>About Us</Nav.Link>
                            <Nav.Link eventKey="link-1" className={styles.footerLink}>We’r Hiring</Nav.Link>
                            <Nav.Link eventKey="link-2" className={styles.footerLink}>Terms & Conditions</Nav.Link>
                            <Nav.Link eventKey="link-2" className={styles.footerLink}>Privacy Policy</Nav.Link>
                            <Nav.Link eventKey="link-2" className={styles.footerLink}>Blog</Nav.Link>
                        </div>
                        <h3 style={{ padding: "60px 0px 5px", fontWeight: "700" }}>CONNECT WITH US</h3>
                        <div>
                            <Nav.Link href="/home" className={styles.footerLink}>Contact Us</Nav.Link>
                            <Nav.Link eventKey="link-1" className={styles.footerLink}>Track Order</Nav.Link>
                            <Nav.Link eventKey="link-2" className={styles.footerLink}>Return Order</Nav.Link>
                            <Nav.Link eventKey="link-2" className={styles.footerLink}>Cancel Order</Nav.Link>
                        </div>
                    </Nav>
                </div>

                <div className={styles.footerContent}>
                    <p>
                        It is a long established fact that a
                        reader will be distracted by the re
                        adable content of a page when lo
                        oking at its layout. The point of
                        using Lorem Ipsum is that it has a
                        more-or-less normal distribution
                        of letters, as opposed to using
                        Content here, content here, m
                        aking it look like readable English.
                    </p>
                </div>

                <div className={styles.footerIcon} style={{ height: "280px" }}>
                    <div className='text-center'>
                        <Image 
                            src={playstore}
                            alt="Picture of the author"
                            style={{ width: "256px", height: "256px", position: "relative", top: "-57px", left: "35px" }}
                        />
                    </div>
                    
                    <div style={{display:"flex",justifyContent:"center",position:"relative",top: "-80px"}}>
                    <div style={{width:"64px",padding:"12px"}}>
                        <Image 
                            src={Facebook}
                            alt="Picture of the author"
                        />
                    </div>

                    <div style={{width:"64px",padding:"12px"}}>
                        <Image 
                            src={Instagram}
                            alt="Picture of the author"
                            style={{ width: "64px", borderRadius: "24%" }}
                        />
                    </div>
                    <div style={{width:"64px",padding:"12px"}}>
                        <Image 
                            src={twitter}
                            alt="Picture of the author"
                            style={{ width: "64px", borderRadius: "24%" }}
                        />
                    </div>
                    </div>

                </div>

                <p style={{ fontSize: "20px", fontFamily: 'Poppins', textAlign: "center", color: "#FFFFFF" }}>
                    It is a long established fact that
                    a reader will be distracted
                </p>

            </footer>
        </>
    );
};

export default footer;
