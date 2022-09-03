import styles from '../styles/TshirtsPage.module.css';
import Card from 'react-bootstrap/Card';

const cardImg = [
    {
        id: 1,
        src: '/T-img-3.png',
        caption: 'Grey cotton tshirt',
        dec: 'Description goes here...',
        amount: '849'    
    },
    {
        id: 1,
        src: '/T-img-3.png',
        caption: 'Grey cotton tshirt',
        dec: 'Description goes here...',
        amount: '849'    
    }
]

const Tshirts = () => {
    return(
        <>
        <div style={{width:"428px",fontFamily:'Poppins',color:"#161622"}}>
                <div className='text-center'>
                    <p style={{ fontWeight: "700", fontSize: "20px" }}>Tshirts now available in new trends</p>
                    <h2 style={{ fontWeight: "400", fontSize: "24px" }}>Now in new colors</h2>
                </div>

                <div className='text-center' style={{
                    width: "183px",
                    position: "relative",
                    top: "15px",
                    left: "34px",
                    paddingBottom: "20px" }}>
                    <p style={{ fontWeight: "700", fontSize: "32px", border: "7px solid #F170D3" }}>FOR HIM  </p>
                </div>

                <div className='text-center'>
                    <img src='/T-img-1.png' />
                </div>

                <div className={styles.forher}>
                    <p style={{ fontWeight: "700", fontSize: "32px"}}>FOR HER <span style={{left:"20px",position:"relative"}}><img src='/arrow-up-2.png' /></span></p>
                </div>

                <div className='text-center'>
                    <img src='/T-img-2.png' />
                    <p style={{fontWeight:"700",fontSize:"20px",padding:"25px"}}>Recommended</p>
                </div>

                {cardImg.map((x,_id)=>{
                    return(
                        <>
                            <div key={_id} style={{display:"flex",justifyContent:"center",padding:"20px"}}>
                                <Card className={styles.tContainer}>
                                    <Card.Img variant="top" src={x.src} />
                                    <Card.Body style={{margin:"10px"}}>
                                        <Card.Title style={{position:"relative",top: "-18px",fontWeight:"400",fontSize:"28px"}} >{x.caption}</Card.Title>
                                        <Card.Text className={styles.description}>{x.dec}</Card.Text>
                                        <p style={{
                                            position: "relative",top: "-37px",fontWeight:"500",fontSize:"18px"}}>
                                                ₹ {x.amount} <span style={{color: "#919191", position:"relative",left:"12px"}}><del> ₹ {x.amount}</del></span>
                                        </p>
                                    </Card.Body>
                                </Card>
                            </div>
                        </>
                    )
                })}
        </div>
        
        </>
    );
};

export default Tshirts;