import React, { useState } from 'react';

//import Jumbotron from 'react-bootstrap/Jumbotron';
//import Toast from 'react-bootstrap/Toast';
//import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';





const HeaderNav = () => (
      <div className="Small-Header">

		<Navbar sticky="top">
    <Container>
      <Navbar.Brand href="https://github.com/ketanjog/graphiti"><div className="white_text">Graphiti</div></Navbar.Brand>
		<div className="right-justify"> 
		<Nav className="justify-content-end">
				</Nav>
		</div>
    </Container>
  </Navbar>
</div>
);
export default HeaderNav;
