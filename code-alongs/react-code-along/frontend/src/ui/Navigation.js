import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export function Navigation () {
  return(
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Title</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/about">link1</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}