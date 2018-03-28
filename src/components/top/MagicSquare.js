import React, { Component } from 'react';
import styled from 'styled-components';
import * as colourSwatch from '../../variables/colours';

class MagicSquare extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  colourChange = (newColourNumber) => {
    switch (newColourNumber) {
      case 1:

        break;
      case 2:

        break;
      case 3:

        break;
      case 4:

        break;
      default:
        console.log("newColourNumber does not match the switch. this is a problem");
    }
    // console.log(newColourNumber, this.props.squareNumber);
    //write to firebase
  }


  render() {
    switch (this.props.currentColourNumber) {
      case 1:
      return (
        <ColourOneDiv onMouseEnter={() => this.colourChange(2)}>
          &nbsp;
        </ColourOneDiv>
      )
        break;
      case 2:
      return (
        <ColourTwoDiv onMouseEnter={() => this.colourChange(3)}>
          &nbsp;
        </ColourTwoDiv>
      )
        break;
      case 3:
      return (
        <ColourThreeDiv onMouseEnter={() => this.colourChange(4)}>
          &nbsp;
        </ColourThreeDiv>
      )
        break;
      case 4:
      return (
        <ColourFourDiv onMouseEnter={() => this.colourChange(1)}>
          &nbsp;
        </ColourFourDiv>
      )
        break;
      default:

    }
  }



}

export default MagicSquare;


const BoxDiv = styled.div`
  border-radius: 1vw;
  display: inline-block;
  width: 4.8vw;
  height: 4.8vw;
  margin: 0.2vw;
`

const ColourOneDiv = BoxDiv.extend`
  background-color: ${colourSwatch.colours[0]};
`

const ColourTwoDiv = BoxDiv.extend`
  background-color: ${colourSwatch.colours[1]};
`

const ColourThreeDiv = BoxDiv.extend`
  background-color: ${colourSwatch.colours[2]};
`

const ColourFourDiv = BoxDiv.extend`
  background-color: ${colourSwatch.colours[3]};
`
