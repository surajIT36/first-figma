import styles from '../styles/Footer.module.css';
import Nav from 'react-bootstrap/Nav';

const footer = () => {
    return(
        <>
            <footer className={styles.footer}>
                <div className={styles.heading}>
                    <div className={styles.SELFMADE}>
                        <p>SELF<span style={{color:"#000000"}}>MADE</span></p>
                        <img src='/Vector.png' className={styles.Vector}/>
                    </div>
                </div>
                
                <div className={styles.footerHeading}>
                    <Nav defaultActiveKey="/home" className="flex-column">
                        <h1 style={{padding:"25px 0px 10px"}}>CUSTOMER SERVICES</h1>
                        <div>
                            <Nav.Link href="/home"  className={styles.footerLink}>Contact Us</Nav.Link>
                            <Nav.Link eventKey="link-1"  className={styles.footerLink}>Track Order</Nav.Link>
                            <Nav.Link eventKey="link-2"  className={styles.footerLink}>Return Order</Nav.Link>
                            <Nav.Link eventKey="link-2"  className={styles.footerLink}>Cancel Order</Nav.Link>
                        </div>
                        <h1 style={{padding:"25px 0px 10px"}}>COMPANY</h1>
                        <div>
                            <Nav.Link href="/home"  className={styles.footerLink}>About Us</Nav.Link>
                            <Nav.Link eventKey="link-1"  className={styles.footerLink}>We’r Hiring</Nav.Link>
                            <Nav.Link eventKey="link-2"  className={styles.footerLink}>Terms & Conditions</Nav.Link>
                            <Nav.Link eventKey="link-2"  className={styles.footerLink}>Privacy Policy</Nav.Link>
                            <Nav.Link eventKey="link-2"  className={styles.footerLink}>Blog</Nav.Link>
                        </div>
                        <h1 style={{padding:"25px 0px 10px"}}>CONNECT WITH US</h1>
                        <div>
                            <Nav.Link href="/home"  className={styles.footerLink}>Contact Us</Nav.Link>
                            <Nav.Link eventKey="link-1"  className={styles.footerLink}>Track Order</Nav.Link>
                            <Nav.Link eventKey="link-2"  className={styles.footerLink}>Return Order</Nav.Link>
                            <Nav.Link eventKey="link-2"  className={styles.footerLink}>Cancel Order</Nav.Link>
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
                        'Content here, content here', m
                        aking it look like readable English.
                    </p>
                </div>

                <div className={styles.footerIcon}>
                    <img src='/facebook-1.png' className={styles.Vector} />
                    <img src='/facebook-1.png' className={styles.Vector} />
                    <img src='/facebook-1.png' className={styles.Vector} />
                </div>

                <p className={styles.footerPara}>
                    It is a long established fact that
                    a reader will be distracted 
                </p>

            </footer>
        </>
    );
};

export default footer;
