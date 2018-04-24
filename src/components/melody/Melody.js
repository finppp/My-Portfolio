import React, { Component } from 'react';
import { DraggableCore } from 'react-draggable';
import styled from 'styled-components';
import Sliders from './Sliders';
import MelodyControls from './MelodyControls';
import MelodyOverlay from './MelodyOverlay';
import { CSSTransitionGroup } from 'react-transition-group';
import '../../Animations.css';
import { database } from '../../database';


class Melody extends Component {

  constructor(props) {
    super(props);
    this.state = {
      melody: [1,2,1,2,1,2,1,2],
      displayOverlay: false,
      savedToDatabase: false,
      volume: 10
    };
  }


  componentDidMount() {

    this.loadMelodyFromDatabase();
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

  loadMelodyFromDatabase = () => {
    let self = this;
    database.ref('melody/').once('value').then(function(snapshot) {
      // TODO: add some error checking.
      self.setState({
        melody: snapshot.val()
      })
      //this shuold be the entire array
    })
  }

  saveMelodyToDatabase = () => {
    let self = this;
    database.ref('melody/').set(
      this.state.melody
    ).then(function() {
      self.setState({
        savedToDatabase: true
      })
    })
  }

  changeVolume = (volumeLevel) => {
    this.setState({
      volume: volumeLevel
    })
    this.mainVolume.gain.setValueAtTime(parseInt(volumeLevel,10)/100, this.audioCtx.currentTime);
  }

  playMelody = () => {

    this.audioCtx.resume()
    console.log("hello")
    let counter = 0;
    this.setState({counter});
    let visualPulse = setInterval(() => {
      if (counter == 7) {
        clearInterval(visualPulse)
      }
      counter++;
      this.setState({counter});
      console.log("hello")
    }, 250)


    const beats = [0,1,2,3,4,5,6,7];
    //delay in seconds between each beat.
    const delay = 0.25;
    const onNotedelays = beats.map((beat) => beat*delay);
    const offNoteDelays = beats.map((beat) => (beat*delay) + 0.2);

    this.synth.frequency.setValueAtTime(musicScale[this.state.melody[0]], this.audioCtx.currentTime + onNotedelays[0])
    this.ampEnvelope.gain.setValueAtTime(1, this.audioCtx.currentTime + onNotedelays[0]);
    this.ampEnvelope.gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + offNoteDelays[0]);

    this.synth.frequency.setValueAtTime(musicScale[this.state.melody[1]], this.audioCtx.currentTime + onNotedelays[1])
    this.ampEnvelope.gain.setValueAtTime(1, this.audioCtx.currentTime + onNotedelays[1]);
    this.ampEnvelope.gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + offNoteDelays[1]);

    this.synth.frequency.setValueAtTime(musicScale[this.state.melody[2]], this.audioCtx.currentTime + onNotedelays[2])
    this.ampEnvelope.gain.setValueAtTime(1, this.audioCtx.currentTime + onNotedelays[2]);
    this.ampEnvelope.gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + offNoteDelays[2]);

    this.synth.frequency.setValueAtTime(musicScale[this.state.melody[3]], this.audioCtx.currentTime + onNotedelays[3])
    this.ampEnvelope.gain.setValueAtTime(1, this.audioCtx.currentTime + onNotedelays[3]);
    this.ampEnvelope.gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + offNoteDelays[3]);

    this.synth.frequency.setValueAtTime(musicScale[this.state.melody[4]], this.audioCtx.currentTime + onNotedelays[4])
    this.ampEnvelope.gain.setValueAtTime(1, this.audioCtx.currentTime + onNotedelays[4]);
    this.ampEnvelope.gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + offNoteDelays[4]);

    this.synth.frequency.setValueAtTime(musicScale[this.state.melody[5]], this.audioCtx.currentTime + onNotedelays[5])
    this.ampEnvelope.gain.setValueAtTime(1, this.audioCtx.currentTime + onNotedelays[5]);
    this.ampEnvelope.gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + offNoteDelays[5]);

    this.synth.frequency.setValueAtTime(musicScale[this.state.melody[6]], this.audioCtx.currentTime + onNotedelays[6])
    this.ampEnvelope.gain.setValueAtTime(1, this.audioCtx.currentTime + onNotedelays[6]);
    this.ampEnvelope.gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + offNoteDelays[6]);

    this.synth.frequency.setValueAtTime(musicScale[this.state.melody[7]], this.audioCtx.currentTime + onNotedelays[7])
    this.ampEnvelope.gain.setValueAtTime(1, this.audioCtx.currentTime + onNotedelays[7]);
    this.ampEnvelope.gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + offNoteDelays[7]);
  }

  melodyChangeHandler = (sliderData) => {
    // console.log(sliderData);
    let newSliderValues = this.state.melody;
    newSliderValues[sliderData.sliderId] = sliderData.sliderValue;
    this.setState({
      melody: newSliderValues,
      savedToDatabase: false
    })
     // console.log(sliderData);
  }

  showOverlay = () => {
    this.setState({
      displayOverlay: true
    })
  }
  hideOverlay = () => {
    this.setState({
      displayOverlay: false
    })
  }

  render() {
    return (
      <Container innerRef={(melodyContainer) => this.melodyContainer = melodyContainer}>
        <CSSTransitionGroup
            transitionName="slidein"
            transitionAppear={false}
            transitionEnterTimeout={500}
            transitionEnter={true}
            transitionLeaveTimeout={500}
            transitionLeave={true}>
          {this.state.displayOverlay && <MelodyOverlay hideOverlay={() => this.hideOverlay()}/>}
        </CSSTransitionGroup>
        <TopHalf>
          <h2>Leave a tune for the next visitor.</h2>
        </TopHalf>
        <BottomHalf>
          <MelodyControls
            onVolumeChange={(newVolume) => this.changeVolume(newVolume)}
            onPlay={() => this.playMelody()}
            showOverlay={() => this.showOverlay()}
            saveMelody={() => this.saveMelodyToDatabase()}
            changeVolume={(volumeLevel) => this.changeVolume(volumeLevel)}
            currentVolumeLevel={this.state.volume}
            savedToDatabase={this.state.savedToDatabase}/>
          <Sliders
            currentStep={this.state.counter}
            onMelodyChange={(args) => this.melodyChangeHandler(args)}
            melody={this.state.melody}/>
        </BottomHalf>
      </Container>
    );
  }

}

const musicScale = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50, 1174.66, 1318.51, 1567.98, 1760.00, 2093.00]

export default Melody;

const Container = styled.section`
  overflow: hidden;
  position: relative;
  font-size: 16px;
  width: 50%;
  height: 40%;
  display: inline-block;
  background-color: #1b3b71;
  background: linear-gradient(to right, #1b3b71, #1f3966);


  p {
    margin: 0 auto;
  }
`
const TopHalf = styled.div`
  height: 20%;
  width: 100%;
  h2 {
    margin: 0;
    font-size: 2em;
    color: white;
    font-weight: 500;
    line-height: 200%;
  }
`
const BottomHalf = styled.div`
  height: 80%;
  width: 100%;
`
