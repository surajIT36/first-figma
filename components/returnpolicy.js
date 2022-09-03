import NavBar from '../components/Navbar';
import styles from '../styles/returnpolicy.module.css';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';
import Button from 'react-bootstrap/Button';


const returnpolicy = () => {
    return(
        <>
        <NavBar />
        <div className={styles.container}>
                <div className={styles.containerBody}>
                    <h2 style={{ fontWeight: "700",paddingBottom:"20px",fontSize: "24px",color: "#161622" }}>
                        Return Policy
                    </h2>

    
                    <div>
                        <h3 style={{fontSize:"20px"}}>Order Shipped to Address</h3>
                        <div className={styles.paragraph}>
                            <p style={{ fontWeight: "400", fontSize: "16px" }}>
                                It is a long established fact that a reader
                                will be distracted by the readable content
                                of a page when looking at its layout. The
                                point of using Lorem Ipsum is that it has a
                                more-or-less normal distribution of letters,
                                as opposed to using 'Content here, content
                                here', making it look like readable English.
                                Many desktop publishing packages and
                                web page editors now use Lorem Ipsum as
                                their default model text, and a search for
                                'lorem ipsum' will uncover many web sites
                                still in their infancy.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 style={{fontSize:"20px",fontWeight:"500"}}>Order Shipped to Address</h3>
                        <div className={styles.paragraph}>
                            <p >
                                It is a long established fact that a reader
                                will be distracted by the readable content
                                of a page when looking at its layout. The
                                point of using Lorem Ipsum is that it has a
                                more-or-less normal distribution of letters,
                                as opposed to using 'Content here, content
                                here', making it look like readable English.
                                Many desktop publishing packages and
                                web page editors now use Lorem Ipsum as
                                their default model text, and a search for
                                'lorem ipsum' will uncover many web sites
                                still in their infancy.
                            </p>

                            <p><span style={{fontSize:"20px"}}>1.</span> It is a long established fact that a reader
                                will be distracted by the readable content
                                of a page when looking at its layout.
                            </p>

                            <p><span style={{fontSize:"20px"}}>2.</span> It is a long established fact that a reader
                                will be distracted by the readable content
                                of a page when looking at its layout.
                            </p>

                            <p><span style={{fontSize:"20px"}}>3.</span> It is a long established fact that a reader
                                will be distracted by the readable content
                                of a page when looking at its layout.
                            </p>

                            <p><span style={{fontSize:"20px"}}>4.</span> It is a long established fact that a reader
                                will be distracted by the readable content
                                of a page when looking at its layout.
                            </p>

                        </div>
                    </div>


                     
            </div>
        </div>

        <JoinNewsLetter />
        <Footer />
        </>
    );
}

export default returnpolicy;