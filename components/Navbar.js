import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/NavBar.module.css';
import Vector from '../public/Vector1.png';
import More from '../public/more.png';
import User from '../public/user.png';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

const index = () => {
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
              <Image src={Vector} alt="Picture of the author" />
            </div>

            <div>
              <Image src={More} alt="Picture of the author" onClick={handleShow} />
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>


      <Offcanvas show={show} onHide={handleClose} style={{ width: "220px", height: "100vh" }}>
        <Offcanvas.Header closeButton className={styles.offcanvasHeader}>
          <Offcanvas.Title style={{ display: "flex", justifyContent: "space-around", width: "130px" }}>
            <div>
              <span className={styles.heading}>SELF<span style={{ color: "#000000" }}>MADE</span></span>
            </div>
            <div>
              <Image src={Vector} alt="Picture of the author" />
            </div>

            <Row style={{ position: "absolute", top: "88px", left: "25px" }}>
              <Col>
                <div>
                  <Image src={User} alt="Picture of the author" />
                </div>
              </Col>

              <Col style={{ lineHeight: "10px" }}>
                <p>Suraj</p>
                <p>suraj@007</p>
              </Col>
            </Row>



          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ backgroundColor: "#AFEEEE" }}>

          <div>
            <ul style={{ listStyleType: "none", fontFamily: "Poppins", }}>
              <li>
                <Link href="/">
                  <a className={styles.sideLink}>Search</a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a className={styles.sideLink}>Login</a>
                </Link>
              </li>
              <li>
                <Link href="/blog/hello-world">
                  <a className={styles.sideLink}>Help</a>
                </Link>
              </li>
              <li>
                <Link href="/blog/hello-world">
                  <a className={styles.sideLink}>Cart</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className={styles.sideLinks}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/shop">
                  <a className={styles.sideLinks}>Shop</a>
                </Link>
              </li>
              <li>
                <Link href="/wishlist">
                  <a className={styles.sideLinks}>Wishlist</a>
                </Link>
              </li>
              <li>
                <Link href="/notification">
                  <a className={styles.sideLinks}>Notification</a>
                </Link>
              </li>
              <li>
                <Link href="/helpandsupport">
                  <a className={styles.sideLinks}>Help & Support</a>
                </Link>
              </li>
              <li>
                <Link href="/setting">
                  <a className={styles.sideLinks}>Setting</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className={styles.sideLinks}>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className={styles.sideLink}>Logout</a>
                </Link>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>




    </>
  );
}

export default index;