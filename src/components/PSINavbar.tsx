import { Container, Image, Navbar } from "react-bootstrap"
import compandy_logo from '../../company_logo.png'

export default function PSINavbar() {
    return (
        <Navbar className="bg-body-white border-bottom">
            <Container fluid>
                <Image src={compandy_logo} rounded />
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className='fw-bolder fs-2'>
                        PT. SMT Indonesia
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}