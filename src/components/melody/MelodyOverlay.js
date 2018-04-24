import React, { Component } from 'react';
import styled from 'styled-components';

class MelodyOverlay extends Component {

  render() {
    return (
      <Container>
        <CloseButton onClick={this.props.hideOverlay}>&#10006;</CloseButton>
      </Container>
    );
  }

}

export default MelodyOverlay;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: pink;
`

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  font-size: 5em;
  padding-left: 0.3em;
  transition: color 1s;

  &:hover {
    cursor: pointer;
    color: rgb(255, 255, 255);
    transition: none;
  }
`
