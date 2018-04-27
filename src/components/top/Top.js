import React, { Component } from 'react';
import styled from 'styled-components';

import MagicSquares from './MagicSquares';
import FinlayText from './FinlayText';

class Top extends Component {


  render() {
    return (
      <TopContainer name="top">
        <MagicSquares />
        <FinlayText/>
      </TopContainer>
    );
  }

}

export default Top;

const TopContainer = styled.section `
  overflow: hidden;
  ${'' /* background-color: red; */}
  width: 100%;
  position: relative;
`
  // height:100%;
