import React, { Component } from 'react';
import styled from 'styled-components';

import cakevalley from '../../images/cakevalley/cakevalley-home.png';
import boathouse from '../../images/boathouse/boathouse-home.png';
import folded from '../../images/folded/folded-home.png';
import paddywack from '../../images/paddywack/paddywack-home.png';
import rowsquad from '../../images/rowsquad/rowsquad-home.png';
import telscombe from '../../images/telscombe/telscombe-home.png';
import tshirt from '../../images/tshirt/tshirt-home.png';

const portfolioDetails = [
  {
    title: "The Cake Valley",
    screenshots: [cakevalley],
    bio: "The long bit of text goes here",
    tools: [],
    url: "http://www.tshirt.co.uk/"

  },
  {
    title: "MyBoathouse",
    screenshots: [boathouse],
    bio: "The long bit of text goes here",
    tools: [],
    url: "http://www.tshirt.co.uk/"

  },
  {
    title: "Folded Group",
    screenshots: [folded],
    bio: "The long bit of text goes here",
    tools: [],
    url: "http://www.tshirt.co.uk/"

  },
  {
    title: "Paddywack Prints",
    screenshots: [paddywack],
    bio: "The long bit of text goes here",
    tools: [],
    url: "http://www.tshirt.co.uk/"

  },
  {
    title: "RowSquad",
    screenshots: [rowsquad],
    bio: "The long bit of text goes here",
    tools: [],
    url: "http://www.tshirt.co.uk/"

  },
  {
    title: "Telscombe Village",
    screenshots: [telscombe],
    bio: "The long bit of text goes here",
    tools: [],
    url: "https://telscombevillageclub.co.uk/"
  },
  {
    title: "Tshirt.co.uk",
    screenshots: [tshirt],
    bio: "The long bit of text goes here",
    tools: [],
    url: "http://www.tshirt.co.uk/"
  }
]

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
  background-color: green;
`

const PickerSection = styled.div`
  float: left;
  width: 30%;
  height: 100%;
  background-color: orange;
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



class PortfolioDetails extends Component {
  render() {
    return (
      <ViewSlideContainer>
        <Title>
          <h2>{this.props.itemDetails.title}</h2>
        </Title>
        <BottomContainer>
          <LeftColumn>
            <TextDetails>
              <p>{this.props.itemDetails.details}</p>
            </TextDetails>
            <Outlink>
              <a href={this.props.itemDetails.outlink}>Visit Site -></a>
            </Outlink>
          </LeftColumn>
          <RightColumn>
            <Screenshot>
              <WebsiteImageContainer>
                <img src={this.props.itemDetails.screenshots[0]}/>
                <Stand></Stand>
                <StandBase></StandBase>
              </WebsiteImageContainer>
            </Screenshot>
            <ToolsUsed>

            </ToolsUsed>
          </RightColumn>
        </BottomContainer>
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

const Title = styled.div`
  height: 10%;
  width: 100%;
  h2{
    font-size: 2em;
    margin: 0;
  }
`

const BottomContainer = styled.div`
  height: 90%;
  width: 100%;
`

const LeftColumn = styled.div`
  float: left;
  height: 100%;
  width: 50%;
`

  const TextDetails = styled.div`
    height: 80%;
    width: 100%;
    p {

    }
  `
  const Outlink = styled.div`
    height: 20%;
    width: 100%;
    a {

    }
  `

const RightColumn = styled.div`
  display: inline-block;
  height: 100%;
  width: 50%;
`


  const Screenshot = styled.div`
    position: relative;
    height: 70%;
    width: 100%;
    img{
      position: relative;
      z-index: 3;
      width: 100%;
    }
  `
  const WebsiteImageContainer = styled.div`
    font-size: 0;
    border-style: solid;
    border-width: 7px;
    border-color: black;
    border-radius: 1%;
    position: absolute;
    ${'' /* height: 67%; */}
    ${'' /* width: 56%; */}
    top: 3%;
    ${'' /* left: 22%; */}
    background-color: green;
    z-index: 2;
    margin-right: 10%;
  `

  const Stand = styled.div`
    box-shadow: inset 1px 14px 15px -10px #000000bd, inset 20px -1px 16px 0px #00000073;

    position: absolute;
    height: 20%;
    width: 10%;
    top: 100%;
    left: 45%;
    background: linear-gradient(45deg,#909090,#b9b9b9);
    border-top: 7px solid;


    ${'' /* &:before {
      content: "";
      position: absolute;
      top: 0px;
      border-left: 16px solid transparent;
      border-right: 0px solid transparent;
      border-bottom: 5px solid #b8b8b8;
      left: -50%;
      top: 87%
    }
    &:after {
      content: "";
      position: absolute;
      top: 0px;
      border-left: 0px solid transparent;
      border-right: 16px solid transparent;
      border-bottom: 5px solid #b8b8b8;
      left: 100%;
      top: 87%
    } */}
  `
  const StandBase = styled.div`
    box-shadow: inset -20px 7px 15px -10px #ffffff, inset 20px -1px 16px 0px #00000073;

    border-radius: 15px 15px 0px 0px;
    position: absolute;
    height: 5%;
    width: 30%;
    top: 120%;
    left: 35%;
    background: linear-gradient(45deg,#909090,#bdbdbd);


  `

  const ToolsUsed = styled.div`
    height: 30%;
    width: 100%;
  `
