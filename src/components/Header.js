import React from 'react';

import { Navbar , Nav, NavDropdown, Form , FormControl
,Button }  from 'react-bootstrap';


export default props =>
<header className="header">
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Loja de Roupas </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Ofertas</Nav.Link>
      <NavDropdown title="Estoques" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Queima de Estoque</NavDropdown.Item>
        <NavDropdown.Divider />

            <NavDropdown.Item href="#action/3.2">Roupas Femininas </NavDropdown.Item>
        <NavDropdown.Divider />

        <NavDropdown.Item href="#action/3.3">Roupas Masculinas </NavDropdown.Item>
        <NavDropdown.Divider />
        
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</header>