import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import PSINavbar from './components/PSINavbar'
import customs_logo from '../customs_logo.png'
import epson_logo from './assets/Epson_logo.svg'

function App() {

  function handleClickKawasanBerikat() {
    const url = window.location.href;
    const arr = url.split("/");
    const rootdomain = arr[0] + "//" + arr[2];
    
    window.open(rootdomain + '/inventory')
  }

  function handleClickIEIPage() {
    const url = window.location.href;
    const arr = url.split("/");
    const rootdomain = arr[0] + "//" + arr[2];
    
    window.open(rootdomain + '/iei')
  }

  return (
    <>
      <PSINavbar />
      <Container fluid>
        <Row xs={1} md={2} className='g-4 mt-1'>
          <Col className='text-center'>
            <Card className='p-3'>
              <Card.Img variant="top" src={customs_logo} style={{ objectFit: 'contain' }} height={250} />
              <Card.Body>
                <Card.Title>IT Inventory <span className='fst-italic'>for</span> Bea Cukai</Card.Title>
                <Card.Text>

                </Card.Text>
                <Button variant='primary' onClick={handleClickKawasanBerikat}>Kawasan Berikat</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='text-center'>
            <Card className='p-3'>
              <Card.Img variant="top" src={epson_logo} style={{ objectFit: 'contain' }} height={250} />
              <Card.Body>
                <Card.Title>PT. Epson Indonesia Industry</Card.Title>
                <Card.Text>

                </Card.Text>
                <Button variant='primary' onClick={handleClickIEIPage}>Go to Login Page</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>


      </Container>

    </>
  )
}

export default App
