import Navbar from '../components/Navbar';
import JoinNewsLetter from '../components/joinnewsLetter';
import Footer from '../components/footer';
import Link from 'next/link';

const add = [
    {
        id: 1,
        add1: 'House No.-245, Flat no.- 3, Behind Shree',
        add2: 'Apartment, Road no.- 6',
        landmark: 'Lajpat Nagar, Delhi',
        pincode: 'Pin code- 536254',
    },
    {
        id: 2,
        add1: 'House No.-245, Flat no.- 3, Behind Shree',
        add2: 'Apartment, Road no.- 6',
        landmark: 'Lajpat Nagar, Delhi',
        pincode: 'Pin code- 536254',
    },
    {
        id: 3,
        add1: 'House No.-245, Flat no.- 3, Behind Shree',
        add2: 'Apartment, Road no.- 6',
        landmark: 'Lajpat Nagar, Delhi',
        pincode: 'Pin code- 536254',
    },
    {
        id: 4,
        add1: 'House No.-245, Flat no.- 3, Behind Shree',
        add2: 'Apartment, Road no.- 6',
        landmark: 'Lajpat Nagar, Delhi',
        pincode: 'Pin code- 536254',
    },
]
const address = () => {
    return (
        <>
            <Navbar />

            <div style={{ fontFamily: 'Poppins' }}>
                <p style={{
                    margin: "0", 
                    lineHeight: "40px", 
                    fontWeight: "700", 
                    color: "#B6B6B6", 
                    fontSize: "16px", 
                    paddingLeft: "15px" 
                    }}>
                    Home &gt; Account &gt; Addresses</p>

                <div>
                    <div style={{ marginLeft: "24px" }}>
                        <h2 style={{fontWeight:"24px",fontWeight: "700", margin: "0", lineHeight: "30px" }}>Addresses</h2>
                        <p style={{fontWeight:"400",fontSize: "15px"}}>ucetsuraj@gmail.com</p>
                    </div>
                    {add.map((x, _id) => {
                        return (
                            <>
                                <div style={{
                                    background: "#F2F2F2",
                                    borderRadius: "6px",
                                    lineHeight: "16px",
                                    padding: "20px",
                                    width: "381px",
                                    margin: "24px"
                                }}>
                                    <div style={{
                                        fontWeight: "400",
                                        fontSize: "16px",
                                    }}>
                                        <p>{x.add1}</p>
                                        <p>{x.add2}</p>
                                        <p>{x.landmark}</p>
                                        <p>{x.pincode}</p>
                                    </div>
                                </div>
                            </>
                        );
                    })}

                    <div style={{
                        border: "1px solid #000000",
                        borderRadius: "6px",
                        textAlign: "center",
                        margin: "24px",
                        width: "382px",
                        lineHeight: "35px",
                    }}>
                        <Link href='/account/addnewaddress'><a style={{ 
                            color: "#161622", 
                            textDecoration: "none", 
                            fontWeight: "400", 
                            fontSize: "16px" 
                            }}>
                            + Add Addresses</a></Link>
                    </div>

                </div>


            </div>
            <JoinNewsLetter />
            <Footer />
        </>
    );
}

export default address;