import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import { SideBar } from './components/SideBar.js';
import { FooterPage } from './components/FooterPage.js';
import styled from 'styled-components';

const Styles = styled.div`
#jumbo {
    height: 25vh;
    align-items: center;
    padding: 15px;
    background: #cc8f00;
    width: 100vw;
}
 #jumbo p {
    font-style: italic

}

ul li {
    list-style-type: none;
    margin: 20px 0;
    justify-content: center;
    text-align: justify;
    color: #140e00;
}

h3 {
    content-justify: center;
    text-align: center;
    
}
`;



export const HealthTips = () => (
    <React.Fragment>
        <Styles>
        <Jumbotron id="jumbo" className="text-center"fluid>
            <h3>It is not easy...</h3>
            <p className="lead">...to be living with a mental illness. With the right help it can get easier with time. The following tips might come in handy during depression lows or anxiety attacks.</p>
        </Jumbotron>
        <Container>
            <Row>
                <Col className= "text-center" sm={12}>
                    
                    <h3>What's Depression and Anxiety?</h3>
                    <p>Depression is a constant feeling of being upset, sad, 'down' for long periods of time</p>
                    <p>Anxiety is an emotion characterized by feelings of tension, worried thoughts and physical changes like increased blood pressure.People with anxiety disorders usually have recurring intrusive thoughts or concerns. They may avoid certain situations out of worry. They may also have physical symptoms such as sweating, trembling, dizziness or a rapid heartbeat.</p>                    
                    <br />
                    <hr />
                    <br />
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col className="main" md={4}>
                    <h3>Tips for Depression lows</h3>
                    <ul>
                        <li>It can be hard to heep a clean space but putting away dirty dishes, any unfolded clothes, or decluttering your space can give you a sense of clarity and a sense of achievement.</li>
                        <li>Going out side even for a few minutes will help. If you cannot, open windows, let air and the sun in.</li>
                        <li>Call a friend. If you do not feel up to it text them. If you cannot write down a single thought/feeling</li>
                        <li>Call a helpline. Talking to a person who is removed from you might feel a little less overwhelming (SADAG 24hr helpline 0800 456 789)</li>
                    </ul>
                </Col>
                <Col className="main" md={4}>
                    <h3>Tips to Deal with Anxiety Attacks</h3>
                    <ul>
                        <li>It can be hard to heep a clean space but putting away dirty dishes, any unfolded clothes, or decluttering your space can give you a sense of clarity and a sense of achievement.</li>
                        <li>Going out side even for a few minutes will help. If you cannot, open windows, let air and the sun in.</li>
                        <li>Call a friend. If you do not feel up to it text them. If you cannot write down a single thought/feeling</li>
                        <li>Call a helpline. Talking to a person who is removed from you might feel a little less overwhelming (SADAG 24hr helpline 0800 456 789)</li>
                    </ul>
                </Col>
                <Col className="main" md={4}>
                    <h3>Tips to Deal with Anxiety Attacks</h3>
                    <ul>
                        <li>It can be hard to heep a clean space but putting away dirty dishes, any unfolded clothes, or decluttering your space can give you a sense of clarity and a sense of achievement.</li>
                        <li>Going out side even for a few minutes will help. If you cannot, open windows, let air and the sun in.</li>
                        <li>Call a friend. If you do not feel up to it text them. If you cannot write down a single thought/feeling</li>
                        <li>Call a helpline. Talking to a person who is removed from you might feel a little less overwhelming (SADAG 24hr helpline 0800 456 789)</li>
                    </ul>
                </Col>
            </Row>
        </Container>
        <FooterPage />
        </Styles>
      </React.Fragment>
)