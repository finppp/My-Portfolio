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
            <div>{this.state.sliderValue}</div>
          </DraggableObject>
        </DraggableCore>
      </SliderContainer>
    );
  }

}

export default Slider;

const SliderContainer = styled.div`
  float: left;
  height: 100%;
  width: 12.5%;
`

const DraggableObject = styled.div`
  transition: top 0.1s cubic-bezier(0.01, 0.69, 0.58, 1);
  position: relative;
  top: ${props => props.yPostition + 'px'} ;
  background-color: green;
  width: 100%;
  height: 10%;
`
