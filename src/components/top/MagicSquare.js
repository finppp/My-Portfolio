import React, { Component } from 'react';
import styled from 'styled-components';
import * as colourSwatch from '../../variables/colours';

class MagicSquare extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    switch (this.props.currentColourNumber) {
      case 1:
      return (
        <ColourOneDiv>
          &nbsp;
        </ColourOneDiv>
      )
        break;
      case 2:
      return (
        <ColourTwoDiv>
          &nbsp;
        </ColourTwoDiv>
      )
        break;
      case 3:
      return (
        <ColourThreeDiv>
          &nbsp;
        </ColourThreeDiv>
      )
        break;
      case 4:
      return (
        <ColourFourDiv>
          &nbsp;
        </ColourFourDiv>
      )
        break;
      default:

    }
  }



}

export default MagicSquare;

const ColourOneDiv = styled.div`
  display: inline-block;
  width: 4.8vw;
  height: 4.8vw;
  margin: 0.2vw;
  background-color: ${colourSwatch.colours[0]};
`

const ColourTwoDiv = styled.div`
  display: inline-block;
  width: 4.8vw;
  height: 4.8vw;
  margin: 0.2vw;
  background-color: ${colourSwatch.colours[1]};
`

const ColourThreeDiv = styled.div`
  display: inline-block;
  width: 4.8vw;
  height: 4.8vw;
  margin: 0.2vw;
  background-color: ${colourSwatch.colours[2]};
`

const ColourFourDiv = styled.div`
  display: inline-block;
  width: 4.8vw;
  height: 4.8vw;
  margin: 0.2vw;
  background-color: ${colourSwatch.colours[3]};
`
