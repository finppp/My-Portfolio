import React, { Component } from 'react';
import styled from 'styled-components';


class Contact extends Component {

  render() {
    return (
      <Container name="contact">
        <Title>
          <h2>Say Yellow!</h2>
        </Title>
        <ContactDetails>
          <h2><i className="far fa-envelope"></i> <a target="_blank" rel="noopener noreferrer" href="mailto:finlaypercy@hotmail.com?Subject=Hi%20Finlay">fin@foldedgroup.com</a></h2>
          <h2><i className="fas fa-phone"></i> <a href="tel:+4475905249489">07595 249489</a></h2>
        </ContactDetails>
      </Container>
    );
  }

}

export default Contact;


const Container = styled.div`
  height: 33%;
  width: 100%;
  background-color: #f9cc35;
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
    font-size: 2em;
  }
`
