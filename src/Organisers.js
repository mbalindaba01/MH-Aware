import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import styled from 'styled-components';
import { FooterPage } from './components/FooterPage';

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
img {
    height: 100px;
    width: 100px;
}
.organise {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 15vh;
    margin: 2vh 0;
}

.column {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

a {
    color: black;
    text-decoration: none;
}
`;

export const Organisers = () => (
    <React.Fragment>
        <Styles>
        <Jumbotron id="jumbo" className="text-center"fluid>
                <h3>It is not easy...</h3>
                <p className="lead">...to be living with a mental illness. With the right help it can get easier with time. The following tips might come in handy for a person living with bipolar disorder</p>
        </Jumbotron>

        <Container fluid>
        <div className="column">
        <Link to='./Organise' className="organise">
            <img src={img1} alt="Notebook"/>
            <div className="caption">
                <h4>Journal Your Thoughts</h4>
                <p>This is space for your thoughts and feelings</p>
            </div>
        </Link>

        <Link to='./diary' className="organise">
            <img src={img2} alt="books"/>
            <div className="caption">
                <h4>Declutter your mind</h4>
                <p>Write down your daily tasks and keep organised</p>
            </div>
        </Link>
        </div>
        </Container>
        <FooterPage />
        </Styles>
    
    </React.Fragment>

)