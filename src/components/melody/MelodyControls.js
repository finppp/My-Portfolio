import React, { Component } from 'react';
import styled from 'styled-components';

class MelodyControls extends Component {

  test = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
      <Container>
        <Button onClick={() => this.props.showOverlay()}>?</Button>
        <Button onClick={() => this.props.onPlay()}>►</Button>
        <VolumeContainer>
          <p>Volume</p>
          <VolumeSlider onChange={(e) => this.props.changeVolume(e.target.value)} type="range" min="0" max="100" value={this.props.currentVolumeLevel}/>
        </VolumeContainer>
        <Button onClick={() => this.props.saveMelody()}>{this.props.savedToDatabase ? 'Saved' : 'Save' }</Button>
      </Container>
    );
  }

}

export default MelodyControls;


const Container = styled.div`
  float: left;
  width: 20%;
  height: 100%;
  ${'' /* background-color: #323748; */}
`

const Button = styled.div`
  border: none;
  outline: none;
  width: 90%;
  height: 25%;
  font-size: 1.5em;
  font-weight: 500;
  color: white;
  &:hover{
    text-decoration: underline;
    color: rgb(255, 248, 77);
  }
`
const VolumeContainer = styled.div`
  p {
    font-size: 1.5em;
    font-weight: 500;
    color: white;

  }
`

const VolumeSlider = styled.input`
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 80%; /* Full-width */
  height: 25px; /* Specified height */
  background-color: white; /* Grey background */
  outline: none; /* Remove outline */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */

  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    cursor: pointer; /* Cursor on hover */
    background-color: rgb(99,99,99);
    transition: background-color 1s ease-out;
    &:hover{
      background-color: rgb(112, 212, 255);
      transition: none;
    }
    &:active{
      background-color: rgb(112, 212, 255);
      transition: none;
   }
  }

  &::-moz-range-thumb {
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #4CAF50; /* Green background */
    cursor: pointer; /* Cursor on hover */
}
`
