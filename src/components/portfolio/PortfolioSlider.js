import React, { Component } from 'react';
import styled from 'styled-components';

class PortfolioSlider extends Component {

  render() {
    return (
      <Container>
        <Slide/>
        <Slide/>
        <Slide/>
        <Slide/>
        <Slide/>
        <Slide/>
        <Slide/>
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
  width: calc(25%/7);
  height: 100%;
  display: inline-block;
`

class ViewSlide extends Component {
  render() {
    return (
      <ViewSlideContainer>
        VIEWSLIDE
      </ViewSlideContainer>
    )
  }
}

const ViewSlideContainer = styled.div`
  width: 75%;
  height: 100%;
  display: inline-block;
  background-color: red;
`
