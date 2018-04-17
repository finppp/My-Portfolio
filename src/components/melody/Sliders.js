import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from './Slider';

class Sliders extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sliderValues: [1,3,4,5,6,7]
    };
  }


  sliderValueChanged = (sliderData) => {
    console.log(sliderData);
    let newSliderValues = this.state.sliderValues;
    newSliderValues[sliderData.sliderId] = sliderData.sliderValue;
    this.setState({
      sliderValues: newSliderValues
    })
     console.log(sliderData);
  }

  render() {
    return (
      <SlidersContainer>
        <Slider sliderValue={this.state.sliderValues[0]} key={0} sliderId={0} onValueChange={(sliderData) => this.sliderValueChanged(sliderData)}/>
        <Slider sliderValue={this.state.sliderValues[1]} key={1} sliderId={1} onValueChange={(sliderData) => this.sliderValueChanged(sliderData)}/>
        <Slider sliderValue={this.state.sliderValues[2]} key={2} sliderId={2} onValueChange={(sliderData) => this.sliderValueChanged(sliderData)}/>
        <Slider sliderValue={this.state.sliderValues[3]} key={3} sliderId={3} onValueChange={(sliderData) => this.sliderValueChanged(sliderData)}/>
        <Slider sliderValue={this.state.sliderValues[4]} key={4} sliderId={4} onValueChange={(sliderData) => this.sliderValueChanged(sliderData)}/>
        <Slider sliderValue={this.state.sliderValues[5]} key={5} sliderId={5} onValueChange={(sliderData) => this.sliderValueChanged(sliderData)}/>
        <Slider sliderValue={this.state.sliderValues[6]} key={6} sliderId={6} onValueChange={(sliderData) => this.sliderValueChanged(sliderData)}/>
        <Slider sliderValue={this.state.sliderValues[7]} key={7} sliderId={7} onValueChange={(sliderData) => this.sliderValueChanged(sliderData)}/>
      </SlidersContainer>
    );
  }

}

export default Sliders;

const SlidersContainer = styled.div`
  height: 100%;
  width: 100%;
`
