import React from 'react';
import styled from 'styled-components';
import { HashRouter,} from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import { FooterPage } from './components/FooterPage.js';
import { Jumbotron } from 'react-bootstrap';
 
const Styles = styled.div`
h1, h2, h3, h4, h5, h6 {
    color: #140e00;
    font-size: 5vw;
}
 #row {
     height: 400px;
 }

 .main-frame {
     height: 370px;
     width: 100%;
 }
`;
export const Wellness = () => (
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
                    <Row id="row">
                        <Col className="main-frame"md={12}>

                        </Col>
                    </Row>

                </Container>
            </main>
            <FooterPage />
        </HashRouter>
    </Styles>
)