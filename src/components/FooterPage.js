import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import styled from 'styled-components';

const Styles = styled.div`
        *{
        background: black;
        width: 100vw;
        bottom: 0;
        overflow-x: hidden;
        }
      li{
        color: white;
      }
    `

export const FooterPage = () => {
  return (
    <Styles>
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Numbers to call When you need help</h5>
            <ul>
              <li className="list-unstyled">
              <a href="#">Cipla 24hr Mental Health Helpline: 0800 456 789</a>
              </li>
              <li className="list-unstyled">
              <a href="#">ADHD Helpline: 0800 55 44 33</a>
              </li>
              <li className="list-unstyled">
              <a href="#">Suicide Crisis Line: 0800 567 567</a>
              </li>
              <li className="list-unstyled">
              <a href="#">Akeso Psychiatric Response Unit: 0861 435 787</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="6">
            <h5>Visit the following sites for help</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">SADAG</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">CIPLA</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Mentalhealth.gov</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} copyright
        </MDBContainer>
      </div>
    </MDBFooter>
    </Styles>
  );
}

