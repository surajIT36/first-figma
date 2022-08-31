import styles from '../styles/NavBar.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavBar = () => {
  return (
      <>
      <Container fluid>
      <Row>
        <Col style={{padding:"0px"}}>
          <div className={styles.navContainer}>
              <span className={styles.heading}>SELF<span style={{ color: "#000000" }}>MADE</span></span>
              <img src='/vector1.png' />
              <img src='/more.png' style={{position:"absolute",top:"9px",left:"153px"}} />
          </div>
        </Col>
      </Row>
    </Container>
         
      </>
  );
}

export default NavBar;



