import React, { Component } from 'react';
import styled from 'styled-components';
import '../../Animations.css'

class SkillReadMoreSection extends Component {

  render() {
    return (
      <AbsoluteContainer key="overlay">
        <TopSection>
          <CloseButton onClick={this.props.onCloseOverlay}>&#10006;</CloseButton>
          <Heading>{this.props.skillData.title}</Heading>
        </TopSection>
        <BottomSection>
          <TextContainer>
            <p>{this.props.skillData.description}</p>
          </TextContainer>
          <LogoContainer>
            <Logo src={this.props.skillData.icon}/>
          </LogoContainer>
        </BottomSection>
      </AbsoluteContainer>
    );
  }

}

export default SkillReadMoreSection;

const AbsoluteContainer = styled.div`
  float: left;
  z-index: 5;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgb(196, 196, 196);
`

const TopSection = styled.div`
  display: block;
  width: 100%;
  height: 20%;
`

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  font-size: 5em;
  padding-left: 0.3em;
  transition: color 1s;

  &:hover {
    cursor: pointer;
    color: rgb(255, 255, 255);
    transition: none;
  }
`

const Heading = styled.p`
  color: white;
  margin: 0 auto;
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: 3em;
`

const BottomSection = styled.div`
  display: block;
  width: 100%;
  height: 80%;
`

const LogoContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 30%;
  height: 100%;
`

const Logo = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
`

const TextContainer = styled.div`
  float: left;
  display: inline-block;
  width: 70%;
  height: 100%;
  text-align: left;
  p{
    margin: 20px 14% 20px 40px;
    font-size: 1.3em;
  }
`
