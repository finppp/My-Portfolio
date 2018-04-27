import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import Colours from '../../variables/colours';

class Sliders extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SlidersContainer>
        <Slider currentStep={this.props.currentStep} sliderValue={this.props.melody[0]} key={0} sliderId={0} onValueChange={(sliderData) => this.props.onMelodyChange(sliderData)}/>
        <Slider currentStep={this.props.currentStep} sliderValue={this.props.melody[1]} key={1} sliderId={1} onValueChange={(sliderData) => this.props.onMelodyChange(sliderData)}/>
        <Slider currentStep={this.props.currentStep} sliderValue={this.props.melody[2]} key={2} sliderId={2} onValueChange={(sliderData) => this.props.onMelodyChange(sliderData)}/>
        <Slider currentStep={this.props.currentStep} sliderValue={this.props.melody[3]} key={3} sliderId={3} onValueChange={(sliderData) => this.props.onMelodyChange(sliderData)}/>
        <Slider currentStep={this.props.currentStep} sliderValue={this.props.melody[4]} key={4} sliderId={4} onValueChange={(sliderData) => this.props.onMelodyChange(sliderData)}/>
        <Slider currentStep={this.props.currentStep} sliderValue={this.props.melody[5]} key={5} sliderId={5} onValueChange={(sliderData) => this.props.onMelodyChange(sliderData)}/>
        <Slider currentStep={this.props.currentStep} sliderValue={this.props.melody[6]} key={6} sliderId={6} onValueChange={(sliderData) => this.props.onMelodyChange(sliderData)}/>
        <Slider currentStep={this.props.currentStep} sliderValue={this.props.melody[7]} key={7} sliderId={7} onValueChange={(sliderData) => this.props.onMelodyChange(sliderData)}/>
      </SlidersContainer>
    );
  }

}

export default Sliders;

const SlidersContainer = styled.div`
  ${'' /* background-color: #323748; */}
  float: left;
  height: 90%;
  width: 70%;
  margin-right: 10%;
  ${'' /* margin-bottom: 10%; */}
`
