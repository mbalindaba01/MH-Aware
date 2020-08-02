import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const Styles = styled.div`
#container {
    height: 350px;
    margin: 0;
}
#top {
    margin-top: 0;
}
#social-links {
    display: flex;
    justify-content: space-between;
}
 #elements {
     display: flex;
     flex-direction: column;
     align-items: left;
     color: pink;
}

 a {
    color: #140e00;
}
#logo {
    font-family: 'Rochester', sans-serif;
    font-size: 4vw;
  }

`;

export const SideBar = () => (
    <Styles>
        <Container id="container">
                    
        <div id="social-links">
            <a href="https://twitter.com/treat_zim" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
            <a href="https://www.facebook.com/treatZim" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
            <a href="https://www.instagram.com/treat_zim/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UCdou6TDLyk1y5WxbuYG1oAA" target="_blank" rel="noopener noreferrer" className="youtube"><i class="fa fa-youtube-play"></i></a>
        </div>
        <hr />
        <div id="elements">
            <a href="#">Kids Corner</a>
            <hr />
            <a href="#">Depression & Anxiety</a>
            <hr />
            <a href="#">Get Help</a>
            <hr />
            <a href="#">Forums</a>
            <hr />
        </div>
        </Container>
    </Styles>
)