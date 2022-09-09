import Navbar from '../components/Navbar';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';
import Image from 'next/image';
import styles from '../styles/account.module.css';
import Link from 'next/link';
import More from '../public/more.png';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';


const accountList = [
  {
    id: 1,
    src: '/order.png',
    list: 'Orders',
    link: '/account/order',
  },
  {
    id: 2,
    src: '/wishlist.png',
    list: 'Wishlist',
    link: '/account/wishlist',
  },
  {
    id: 3,
    src: '/address.png',
    list: 'Addresses',
    link: '/account/address',
  },
  {
    id: 4,
    src: '/profile.png',
    list: 'Profile',
    link: '/account/profile',
  },
  {
    id: 5,
    src: '/credit-card.png',
    list: 'Credits',
    link: '/account/credit',
  },
  {
    id: 6,
    src: '/returns.png',
    list: 'Returns',
    link: '/account/returns',
  },
  {
    id: 7,
    src: '/password.png',
    list: 'Password',
    link: '/account/password',
  },
]

const account = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar />

      <div style={{ fontFamily: 'Poppins', width: "428px" }}>
        <div style={{ padding: "27px 68px 20px" }}>
          <p style={{ margin: "0", lineHeight: "40px", fontWeight: "700", color: "#B6B6B6", fontSize: "16px" }}>Home &gt; Account</p>

          <div>
            <Image src={More} alt="Picture of the author" onClick={handleShow} />
            <span style={{ fontWeight: "700", fontSize: "24px", padding: "15px" }}>Account</span>
            <p style={{ lineHeight: "12px", paddingLeft: "33px" }}>surajsingh@gmail.com</p>
          </div>

          <Offcanvas show={show} onHide={handleClose} style={{
            position: "absolute",
            width: "244px",
            height: "633px",
            left: "55px",
            top: "106px",
            background: "#F2F2F2",
            boxShadow: "3px 1px 4px rgb(0 0 0 / 25%)",
          }}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title><h2>Overview</h2></Offcanvas.Title>

            </Offcanvas.Header>
            <Offcanvas.Body>
              <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: .5,
                borderColor: '#000000'
              }} />
              <div>
                <ul style={{ listStyle: "none" }}>
                  <li className='py-1'>
                    <Link href="/account">
                      <a className={styles.link} style={{ fontWeight: "500", fontSize: "22px" }}>ACCOUNT</a>
                    </Link>
                  </li>
                  <li className='py-1'>
                    <Link href="account/profile">
                      <a className={styles.link}>Profile</a>
                    </Link>
                  </li>
                  <li className='py-1'>
                    <Link href="/savenewpassword">
                      <a className={styles.link}>Change Password</a>
                    </Link>
                  </li>
                  <li className='py-1'>
                    <Link href="/account/address">
                      <a className={styles.link}>Addresses</a>
                    </Link>
                  </li>
                  <li className='py-1'>
                    <Link href="/account/wishlist">
                      <a className={styles.link}>Wishlist</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <hr style={{
                color: '#000000',
                backgroundColor: '#000000',
                height: .5,
                borderColor: '#000000'
              }} />
              <div>
                <ul style={{ listStyle: "none" }}>
                  <li className='py-1'>
                    <Link href="/account">
                      <a className={styles.link} style={{ fontWeight: "500", fontSize: "22px" }}>ACCOUNT</a>
                    </Link>
                  </li>
                  <li className='py-1'>
                    <Link href="/account/profile">
                      <a className={styles.link}>Profile</a>
                    </Link>
                  </li>
                  <li className='py-1'>
                    <Link href="/savenewpassword">
                      <a className={styles.link}>Change Password</a>
                    </Link>
                  </li>
                  <li className='py-1'>
                    <Link href="/account/address">
                      <a className={styles.link}>Addresses</a>
                    </Link>
                  </li>
                  <li className='py-1'>
                    <Link href="/account/wishlist">
                      <a className={styles.link}>Wishlist</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>

        {accountList.map((x, _id) => {
          return (
            <>
              <div className={styles.listContainer}>
                <div className={styles.listmain}>
                  <div>
                    <Image src={x.src} width={25} height={25} alt='account src' />
                  </div>
                  <div style={{ paddingLeft: "20px" }}>
                    <Link href={`${x.link}`}><a style=
                      {{ textDecoration: "none", color: "#161622", fontWeight: "500", fontSize: "20px" }}>{x.list}</a></Link>
                  </div>
                </div>
              </div>
            </>
          )
        })}


      </div>

      <JoinNewsLetter />
      <Footer />
    </>
  );
}


export default account;