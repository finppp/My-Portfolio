import React, { Component } from 'react';
import styled from 'styled-components';
import * as colourSwatch from '../../variables/colours';
import { database } from '../../database';


class MagicSquare extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  colourChange = (newColourNumber) => {
    let squareNumber = this.props.squareNumber;
    switch (newColourNumber) {
      case 1:
      case 2:
      case 3:
      case 4:

        break;
      default:
        console.log("newColourNumber does not match the switch. this is a problem");
    }

    let disabled = false;
    // comment out the below line to enable writing to the database(this is to save on database writes during testing)
    // disabled = true;

    if (!disabled) {
      //write to Firebase database
      database.ref('/magic-squares/').update({
        [squareNumber]  : newColourNumber
      });
    }
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
      console.log("current number doesnt match switch");
      return null
    }
  }



}

export default MagicSquare;


const BoxDiv = styled.div`
  border-radius: 0.0vw;
  display: inline-block;
  width: 4.8vw;
  height: 4.8vw;
  margin: 0.2vw;

  @media (max-width: 1200px) {
    width: 9.6vw;
    height: 9.6vw;
    margin: 0.4vw;
  }
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
