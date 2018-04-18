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
  ${'' /* background-color: #323748; */}
`

const Button = styled.div`
  border: none;
  outline: none;
  width: 90%;
  height: 25%;
  font-size: 1.5em;
  font-weight: 500;
  color: white;
  &:hover{
    text-decoration: underline;
    color: rgb(255, 248, 77);
  }
`
