import NavBar from '../components/Navbar';
import styles from '../styles/ourpolicies.module.css';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';
import Button from 'react-bootstrap/Button';


const ourpolicies = () => {
    return(
        <>
        <NavBar />
        <div className={styles.container}>
                <div className={styles.containerBody}>
                    <h2 style={{ fontWeight: "700", fontSize: "24px", paddingBottom: "20px", color: "#161622" }}>
                        Our Policies
                    </h2>

                    <div className="d-grid gap-3" style={{margin:"auto",width:"276px",paddingBottom:"56px"}}>
                        <Button variant="primary" size="lg"
                        style={{
                            color: "#FFFFFF",
                            fontWeight: "500",
                            border: "1px solid #F170D3",
                            padding: "2px",
                            background: "#F170D3"
                        }}>
                            Privacy Policies
                        </Button>

                        <Button variant="outline-primary" size="lg"
                        style={{
                            color: "#F170D3",
                            fontWeight: "500",
                            border: "1px solid #F170D3",
                            padding: "2px",
                            background: "#FFFFFF"
                        }}>
                            Custom Duty
                        </Button>

                        <Button variant="outline-primary" size="lg"
                        style={{
                            color: "#F170D3",
                            fontWeight: "500",
                            border: "1px solid #F170D3",
                            padding: "2px",
                            background: "#FFFFFF"
                        }}>
                            Secure Shopping
                        </Button>

                    </div>
                    
                    <h3 style={{fontSize: "20px",color: "#F170D3"}}>Privacy Policies</h3>
                    <h4 style={{position:"relative",top:"12px",fontWeight: "700",fontSize: "16px",
                    lineHeight: "24px",color: "#000000"}}
                    >The point of using Lorem Ipsum is that it has amore-or-less normal.
                    </h4>

                    <div className={styles.paragraph}>
                        <p>
                            The point of using Lorem Ipsum
                            is that it has amore-or-less no
                            rmal distribution of letters, as
                            opposed to using 'Content
                            here, content here', making it
                            look like readable English.
                        </p>

                        <p>
                            The point of using Lorem Ipsum
                            is that it has amore-or-less no
                            rmal distribution of letters, as
                            opposed to using 'Content
                            here, content here', making it
                            look like readable English.
                        </p>

                        <p>
                            The point of using Lorem Ipsum
                            is that it has amore-or-less no
                            rmal distribution of letters, as
                            opposed to using 'Content
                            here, content here', making it
                            look like readable English.
                        </p>

                    </div>  
                    

                     
            </div>
        </div>

        <JoinNewsLetter />
        <Footer />
        </>
    );
}

export default ourpolicies;