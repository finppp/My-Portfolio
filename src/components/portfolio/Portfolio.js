import React, { Component } from 'react';
import styled from 'styled-components';
import PortfolioSlider from './PortfolioSlider';

class Portfolio extends Component {

  render() {
    return (
      <Container>
        <Heading>
          <h2>My Work.</h2>
        </Heading>
        <PortfolioSlider />
      </Container>
    );
  }

}

export default Portfolio;


const Container = styled.section`
  font-size: 16px;
  height: 65%;
  width: 100%;
  background-color: orange;
`

const Heading = styled.div`
  height: 10%;
  width: 100%;
  h2 {
    font-size: 2em;
    margin: 0 auto;
  }

`
