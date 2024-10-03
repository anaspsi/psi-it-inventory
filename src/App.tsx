import { useState } from 'react'
import './App.css'
import { Container, Navbar } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              PT. SMT Indonesia
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  )
}

export default App
