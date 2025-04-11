import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

function NavBar() {
    return (
        <>
            <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container fluid>
                    <Navbar.Brand href="/">Weather-App</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                        <a className="nav-link" href="https://www.linkedin.com/in/ankur2491/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br/>
        </>
    )
}

export default NavBar;