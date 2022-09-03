import NavBar from '../components/Navbar';
import styles from '../styles/notification.module.css';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';


const helpandsupport = () => {
    return(
        <>
        <NavBar />
        <div className={styles.container}>
            <div  className={styles.containerBody}>
            <h2 style={{fontWeight:"700",fontSize:"24px",paddingBottom: "20px",color: "#161622"}}
            >Notification</h2>
                    <span
                    style={{position:"absolute",left:"293px",top:"86px",fontWeight:"500",fontSize:"15px",color:"#F170D3"}}
                    >clear all</span>
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

                
            </div>
        </div>

        <JoinNewsLetter />
        <Footer />
        </>
    );
}

export default helpandsupport;