import React, { Component } from 'react';
import styled from 'styled-components';

class FinlayText extends Component {

  render() {
    return (
      <AbsoluteContainer>
        <HeadingContainer>
          <HeadingText>Finlay Percy</HeadingText>
        </HeadingContainer>
      </AbsoluteContainer>
    );
  }

}

export default FinlayText;

const AbsoluteContainer = styled.section`
  pointer-events: none;
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;
`

const HeadingContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const HeadingText = styled.h1`
  letter-spacing: 2vw;
  width: 70%;
  font-size: 13vw;
  font-weight: 800;
  line-height: 13vw;
  color: rgb(75, 61, 119);
  font-family: 'Nunito', sans-serif;
`
// font-family: 'Roboto', sans-serif;
// font-family: 'Open Sans', sans-serif;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Nunito', sans-serif;
