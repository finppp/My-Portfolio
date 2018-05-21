import React, { Component } from 'react';
import styled from 'styled-components';
import { min, max} from '../../variables/mediaTemplates';
import * as colourSwatch from '../../variables/colours';


class MelodyOverlay extends Component {

  render() {
    return (
      <Container currentColour={this.props.currentColour}>
        <div>
          <CloseButton onClick={this.props.hideOverlay}>&#10006;</CloseButton>
          <Heading>Instructions</Heading>
        </div>
        <br/>
        <p>Step 1. Press <i className="fas fa-play-circle"></i> to hear the melody created by the last visitor to the website.</p>
        <p>Step 2. Move the sliders up and down to change the pitch of each note in the melody.</p>
        <p>Step 3. Press <i className="fas fa-play-circle"></i> again to hear the melody you have created.</p>
        <p>Step 4. Press the <i class="far fa-save"></i> to save your melody for the next visitor.</p>
      </Container>
    );
  }

}

export default MelodyOverlay;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  ${props => 'background-color: ' + colourSwatch.activeColours[props.currentColour]};
  ${'' /* background-color: ${props => props.}; */}
  p{
    padding: 1% 10%;
    font-size: 0.7em;
    ${min.phone`font-size: 1em;`}
    ${min.tablet`font-size: 1.3em;`}
    ${min.desktop`font-size: 1.1em;`}

  }
`

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  font-size: 2.3em;
  ${min.phone`font-size: 2em;`}
  ${min.tablet`font-size: 3em;`}
  ${min.desktop`font-size: 3em;`}
  ${min.xl`font-size: 5em;`}
  padding-left: 0.3em;
  transition: color 1s;

  &:hover {
    cursor: pointer;
    color: rgb(255, 255, 255);
    transition: none;
  }
`
const Heading = styled.h3`
  font-weight: 400;
  color: black;
  margin: 0 auto;
  display: inline-block;
  width: 100%;
  height: 100%;

  font-size: 2em;
  ${min.phone`font-size: 2.2em;`}
  ${min.tablet`font-size: 2.2em;`}
  ${min.desktop`font-size: 2em;`}
  ${min.xl`font-size: 3em;`}
`
