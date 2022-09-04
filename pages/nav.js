import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/NavBar.module.css';
import Vector from '../public/Vector1.png';
import More from '../public/more.png';
import User from '../public/user.png';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function BrandExample() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <Navbar style={{ background: "#AFEEEE", width: "178px", height: "34px" }}>
                <Container>
                    <Navbar.Brand style={{ display: "contents" }}>
                        <div>
                            <span className={styles.heading}>SELF<span style={{ color: "#000000" }}>MADE</span></span>
                        </div>

                        <div>
                            <Image
                                src={Vector}
                                alt="Picture of the author"
                            />
                        </div>

                        <div>
                            <Image
                                src={More}
                                alt="Picture of the author"
                                onClick={handleShow}
                            />
                        </div>
                    </Navbar.Brand>
                </Container>
            </Navbar>

            {/* Left Slider  */}

            <Offcanvas show={show} onHide={handleClose} backdrop="static" style={{width:"212px"}}>
                <Offcanvas.Header closeButton style={{padding:"0px"}}>
                    <Offcanvas.Title>
                    <Navbar className={styles.navBar}>
                <Container style={{justifyContent:"unset",position:"absolute",top:"11px"}}>
                    <Navbar.Brand style={{ display: "contents" }}>
                        <div className={styles.heading}>
                            <span >SELF<span style={{ color: "#000000" }}>MADE</span></span>
                        </div>

                        <div style={{paddingLeft:"10px"}}>
                            <Image
                                src={Vector}
                                alt="Picture of the author"
                            />
                        </div>

                        

                    </Navbar.Brand>
                </Container>
            </Navbar>
                    </Offcanvas.Title>
                   
                   
                 
                </Offcanvas.Header>
                <Offcanvas.Body>
                <div style={{display:"flex",fontFamily:'Poppins',position:"absolute",top:"74px",left:"25px"}}>
                            <div>
                                <Image 
                                src={User}
                                alt="Picture of the author"
                                />
                            </div>
                            <div style={{position:"relative",left:"20px"}}>
                                <h3 style={{fontWeight:"400",fontSize:"20px",lineHeight:"15px"}}>Satvik</h3>
                                <h4 style={{fontWeight:"400",fontSize:"16px"}}>Satvik.123</h4>
                            </div>
                        </div>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default BrandExample;




{/* <div style={{width:"428px",fontFamily:'Poppins',color:"#161622"}}>
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
        </div> */}