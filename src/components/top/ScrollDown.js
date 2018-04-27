import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import * as colourSwatch from '../../variables/colours';


class ScrollDown extends Component {

  scrollTo = (element) => {
    scroller.scrollTo(element, {
      duration: 500,
      smooth: true,
      containerId: 'ContainerElementID',
      // offset: 50 // Scrolls to element + 50 pixels down the page
    })

  }

  render() {
    return (
      <Container currentColour={this.props.currentColour}>
        <i className="fas fa-arrow-down" onClick={() => this.scrollTo('bio')}></i>
        {/* <i className="fas fa-arrow-alt-circle-down"></i> */}
      </Container>
    );
  }

}

export default ScrollDown;

const Container = styled.div`
  pointer-events: none;
  position: absolute;
  top: 90%;
  height: 10%;
  width: 100%;
  ${'' /* background-color: black; */}
  display: flex;
  justify-content: center;
  align-items: center;
  i{
    pointer-events: all;
    cursor: pointer;
    font-size: 3em;
    ${'' /* color: rgb(255, 209, 56); */}
    color: ${props => colourSwatch.activeColours[props.currentColour]};

  }
`
