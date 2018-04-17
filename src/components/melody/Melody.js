import React, { Component } from 'react';
import { DraggableCore } from 'react-draggable';
import styled from 'styled-components';
import Sliders from './Sliders';
import MelodyControls from './MelodyControls';

class Melody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      melody: [1,2,1,2,1,2,1,2]
    };
  }


  componentDidMount() {
    this.soundSetup();
    const height = this.melodyContainer.clientHeight;
    this.setState({
      containerHeight: height,
      blockSize: height/10
    })
  }

  audioCtx = new AudioContext();
  synth = this.audioCtx.createOscillator();
  mainVolume = this.audioCtx.createGain();
  ampEnvelope = this.audioCtx.createGain();

  soundSetup = () => {
    //Synth setup
    this.synth.type = 'saw';
    this.synth.frequency.setValueAtTime(440, this.audioCtx.currentTime);
    this.synth.connect(this.ampEnvelope);

    //set the amp env to 0
    this.ampEnvelope.gain.setValueAtTime(0, this.audioCtx.currentTime);
    this.ampEnvelope.connect(this.mainVolume);
    this.synth.start();

    this.mainVolume.connect(this.audioCtx.destination);
    this.mainVolume.gain.setValueAtTime(0.1, this.audioCtx.currentTime);
  }


  playMelody = () => {
    //// TODO: about to set some values, to easier add time values
    this.synth.frequency.setValueAtTime(musicScale[this.state.melody[0]], this.audioCtx.currentTime)
    this.ampEnvelope.gain.setValueAtTime(1, this.audioCtx.currentTime);
    this.ampEnvelope.gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + 0.4);

    this.synth.frequency.setValueAtTime(musicScale[this.state.melody[1]], this.audioCtx.currentTime + 1)
    this.ampEnvelope.gain.setValueAtTime(1, this.audioCtx.currentTime + 1);
    this.ampEnvelope.gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + 1.4);

    this.synth.frequency.setValueAtTime(musicScale[this.state.melody[2]], this.audioCtx.currentTime + 2)
    this.ampEnvelope.gain.setValueAtTime(1, this.audioCtx.currentTime + 2);
    this.ampEnvelope.gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + 2.4);

    this.synth.frequency.setValueAtTime(musicScale[this.state.melody[3]], this.audioCtx.currentTime + 3)
    this.ampEnvelope.gain.setValueAtTime(1, this.audioCtx.currentTime + 3);
    this.ampEnvelope.gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + 3.4);

    // this.synth.frequency.setValueAtTime(this.state.melody[4], )
  }

  melodyChangeHandler = (sliderData) => {
    console.log(sliderData);
    let newSliderValues = this.state.melody;
    newSliderValues[sliderData.sliderId] = sliderData.sliderValue;
    this.setState({
      melody: newSliderValues
    })
     console.log(sliderData);
  }

  render() {
    return (
      <Container innerRef={(melodyContainer) => this.melodyContainer = melodyContainer}>
        <MelodyControls
          onVolumeChange={(newVolume) => this.changeVolume(newVolume)}
          onPlay={() => this.playMelody()}/>
        <Sliders
          onMelodyChange={(args) => this.melodyChangeHandler(args)}
          melody={this.state.melody}/>
      </Container>
    );
  }

}

const musicScale = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50, 1174.66, 1318.51, 1567.98, 1760.00]

export default Melody;

const Container = styled.section`
  position: relative;
  font-size: 16px;
  background-color: red;
  width: 50%;
  height: 40%;
  display: inline-block;
  p {
    margin: 0 auto;
  }
`

// const DraggableContainer = styled.div`
//   transition: top 0.1s cubic-bezier(0.01, 0.69, 0.58, 1);
//   position: relative;
//   top: ${props => props.yPostition + 'px'} ;
//   background-color: green;
//   width: 10%;
//   height: 10%;
// `
