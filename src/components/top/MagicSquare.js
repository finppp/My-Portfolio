import React, { Component } from 'react';
import styled from 'styled-components';
import * as colourSwatch from '../../variables/colours';
import { database } from '../../database';


class MagicSquare extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  colourChange = (currentColourNumber) => {
    let squareNumber = this.props.squareNumber;
    currentColourNumber++;
    if (currentColourNumber >=4) {
      currentColourNumber = 0;
    }

    let disabled = false;
    // comment out the below line to enable writing to the database(this is to save on database writes during testing)
    // disabled = true;

    if (!disabled) {

      //write to Firebase database
      database.ref('/magic-squares/').update({
        [squareNumber]  : currentColourNumber
      });
    }
  }

  mobileColourChange = (currentColourNumber) => {
    let squareNumber = this.props.squareNumber;
    currentColourNumber++;
    if (currentColourNumber >=4) {
      currentColourNumber = 0;
    }

    setTimeout(function(){
      database.ref('/magic-squares/').update({
          [squareNumber+1]  : currentColourNumber
        });
      }, 200);
    setTimeout(function(){
      database.ref('/magic-squares/').update({
          [squareNumber+2]  : currentColourNumber
        });
      }, 400);
    setTimeout(function(){
      database.ref('/magic-squares/').update({
          [squareNumber+3]  : currentColourNumber
        });
      }, 600);

    database.ref('/magic-squares/').update({
      [squareNumber]  : currentColourNumber
    });
  }


  render() {
    return (
      <BoxDiv
        style={{'background-color': `${colourSwatch.greys[this.props.currentColourNumber]}`}}
        onDragEnter={() => this.colourChange(this.props.currentColourNumber)}
        onMouseEnter={() => this.colourChange(this.props.currentColourNumber)}>
          &nbsp;
      </BoxDiv>
    )
  }



}

export default MagicSquare;


const BoxDiv = styled.div`
  border-radius: 0.0vw;
  display: inline-block;
  width: 4.8vw;
  height: 4.8vw;
  margin: 0.2vw;
  ${'' /* transition: all .1s ease-out; */}

  @media (max-width: 1200px) {
    width: 9.6vw;
    height: 9.6vw;
    margin: 0.4vw;
  }
`

const ColourOneDiv = BoxDiv.extend`
  ;
`
