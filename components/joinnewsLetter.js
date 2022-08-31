import styles from '../styles/JoinNewsLetter.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const newsLetter =() => {
  return (
    <Container fluid="md">
      <Row>
        <Col style={{padding:"0px"}}>
        <div className={styles.container}>
            <div className={styles.containerHeading}>
                <h2 style={{fontSize: "24px",color: "#FFFFFF"}}>Join your Newsletter</h2>
                <h4 style={{fontWeight: "400",fontSize: "16px",lineHeight: "24px",color: "#E5E5E5"}}>
                    Subscribe to our newsletter and get 10% off on your first purchase</h4> 
            </div>
                
            <div style={{display:"flex",fontFamily: 'Poppins'}}>
                <p style={{fontSize: "22px",paddingLeft: "44px"}}>Your email address</p>
                <img src='/arrow-up-2.png' style={{position:"absolute",left:"346px"}}/>
            </div>      
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default newsLetter;