import React, { Component } from 'react';
import portfolioDetails from '../../variables/portfolioData';
import PortfolioDetails from './PortfolioDetails'
import * as colourSwatch from '../../variables/colours';

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

  previousPortolio = () => {
    const currentPortfolioItem = this.state.currentPorfolioItem;
    let newPortfolioItem = currentPortfolioItem - 1;
    if (newPortfolioItem <= -1){
      newPortfolioItem = 6;
    }

    this.setState({
      currentPorfolioItem: newPortfolioItem
    })
  }

  nextPortolio = () => {
    const currentPortfolioItem = this.state.currentPorfolioItem;
    let newPortfolioItem = currentPortfolioItem + 1;
    if (newPortfolioItem >= 7){
      newPortfolioItem = 0;
    }

    this.setState({
      currentPorfolioItem: newPortfolioItem
    })
  }

  render() {
    return (
      <Container>
        <PickerSection>
          <Title>
            <h2>My Recent Work.</h2>
          </Title>
          <Pick currentColour={this.props.currentColour} active={this.state.currentPorfolioItem == 0} onClick={() => this.changePortfolioItem(0)} title={portfolioDetails[0].title}/>
          <Pick currentColour={this.props.currentColour} active={this.state.currentPorfolioItem == 1} onClick={() => this.changePortfolioItem(1)} title={portfolioDetails[1].title}/>
          <Pick currentColour={this.props.currentColour} active={this.state.currentPorfolioItem == 2} onClick={() => this.changePortfolioItem(2)} title={portfolioDetails[2].title}/>
          <Pick currentColour={this.props.currentColour} active={this.state.currentPorfolioItem == 3} onClick={() => this.changePortfolioItem(3)} title={portfolioDetails[3].title}/>
          <Pick currentColour={this.props.currentColour} active={this.state.currentPorfolioItem == 4} onClick={() => this.changePortfolioItem(4)} title={portfolioDetails[4].title}/>
          <Pick currentColour={this.props.currentColour} active={this.state.currentPorfolioItem == 5} onClick={() => this.changePortfolioItem(5)} title={portfolioDetails[5].title}/>
          <Pick currentColour={this.props.currentColour} active={this.state.currentPorfolioItem == 6} onClick={() => this.changePortfolioItem(6)} title={portfolioDetails[6].title}/>
        </PickerSection>
        <PortfolioDetails
          onNextPortfolio={() => this.nextPortolio()}
          onPreviousPortfolio={() => this.previousPortolio()}
          itemDetails={portfolioDetails[this.state.currentPorfolioItem]}
          />
      </Container>
    );
  }

}

export default PortfolioSlider;

const Container = styled.div`
  box-shadow: inset 0px 8px 20px 0px #00000029;
  width: 100%;
  height: 90%;
  ${'' /* background-color: green; */}
`

const PickerSection = styled.div`
  float: left;
  width: 30%;
  @media (max-width: 700px){
    display: none;
  }
  height: 100%;
  ${'' /* background-color: orange; */}
`

const Title = styled.div`
  position: relative;
  width: 100%;
  height: 12.5%;
  h2 {
    font-size: 16px;
    font-size: 2em;
  }
`

class Pick extends Component {
  render() {
    console.log(this.props.currentColour);
    return (
      <PickContainer onClick={this.props.onClick} active={this.props.active}>
        <SlideContainer className="slides" active={this.props.active}>
        <p>{this.props.title}</p>
        </SlideContainer>
        <ArrowContainer currentColour={this.props.currentColour} active={this.props.active}>
          <i className="fas fa-arrow-right"></i>
        </ArrowContainer>
      </PickContainer>
    )
  }
}


const PickContainer = styled.div`
  margin: 5px 0;
  position: relative;
  width: 100%;
  height: 12.5%;
  ${'' /* background-color: rgb(150, 182, 194); */}
  cursor: pointer;
  p {
    text-decoration: ${props => props.active ? 'underline' : 'none'};
    color: ${props => props.active ? 'white' : 'black'};
    margin: 0;
    font-size: 1.7em;
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
  transition: width 0.75s ease;
  position: absolute;
  width: 100%;
  ${props => props.active ? 'width: 80%' : ''};
  height: 90%;
${'' /*THIS COLOUR MUST MATCH THE ONE IN THE ABOVE COMPONENT  */}
  ${'' /* background-color: #90d4de; */}

  background-color: #afafaf;
  background-color: #b8b8b8;
`

const ArrowContainer = styled.div`
  background-color: #6c6c6c;
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
  width: 20%;
  height: 90%;
  ${'' /* color: ${props => colourSwatch.activeColours[props.currentColour]}; */}
  transition: background-color 0.2s linear;

  ${props => props.active ? 'background-color: ' + colourSwatch.activeColours[props.currentColour] : ''};
  i {
    ${props => props.active ? 'color: white' : ''};
    font-size: 2em;
  }
${'' /* background-color: rgb(51, 158, 199); */}
${'' /* background-color: rgb(173, 233, 255); */}
`
