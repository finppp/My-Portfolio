import React, { Component } from 'react';
import styled from 'styled-components';
import * as colourSwatch from '../../variables/colours';

class FinlayText extends Component {

  render() {
    return (
      <AbsoluteContainer>
        <HeadingContainer>
          <HeadingText currentColour={this.props.currentColour}>Finlay Percy</HeadingText>
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
  font-size: 15vw;
  font-weight: 800;
  line-height: 13vw;
  transition: color 0.2s linear;

  color: ${props => colourSwatch.activeColours[props.currentColour]};
  ${'' /* color: rgb(255, 209, 56); */}
  ${'' /* font-family: 'Nunito', sans-serif; */}
`
// font-family: 'Roboto', sans-serif;
// font-family: 'Open Sans', sans-serif;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Nunito', sans-serif;
