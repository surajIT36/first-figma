import NavBar from '../components/Navbar';
import styles from '../styles/blogdetails.module.css';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';
import Image from 'next/image';
import slide from '../public/slide-1.png';


const blogdetails = () => {
    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <div className={styles.containerBody}>
                    <h2 style={{ fontWeight: "700", fontSize: "24px", paddingBottom: "20px", color: "#161622" }}>Blog</h2>
                    <div>
                        <Image
                            src={slide}
                            alt="Picture of the author"
                        />
                    </div>
                    <h4 style={{
                        position: "relative", top: "12px", fontWeight: "700", fontSize: "16px",
                        lineHeight: "24px", color: "#000000"
                    }}
                    >The point of using Lorem Ipsum is that it has amore-or-less normal.
                    </h4>

                    <div className={styles.paragraph}>
                        <p>
                            The point of using Lorem Ipsum
                            is that it has amore-or-less no
                            rmal distribution of letters, as
                            opposed to using Content
                            here, content here, making it
                            look like readable English.
                        </p>

                        <p>
                            The point of using Lorem Ipsum
                            is that it has amore-or-less no
                            rmal distribution of letters, as
                            opposed to using Content
                            here, content here, making it
                            look like readable English.
                        </p>
                        <p style={{ color: "#F170D3", fontWeight: "500" }}>Shubham</p>
                        <p style={{ color: "#F170D3", fontWeight: "500" }}> 9th sept 2022</p>
                    </div>



                </div>
            </div>

            <JoinNewsLetter />
            <Footer />
        </>
    );
}

export default blogdetails;