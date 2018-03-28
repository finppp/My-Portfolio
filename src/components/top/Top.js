import React, { Component } from 'react';
import styled from 'styled-components';

import MagicSquares from './MagicSquares';
import FinlayText from './FinlayText';

class Top extends Component {

  render() {
    return (
      <TopContainer>
        <MagicSquares/>
        <FinlayText/>
      </TopContainer>
    );
  }

}

export default Top;

const TopContainer = styled.section `
  background-color: red;
  width: 100%;
`
  // height:100%;
