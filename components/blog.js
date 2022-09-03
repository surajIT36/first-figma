import NavBar from '../components/Navbar';
import styles from '../styles/blog.module.css';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';
import Link from 'next/link';


const helpandsupport = () => {
    return(
        <>
        <NavBar />
        <div className={styles.container}>
                <div className={styles.containerBody}>
                    <h2 style={{ fontWeight: "700", fontSize: "24px", paddingBottom: "20px", color: "#161622" }}>Blog</h2>
                    <span
                        style={{ position: "absolute", left: "293px", top: "86px", fontWeight: "500", fontSize: "15px", color: "#F170D3" }}
                    >clear all</span>
                    <div className={styles.paragraph}>
                        <p>The point of using Lorem Ipsum
                            is that it has amore-or-less no
                            rmal distribution of letters, as
                            opposed to using Content
                            here, content here making it
                            look like readable English.
                        </p>
                    </div>

                   

                    <h4 style={{position:"relative",top:"12px",fontWeight: "700",fontSize: "16px",
                    lineHeight: "24px",color: "#000000"}}
                    >The point of using Lorem Ipsum is that it has amore-or-less normal.
                    </h4>

                    <p style={{fontStyle: "normal",paddingTop: "25px",width: "302px",fontWeight: "400",
                        fontSize: "15px",lineHeight: "22px",color: "#000000"}}>
                            The point of using Lorem Ipsum
                            is that it has amore-or-less no
                            rmal distribution of letters, as
                            opposed to using Content
                            here, content here making it
                            look like readable English.</p>
                    <Link href="/blog/blogdetails">
                        <a
                        style={{   
                            fontFamily: "Poppins",
                            background: "rgb(241, 112, 211)",
                            borderRadius: "5px",
                            fontWeight: "500",
                            fontSize: "15px",
                            color: "rgb(22, 22, 34)",
                            padding: "7px",
                            textDecoration: "none"}}
                        >Read More</a>
                    </Link>
            </div>
        </div>

        <JoinNewsLetter />
        <Footer />
        </>
    );
}

export default helpandsupport;