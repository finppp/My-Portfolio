import React, { Component } from 'react';
import styled from 'styled-components';

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

export default PortfolioDetails;

const ViewSlideContainer = styled.div`
  width: 70%;
  height: 100%;
  display: inline-block;
  ${'' /* background-color: red; */}
`

const Title = styled.div`
  height: 10%;
  width: 100%;
  h2{
    font-weight: 400;
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
    top: 3%;
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
