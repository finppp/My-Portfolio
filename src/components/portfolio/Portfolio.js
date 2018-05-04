import React, { Component } from 'react';
import styled from 'styled-components';
import PortfolioSlider from './PortfolioSlider';
import { max, min } from '../../variables/mediaTemplates';

class Portfolio extends Component {

  render() {
    return (
      <Container name="portfolio">
        <PortfolioSlider currentColour={this.props.currentColour}/>
      </Container>
    );
  }

}

export default Portfolio;


const Container = styled.section`
  font-size: 16px;
  height: 66%;

  ${'' /* ${max.phone`height: 100%;`} */}
  padding-bottom: 1%;
  width: 100%;
  background: linear-gradient(45deg,rgb(255, 255, 255),rgb(210, 210, 210));
  ${'' /* background: linear-gradient(45deg, rgb(217, 217, 217), rgb(93, 93, 93)); */}
  background-color: #90d4de;
`
