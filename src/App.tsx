import { Container, Image, Row, Col, Button } from 'react-bootstrap'
import PSINavbar from './components/PSINavbar'
import customs_logo from '../customs_logo.png'
function App() {

  function handleClickKawasanBerikat() {
    const url = window.location.href;
    const arr = url.split("/");
    const rootdomain = arr[0] + "//" + arr[2];
    console.log(rootdomain)
    window.open(rootdomain + '/inventory')
  }

  return (
    <>
      <PSINavbar />
      <Container fluid>
        <Row>
          <Col className='text-center'>
            <Image src={customs_logo} className='w-25' />
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <p className='fs-1' style={{ textShadow: '1px 2px #808080' }}>IT Inventory <span className='fst-italic'>for</span> Bea Cukai</p>
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <Button variant='primary' onClick={handleClickKawasanBerikat}>Kawasan Berikat</Button>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default App
