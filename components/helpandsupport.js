import NavBar from '../components/Navbar';
import Form from 'react-bootstrap/Form';
import styles from '../styles/helpandsupport.module.css';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';
import Button from 'react-bootstrap/Button';

const helpandsupport = () => {
    return(
        <>
        <NavBar />
        <div className={styles.container}>
            <div  className={styles.containerBody}>
            <h2 style={{fontWeight:"700",fontSize:"24px",paddingBottom: "44px",color: "#161622"}}
            >Help & Support</h2>
            <p style={{fontWeight:"500",paddingBottom:"23px",fontSize:"22px",lineHeight:"28px",color:"#F170D3"}}>Talk with our team, we’r here to help.</p>
            <h3 style={{color:"#161622",fontWeight:"500",fontSize:"22px"}}>Have a question</h3>
                    <div className={styles.paragraph}>
                        <p>The point of using Lorem Ipsum
                            is that it has amore-or-less no
                            rmal distribution of letters as
                            opposed to using Content
                            here, content here making it
                            look like readable English.
                        </p>

                        <p>The point of using Lorem Ipsum
                            is that it has amore-or-less no
                            rmal distribution of letters as
                            opposed to using Content
                            here, content here making it
                            look like readable English.
                        </p>
                    </div>

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label style={{color:"#161622",fontWeight:"500",fontSize:"22px"}}>How can our team help you?</Form.Label>
                        <Form.Control as="textarea" rows={5} style={{border:"1px solid #000000",borderRadius:"inherit"}} />
                    </Form.Group>
                    
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg"
                        style={{borderRadius:"inherit",background: "#F170D3",border:"none",fontWeight: "500",
                            fontSize:"24px",color:"#161622"}}
                        >
                            Submit
                        </Button>
                    </div>

                </Form>
            </div>
        </div>

        <JoinNewsLetter />
        <Footer />
        </>
    );
}

export default helpandsupport;