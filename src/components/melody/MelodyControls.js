import React, { Component } from 'react';
import styled from 'styled-components';

class MelodyControls extends Component {

  render() {
    return (
      <Container>
        <Button onClick={() => this.props.displayOverlay()}>?</Button>
        <Button onClick={() => this.props.onPlay()}>►</Button>
        <Button onClick={() => this.props.onPlay()}>Volume</Button>
        <Button onClick={() => this.props.onsave()}>Save</Button>
      </Container>
    );
  }

}

export default MelodyControls;


const Container = styled.div`
  float: left;
  width: 20%;
  height: 100%;
  background-color: green;
`

const Button = styled.button`
  border: none;
  outline: none;
  width: 100%;
  height: 25%;
  background-color: orange;
`
