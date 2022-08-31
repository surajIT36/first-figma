import NavBar from '../components/Navbar';
import styles from '../styles/signupheader.module.css';

const signupheader = () => {
    return(
        <>
        <NavBar />
        <div className={styles.container}>
            <h2 className={styles.containerHeading}>Sign Up</h2>
                <h3 className={styles.containerpara}>
                    To use all features of the application
                </h3>
        </div>
        </>
    );
}

export default signupheader;