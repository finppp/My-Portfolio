import React, { Component } from 'react';
import { DraggableCore } from 'react-draggable';
import styled from 'styled-components';

class Slider extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const containerHeight = this.melodyContainer.clientHeight;
    const blockSize = containerHeight/10;
    let newYpos = (10 - this.props.sliderValue) * blockSize;
    this.setState({
      containerHeight,
      blockSize,
      sliderValue: this.props.sliderValue,
      yPos: newYpos
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (this.state.yPos != null) {
      // if (this.state.sliderValue != nextProps.sliderValue) {
        let newYpos = (10 - nextProps.sliderValue) * this.state.blockSize;
        console.log(newYpos);
        this.setState({
          yPos: newYpos
        })
      // }
    }
  }



  handleDrag = (e, ui) => {
    let newYpos = this.state.yPos;
    const containerHeight = this.state.containerHeight
    const blockSize = this.state.blockSize
    newYpos += ui.deltaY
    console.log(newYpos);
    if (newYpos < 0) {
      newYpos = 0;
    }
    if (newYpos > (containerHeight - blockSize)) {
      newYpos = containerHeight - blockSize;
    }
    let sliderValue = 10 - (newYpos/blockSize);
    console.log(sliderValue);
    this.props.onValueChange({
      sliderValue,
      sliderId: this.props.sliderId
    })

    // this.setState({
    //   // yPos: newYpos,
    //   sliderValue
    // })
  }

  render() {
    return (
      <SliderContainer innerRef={(melodyContainer) => this.melodyContainer = melodyContainer}>
        <ThinLine></ThinLine>
        <DraggableCore
          axis="y"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[this.state.blockSize, this.state.blockSize]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}
          bounds="parent">
          <DraggableObject className="handle" yPostition={this.state.yPos}>
          </DraggableObject>
        </DraggableCore>
      </SliderContainer>
    );
  }

}

export default Slider;

const SliderContainer = styled.div`
  position: relative;
  float: left;
  height: 100%;
  width: 12.5%;
`
// const Circle = styled.div`
//   background-color: pink;
//   margin-left: auto;
//   margin-right: auto;
//   left: 0;
//   right: 0;
//   height: 2vw;
//   width: 2vw;
//   border-radius: 50%;
// `

const DraggableObject = styled.div`
  ${'' /* border-radius: 10px 0px 0px 10px; */}
  margin-left: 5%;
  position: relative;
  top: ${props => props.yPostition + 'px'} ;
  width: 95%;
  height: 10%;
  ${'' /* border-radius: 10%; */}
  background-color: rgb(99, 99, 99);
  &:hover{
    background-color: rgb(112, 212, 255)
  }
  &:active{
    background-color: rgb(112, 212, 255)
 }
`

const ThinLine = styled.div`
  position: absolute;
  right: 0;
  width: 10%;
  height: 100%;
  background-color: rgb(255, 255, 255);
`
