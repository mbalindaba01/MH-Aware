import React from 'react';
import styled from 'styled-components';
import { HashRouter, Link } from 'react-router-dom';
import { Carousel, Container, Row, Col} from 'react-bootstrap';
import img66 from './assets/img66.jpg';
import img22 from './assets/img22.jpg';
import img11 from './assets/img11.png';
import img33 from './assets/img33.jpg';
import img55 from './assets/img55.png';
import { FooterPage } from './components/FooterPage.js';
import { SideBar } from './components/SideBar.js';
import { Jumbotron } from 'react-bootstrap';
 
const Styles = styled.div`
h1, h2, h3, h4, h5, h6 {
    color: #140e00;
    font-size: 5vw;
}

Carousel.Caption {
    color: crimson;
    z-index: 7;
}
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }

  #carousel{
      height: 350px;
      max-width: 100%;
      position: relative;
      z-index: -2;
  }

  .overlay {
      background: black;
      opacity: 0.8;
      position: absolute;
      max-width: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
  }

  .lead{
      justify-content: center;
      text-align: center;
      font-style: italic;
  }

  .column {
      width: 100%;
      height: 350px;
  }

  #info {
      margin-top: 50 px;
  }

  #jumbo {
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    padding-top: 5px;
    background: #cc8f00;
    width: 100vw;
}

`;
export const Home = () => (
    <Styles>     
        <HashRouter>
            <main>
                <Jumbotron className="container-fluid" id="jumbo">
                    <h1>Mental Health Aware</h1>
                    <p className="lead">
                    Take care of your mental health as we fight the covid-19 pandemic and beyond.
                    </p>
                </Jumbotron>
                
                <Container>
                    <Row>
                        <Col md={9} className="column">
                        <div className="overlay"></div>
                <Carousel id="carousel">
                    <Carousel.Item className="carousel-itemm">
                        <img
                        className="d-block w-100"
                        src={img66}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img22}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img11}
                        alt="Fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img33}
                        alt="Fifth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img55}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                </Col>
                <Col md={3} className="column">
                    <SideBar />
                </Col>
                </Row>
                </Container>
                <Container id="info">
                    <Row>
                        <Col md={4}>
                            <h3>Column1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend augue eros, id varius felis rhoncus eu. Etiam placerat massa quis dolor imperdiet sodales. Praesent sollicitudin laoreet ornare. Aliquam erat volutpat. Sed scelerisque viverra turpis, nec malesuada nunc sollicitudin in. Praesent eget iaculis risus. Ut dignissim sodales ante. Vivamus at erat nec arcu porta tincidunt et porta mi.</p>
                        </Col>
                        <Col md={4}>
                            <h3>Column2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend augue eros, id varius felis rhoncus eu. Etiam placerat massa quis dolor imperdiet sodales. Praesent sollicitudin laoreet ornare. Aliquam erat volutpat. Sed scelerisque viverra turpis, nec malesuada nunc sollicitudin in. Praesent eget iaculis risus. Ut dignissim sodales ante. Vivamus at erat nec arcu porta tincidunt et porta mi.</p>
                        </Col>
                        <Col md={4}>
                            <h3>Column3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend augue eros, id varius felis rhoncus eu. Etiam placerat massa quis dolor imperdiet sodales. Praesent sollicitudin laoreet ornare. Aliquam erat volutpat. Sed scelerisque viverra turpis, nec malesuada nunc sollicitudin in. Praesent eget iaculis risus. Ut dignissim sodales ante. Vivamus at erat nec arcu porta tincidunt et porta mi.</p>
                        </Col>
                    </Row>
                </Container>
            </main>
            <FooterPage />
        </HashRouter>
    </Styles>
)