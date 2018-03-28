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
  width: 50%;
  font-size: 5em;
`
