import React, { Component } from 'react';
import styled from 'styled-components';

class PortfolioSlider extends Component {

  render() {
    return (
      <Container>
        <Picker>
          <Slide/>
          <Slide/>
          <Slide/>
          <Slide/>
          <Slide/>
          <Slide/>
          <Slide/>
        </Picker>
        <ViewSlide/>
      </Container>
    );
  }

}

export default PortfolioSlider;

const Container = styled.div`
  width: 100%;
  height: 90%;
  background-color: green;
`

const Picker = styled.div`
  display: inline-block;
  width: 30%;
  height: 100%;
  background-color: green;
`





class Slide extends Component {
  render() {
    return (
      <SlideContainer>
        SLIDE
      </SlideContainer>
    )
  }
}

const SlideContainer = styled.div`
  width: 100%;
  height: calc(100%/8);
  display: inline-block;
`

class ViewSlide extends Component {
  render() {
    return (
      <ViewSlideContainer>
      </ViewSlideContainer>
    )
  }
}

const ViewSlideContainer = styled.div`
  width: 70%;
  height: 100%;
  display: inline-block;
  background-color: red;
`
