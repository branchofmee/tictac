import './App.css';
import React, { useState } from 'react';
import { Navbar, Container, Nav, Carousel } from 'react-bootstrap';
import watchData from './data.js';

function App() {
  
  let [watch, afterwatch] = useState(watchData);
  
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">TicTac</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ require('./img/slide1.jpg') }
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>TicTac for Watch User</h3>
            <p>We make comportable shopping</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ require('./img/slide2.jpg') }
            alt="Second slide"
          />

          <Carousel.Caption>
          <h3>TicTac for Watch User</h3>
            <p>We make comportable shopping</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ require('./img/slide3.jpg') }
            alt="Third slide"
          />

          <Carousel.Caption>
          <h3>TicTac for Watch User</h3>
            <p>We make comportable shopping</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={ require('./img/tagcbm2112.jpg') } alt="product1" />
            <h5>{watch[0].title}</h5>
            <p>{watch[0].content}</p>
            <p>{watch[0].price}</p>
          </div>
          <div className="col-md-4">
            <img src={ require('./img/must.jpg') } alt="product1" />
            <h5>{watch[1].title}</h5>
            <p>{watch[1].content}</p>
            <p>{watch[1].price}</p>
          </div>
          <div className="col-md-4">
            <img src={ require('./img/openheart.jpg') } alt="product1" />
            <h5>{watch[2].title}</h5>
            <p>{watch[2].content}</p>
            <p>{watch[2 ].price}</p>
          </div>
        </div>
      </div>



  

    </div>
  );
}



export default App;
