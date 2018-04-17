import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from './Slider';

class Sliders extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sliderValues: []
    };
  }


  sliderValueChanged = (sliderData) => {
     console.log(sliderData);
  }

  render() {
    return (
      <SlidersContainer>
        <Slider key={1} sliderId={1} onValueChange={(sliderData) => this.sliderValueChanged(sliderData)}/>
        <Slider key={2} sliderId={2} onValueChange={(sliderData) => this.sliderValueChanged(sliderData)}/>
        <Slider key={3} sliderId={3} onValueChange={(sliderData) => this.sliderValueChanged(sliderData)}/>
        <Slider key={4} sliderId={4} onValueChange={(sliderData) => this.sliderValueChanged(sliderData)}/>
        <Slider key={5} sliderId={5} onValueChange={(sliderData) => this.sliderValueChanged(sliderData)}/>
        <Slider key={6} sliderId={6} onValueChange={(sliderData) => this.sliderValueChanged(sliderData)}/>
        <Slider key={7} sliderId={7} onValueChange={(sliderData) => this.sliderValueChanged(sliderData)}/>
        <Slider key={8} sliderId={8} onValueChange={(sliderData) => this.sliderValueChanged(sliderData)}/>
      </SlidersContainer>
    );
  }

}

export default Sliders;

const SlidersContainer = styled.div`
  height: 100%;
  width: 100%;
`
