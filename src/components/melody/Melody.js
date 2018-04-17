import React, { Component } from 'react';
import { DraggableCore } from 'react-draggable';
import styled from 'styled-components';
import Sliders from './Sliders';

class Melody extends Component {




  componentDidMount() {
    const height = this.melodyContainer.clientHeight;
    this.setState({
      containerHeight: height,
      blockSize: height/10
    })
  }

  render() {
    return (
      <Container innerRef={(melodyContainer) => this.melodyContainer = melodyContainer}>
        <Sliders/>
      </Container>
    );
  }

}

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
