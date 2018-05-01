import React, { Component } from 'react';
import styled from 'styled-components';
import MeImg from '../../images/me-cropped-bw.jpg'
import Outlinks from './Outlinks';
import { min, max } from '../../variables/mediaTemplates';
import * as colourSwatch from '../../variables/colours';

class Bio extends Component {

  render() {
    return (
      <BlockContainer name="bio">
        <TopHalf currentColour={this.props.currentColour}>
          <TitleContainer>
            <p>About Me.</p>
          </TitleContainer>
          <BioTextContainer>
            <p>I am a web developer specialising in JavaScript and ReactJS. With over 5 years experience working closely on a wide range of projects.</p>
            <br/>
            <p>I have designed web applications from database structuring to planning launch strategies. Fullstack and further.</p>
            <br/>
            <p>Living in London. Looking for work iat somewhere really cool.</p>
          </BioTextContainer>
        </TopHalf>
        <BottomHalf currentColour={this.props.currentColour}>
          <Outlinks/>
          <ImageContainer>
          </ImageContainer>
        </BottomHalf>
      </BlockContainer>
    );
  }

}

export default Bio;


const BlockContainer = styled.section`
  font-size: 16px;
  float: left;
  width: 50%;
  height: 100%;
  ${max.desktop`
    width: 100%;
    height: 50%;
  `}
`

const TopHalf = styled.section`

  background-color: #4981c9;
  transition: background-color 0.2s linear;
  background-color: ${props => colourSwatch.activeColoursDark[props.currentColour]};

  height: 50%;
  width: 100%
`
const TitleContainer = styled.section`
  p {
    color: white;
    padding-top: 10px;
    margin: 0 auto;
    font-size: 2em;
  }
`
const BioTextContainer = styled.section`
padding-top: 30px;
padding-left: 30px;
padding-right: 30px;
text-align: left;

  p {
    color: white;
    margin: 0 auto;
    font-size: 1.5em;
    ${max.tablet`
      font-size: 1em;
      `}
  }
`

const BottomHalf = styled.section`
  transition: background-color 0.2s linear;
  background-color: ${props => colourSwatch.activeColours[props.currentColour]};
  ${'' /* background-color: rgb(249, 204, 53); */}

  height: 50%;
  width: 100%
`
const ImageContainer = styled.div`
  float: right;
  background-image: url(${MeImg});
  background-size: cover;
  background-position: center;
  width: 40%;
  height: 100%;
  img{
    height: 100%;
  }
`
