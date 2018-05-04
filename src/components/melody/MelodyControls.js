import React, { Component } from 'react';
import styled from 'styled-components';
import { min, max } from '../../variables/mediaTemplates';
class MelodyControls extends Component {

  test = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
      <Container>
        <Button onClick={() => this.props.showOverlay()}><i className="fas fa-question-circle"></i></Button>
        <Button onClick={() => this.props.onPlay()}><i className="fas fa-play-circle"></i></Button>
        <VolumeContainer>
          <p><i className="fas fa-volume-down"></i></p>
          <VolumeSlider onChange={(e) => this.props.changeVolume(e.target.value)} type="range" min="0" max="100" value={this.props.currentVolumeLevel}/>
        </VolumeContainer>
        <Button style={{ textDecoration: this.props.savedToDatabase ? 'none' : 'underline' }} onClick={() => this.props.saveMelody()}>{this.props.savedToDatabase ? 'Saved!' : <i class="far fa-save"></i> }</Button>
      </Container>
    );
  }

}

export default MelodyControls;


const Container = styled.div`
  padding-left: 5px;
  float: left;
  width: calc(20% - 5px);
  height: 100%;
  ${'' /* background-color: #323748; */}
`

const Button = styled.div`
  cursor: pointer;
  border: none;
  outline: none;
  width: 90%;
  height: 25%;

  font-size: 1.3em;
  ${min.phone`font-size: 1.5em;`}
  ${min.tablet`font-size: 2em;`}
  ${min.desktop`font-size: 2em;`}

  font-weight: 500;
  color: white;
  &:hover{
    text-decoration: underline;
    color: #f9cc35;
  }
`
const VolumeContainer = styled.div`
  height: 25%;
  padding-bottom: 5px;
  i {
    font-size: 1.5em;
    color: white;

  }
`

const VolumeSlider = styled.input`
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 80%; /* Full-width */
  height: 20px; /* Specified height */
  background-color: white; /* Grey background */
  outline: none; /* Remove outline */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */

  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 20px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    cursor: pointer; /* Cursor on hover */
    background-color: rgb(190, 190, 190);
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
