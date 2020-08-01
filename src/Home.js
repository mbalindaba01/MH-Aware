import React from 'react';
import styled from 'styled-components';
import { HashRouter, Link } from 'react-router-dom';
import { Carousel, Container, Jumbotron, Row, Col} from 'react-bootstrap';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import { FooterPage } from './components/FooterPage.js';
import { SideBar } from './components/SideBar.js';
 
const Styles = styled.div`
h1, h2, h3, h4, h5, h6 {
    color: #140e00;
    font-size: 5vw;
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
      opacity: 0.6;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
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

  .lead{
      justify-content: center;
      text-align: center;
      font-style: italic;
  }

  .column {
      width: 100%;
      height: 350px;
  }

  #play {
      height: 400px;
      width: 100vh;
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
                        src={img1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img3}
                        alt="Fourth slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img4}
                        alt="Fifth slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={img5}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </Col>
                <Col md={3} className="column">
                    <SideBar />
                </Col>
                </Row>
                </Container>

            </main>
            <div id="play"></div>
            <FooterPage />
        </HashRouter>
    </Styles>
)