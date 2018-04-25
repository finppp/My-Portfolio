import React, { Component } from 'react';
import portfolioDetails from '../../variables/portfolioData';
import PortfolioDetails from './PortfolioDetails'

import styled from 'styled-components';

class PortfolioSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPorfolioItem: 2
    };
  }

  changePortfolioItem = (newItem) => {
    console.log("newItem");
    this.setState({
      currentPorfolioItem: newItem
    })
  }

  render() {
    return (
      <Container>
        <PickerSection>
          <Pick active={this.state.currentPorfolioItem == 0} onClick={() => this.changePortfolioItem(0)} title={portfolioDetails[0].title}/>
          <Pick active={this.state.currentPorfolioItem == 1} onClick={() => this.changePortfolioItem(1)} title={portfolioDetails[1].title}/>
          <Pick active={this.state.currentPorfolioItem == 2} onClick={() => this.changePortfolioItem(2)} title={portfolioDetails[2].title}/>
          <Pick active={this.state.currentPorfolioItem == 3} onClick={() => this.changePortfolioItem(3)} title={portfolioDetails[3].title}/>
          <Pick active={this.state.currentPorfolioItem == 4} onClick={() => this.changePortfolioItem(4)} title={portfolioDetails[4].title}/>
          <Pick active={this.state.currentPorfolioItem == 5} onClick={() => this.changePortfolioItem(5)} title={portfolioDetails[5].title}/>
          <Pick active={this.state.currentPorfolioItem == 6} onClick={() => this.changePortfolioItem(6)} title={portfolioDetails[6].title}/>
        </PickerSection>
        <PortfolioDetails
          itemDetails={portfolioDetails[this.state.currentPorfolioItem]}
          />
      </Container>
    );
  }

}

export default PortfolioSlider;

const Container = styled.div`
  width: 100%;
  height: 90%;
  ${'' /* background-color: green; */}
`

const PickerSection = styled.div`
  float: left;
  width: 30%;
  height: 100%;
  ${'' /* background-color: orange; */}
`

class Pick extends Component {
  render() {
    return (
      <PickContainer onClick={this.props.onClick} active={this.props.active}>
        <SlideContainer className="slides">
        <p>{this.props.title}</p>
        </SlideContainer>
        <ArrowContainer>
          <i className="fas fa-arrow-right"></i>
        </ArrowContainer>
      </PickContainer>
    )
  }
}


const PickContainer = styled.div`
  position: relative;
  width: 100%;
  height: 12.5%;
  background-color: rgb(150, 182, 194);
  cursor: pointer;
  p {
    text-decoration: ${props => props.active ? 'underline' : 'none'};
    color: ${props => props.active ? 'white' : 'black'};
    margin: 0;
    font-size: 2em;
  }
  &:hover {
    p, i {
      color: white;
    }
    > .slides {
      width: 80%;
    }
  }
`

const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 1s ease;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(51, 158, 199);
`

const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
  width: 20%;
  height: 100%;
  background-color: rgb(51, 158, 199);
  ${'' /* background-color: rgb(173, 233, 255); */}
  i {
    font-size: 2em;
  }
`
