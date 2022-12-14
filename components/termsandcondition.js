import NavBar from '../components/Navbar';
import styles from '../styles/termsandcondition.module.css';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';



const termsandconditions = () => {
    return(
        <>
        <NavBar />
        <div className={styles.container}>
                <div className={styles.containerBody}>
                    <h2 style={{ fontWeight: "700", fontSize: "24px", paddingBottom: "20px", color: "#161622" }}>
                        Terms & Conditions
                    </h2>
                    
                    <h4 style={{position:"relative",top:"12px",fontWeight: "700",fontSize: "16px",
                    lineHeight: "24px",color: "#000000"}}
                    >The point of using Lorem Ipsum is that it has amore-or-less normal.
                    </h4>

                    <div className={styles.paragraph}>
                        <p>
                            The point of using Lorem Ipsum
                            is that it has amore-or-less no
                            rmal distribution of letters as
                            opposed to using Content
                            here, content here making it
                            look like readable English.
                        </p>

                        <p>
                            The point of using Lorem Ipsum
                            is that it has amore-or-less no
                            rmal distribution of letters as
                            opposed to using Content
                            here, content here making it
                            look like readable English.
                        </p>

                        <p>
                            The point of using Lorem Ipsum
                            is that it has amore-or-less no
                            rmal distribution of letters, as
                            opposed to using Content
                            here, content here making it
                            look like readable English.
                        </p>

                        <p style={{color:"#F170D3",fontWeight: "500"}}>Latest Update</p>  
                        <p style={{color:"#F170D3",fontWeight: "500"}}> 9th sept 2022</p>
                    </div>  
                    

                     
            </div>
        </div>

        <JoinNewsLetter />
        <Footer />
        </>
    );
}

export default termsandconditions;