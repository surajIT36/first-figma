import Navbar from "../components/Navbar";
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';
import { useState } from "react";
import styles from '../styles/faqpage.module.css';

const fac = [
    {
        id: 1,
        heading: "Registration and My Account",
        ques: "How do I unsubscribe fron your services?",
        ans: "Click to the unsubscribe option from “My Account” section."
    },
    {
        id: 2,
        heading: "Our Store",
        ques: "How do I unsubscribe fron your services?",
        ans: "Click to the unsubscribe option from “My Account” section."
    },
    {
        id: 3,
        heading: "Subscription",
        ques: "How do I unsubscribe fron your services?",
        ans: "Click to the unsubscribe option from “My Account” section."
    },
    {
        id: 4,
        heading: "Delivery",
        ques: "How do I unsubscribe fron your services?",
        ans: "Click to the unsubscribe option from “My Account” section."
    },
    {
        id: 5,
        heading: "Orders & Payments",
        ques: "How do I unsubscribe fron your services?",
        ans: "Click to the unsubscribe option from “My Account” section."
    },
    {
        id: 5,
        heading: "Get in touch with us",
        ques: "How do I unsubscribe fron your services?",
        ans: "Click to the unsubscribe option from “My Account” section."
    }
]

const faqPage = () => {

    return (
        <>
            <Navbar />

            <div style={{ width: "428px", fontFamily: "Poppins",paddingBottom:"50px"}}>
                <h2 className={styles.heading}>FAQ</h2>
                {
                    fac.map((x, _id) => {
                        const [show, setShow] = useState(false);
                        return (
                            <>
                                <div key={_id} className='py-1' style={{ borderBottom: "2px solid #B6B6B6"}}>
                                    <h3 style={{lineHeight:"0px",padding:"20px",fontWeight: "500", fontSize: "20px",backgroundColor: show ? '#D9D9D9' : '' }}>
                                        {x.heading} <span style={{ float: "right", cursor: "pointer" }} onClick={() => setShow(!show)}>{show ? "-" : "+"}</span> </h3>
                                    {show &&
                                        <div style={{ fontWeight: "500", fontSize: "20px",margin:"20px" }} >
                                            <h4 >Q. {x.ques}</h4>
                                            <p style={{ fontWeight: "400" }} >{x.ans}</p>
                                        </div>
                                    }
                                </div>
                            </>
                        )
                    })
                }

            </div>

            <JoinNewsLetter />
            <Footer />
        </>
    );
};

export default faqPage;