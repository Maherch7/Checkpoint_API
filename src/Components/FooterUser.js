import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const FooterUser=()=>{
    return(
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Users List by Maher
          </Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default FooterUser