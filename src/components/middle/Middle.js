import React, { Component } from 'react';
import styled from 'styled-components';
import Skills from './Skills';

// import "typeface-roboto";

class Middle extends Component {

  render() {
    return (
      <MiddleContainer>
        <MiddleHeading>Tech I Know</MiddleHeading>
        <Skills />
      </MiddleContainer>
    );
  }

}

export default Middle;

const MiddleHeading = styled.h2`
  height: 10%;
  margin: 0 auto;
  font-family: 'Nunito',sans-serif;
  color: white;
  font-weight: 300;
  font-size: 3em;
  ${'' /* font-family: 'Montserrat', sans-serif; */}
`
// font-family: typeface-roboto;

const MiddleContainer = styled.section `
  background-color: rgb(255, 255, 255);
  width: 50%;
  height: 650px;
  overflow: hidden;
  ${'' /* position: relative; */}
  float: right;
`
  // height:100%;
