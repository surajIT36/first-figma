// import Image from 'next/image'
import styles from "../styles/bestcategories.module.css";

const bestCategories = () => {
    return(
        <>
            <div style={{width:"428px"}}>
                <div>
                    <h3 className="text-center">Best Categories</h3>
                    <div className={styles.img1}>
                        <h4>Women</h4>
                    </div>
                    <div className={styles.img2} >Men</div>
                    <div className={styles.img3} >Groups</div>
                </div>
            </div>
        
        </>
    );
}

export default bestCategories;