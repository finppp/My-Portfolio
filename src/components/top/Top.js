import React, { Component } from 'react';
import styled from 'styled-components';

import MagicSquares from './MagicSquares';
import FinlayText from './FinlayText';
import ScrollDown from './ScrollDown';

class Top extends Component {


  render() {
    return (
      <TopContainer name="top">
        <MagicSquares />
        <FinlayText currentColour={this.props.currentColour}/>
        <ScrollDown currentColour={this.props.currentColour}/>
      </TopContainer>
    );
  }

}

export default Top;

const TopContainer = styled.section `
  overflow: hidden;
  ${'' /* background-color: red; */}
  width: 100%;
  height: 100%;
  position: relative;
`
  // height:100%;
