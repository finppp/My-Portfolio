import React, { Component } from 'react';
import styled from 'styled-components';
// import "typeface-roboto";

class Middle extends Component {

  render() {
    return (
      <MiddleContainer>
        <MiddleHeading>This is the middle section</MiddleHeading>
      </MiddleContainer>
    );
  }

}

export default Middle;

const MiddleHeading = styled.h2`
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
`
// font-family: typeface-roboto;

const MiddleContainer = styled.section `
  background-color: rgb(223, 74, 108);
  width: 100%;
  position: relative;
  height: 500px;
`
  // height:100%;
