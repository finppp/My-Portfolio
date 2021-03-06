import React, { Component } from 'react';
import styled from 'styled-components';
import * as colourSwatch from '../../variables/colours';
import { min, max } from '../../variables/mediaTemplates';

class Contact extends Component {

  render() {
    return (
      <Container currentColour={this.props.currentColour} name="contact">
        <Title>
          <h2>Say hello!</h2>
        </Title>
        <ContactDetails>
          <h2><i className="far fa-envelope"></i> <a target="_blank" rel="noopener noreferrer" href="mailto:ﬁnlaypercy@gmail.com?Subject=Hi%20Finlay">ﬁnlaypercy@gmail.com</a></h2>
          <h2><i className="fas fa-phone"></i> <a href="tel:+447595249489">07595 249489</a></h2>
        </ContactDetails>
      </Container>
    );
  }

}

export default Contact;


const Container = styled.div`
  height: 33%;
  width: 100%;
  transition: background-color 0.2s linear;
  background-color: ${props => colourSwatch.activeColours[props.currentColour]};

  ${'' /* background-color: #f9cc35; */}
`
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 100%;
  height: 30%;
  h2{
    margin: auto 5px;
    font-size: 2.3em;
  }
`
const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  ${min.tablet`flex-direction: row;`}
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 100%;
  height: 70%;
  a{
    color: black;
  }
  h2{
    width: 100%;
    font-weight: 400;
    margin: auto 5px;
    font-size: 1.2em;
    ${min.phone`font-size: 1.5em;`}
    ${min.tablet`font-size: 2em;`}
  }
`
