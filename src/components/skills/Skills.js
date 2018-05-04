import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import {Motion, spring} from 'react-motion';
import media from '../../variables/mediaTemplates'
import { min, max } from '../../variables/mediaTemplates'
import SkillReadMoreSection from './SkillReadMoreSection';
import * as colourSwatch from '../../variables/colours';
import SkillsTitle from './SkillsTitle';



import { CSSTransitionGroup } from 'react-transition-group';
import '../../Animations.css';
import skillData from '../../variables/skillData'


class Skills extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayOverlay: false,
      selectedSkill: {
        title: "JavaScript",
        icon: 'javascriptSVG',
        description: "this is all i know about JS..."
      }
    };
  }

  openReadMore = (skill) => {
    this.setState({
      displayOverlay: true,
      selectedSkill: skill

    })
     console.log(skill);
  }

  closeReadMore = () => {
    this.setState({
      displayOverlay: false
    })
  }

  render() {
    const skills = skillData.map((skill, key) =>
      <SkillBox onClick={() => this.openReadMore(skill)}>
        <SkillText>{skill.title}</SkillText>
        <IconContainer>
          <Icon src={skill.icon} />
        </IconContainer>
        <ReadMore>Read More</ReadMore>
      </SkillBox>
    )

    return (
      <SkillsContainer name="skills">
        <CSSTransitionGroup
          transitionName="slidein"
          transitionAppear={false}
          transitionEnterTimeout={500}
          transitionEnter={true}
          transitionLeaveTimeout={500}
          transitionLeave={true}
        >
          {this.state.displayOverlay && <SkillReadMoreSection skillData={this.state.selectedSkill} onCloseOverlay={() => this.closeReadMore()} />}
        </CSSTransitionGroup>
        <SkillsTitle text="Things I'm good at."/>
        {skills}
        <SkillsTitle text="Bits I'm working on."/>
      </SkillsContainer>
    );
  }
}

export default Skills;



const slideIn = keyframes`
  100% { transform: translateX(0%); }
`
const SkillsContainer = styled.div`
  position: relative;
  height: 100%;
`

const SkillBox = styled.div`
  cursor: pointer;
  display: block;
  float: left;
  height: calc(100% / 3);
  width: calc(100% / 7);
  ${max.tablet`
    width: calc(100% / 5);
  `}
  animation: ${slideIn} 1s forwards;
  transform: translateX(1000%);
  text-align: left;

  p {
    transition: ease-out color 3s;
    ${max.tablet`
      font-size: 0.8em;
    `}
    ${max.phone`
      font-size: 0.6em;
    `}

  }

  img {
    transition: ease-out filter 2s;
  }

  &:hover p {
    transition:none;
  }

  &:hover img {
    transition:none;
    filter: grayscale(0%);
  }

  &:nth-child(odd) {
    ${'' /* background-color: rgb(106, 106, 106); */}
    background-color: rgb(124, 124, 124);
  }
  &:nth-child(even) {
    ${'' /* background-color: rgb(136, 136, 136); */}
    background-color: rgb(97, 97, 97);
  }

  &:nth-child(1 ) { animation-delay:  1.1s}
  &:nth-child(2 ) { animation-delay:  1.2s}
  &:nth-child(3 ) { animation-delay:  1.3s}
  &:nth-child(4 ) { animation-delay:  1.4s}
  &:nth-child(5 ) { animation-delay:  1.5s}
  &:nth-child(6 ) { animation-delay:  1.6s}
  &:nth-child(7 ) { animation-delay:  1.7s}
  &:nth-child(8 ) { animation-delay:  1.8s}
  &:nth-child(9 ) { animation-delay:  1.9s}
  &:nth-child(10) { animation-delay: 2.0s}
  &:nth-child(11) { animation-delay: 2.1s}
  &:nth-child(12) { animation-delay: 2.2s}
  &:nth-child(13) { animation-delay: 2.3s}
  &:nth-child(14) { animation-delay: 2.4s}
  &:nth-child(15) { animation-delay: 2.5s}
  &:nth-child(16) { animation-delay: 2.6s}
  &:nth-child(17) { animation-delay: 2.7s}
  &:nth-child(18) { animation-delay: 2.8s}
  &:nth-child(19) { animation-delay: 2.9s}

  &:nth-child(4n-3) {
    &:hover p {
      color: ${colourSwatch.colours[0]};
    }
  }
  &:nth-child(4n-2) {
    &:hover p {
      color: ${colourSwatch.colours[1]};
    }
  }
  &:nth-child(4n-1) {
    &:hover p {
      color: ${colourSwatch.colours[2]};
    }
  }
  &:nth-child(4n) {
    &:hover p {
      color: ${colourSwatch.colours[3]};
    }
  }
`;



const SkillText = styled.p`
  font-size: 1em;
  padding-left: 10px;
  font-family: 'Nunito',sans-serif;
  color: white;
`

const IconContainer = styled.div`
  width: 100%;
  margin: 5px;
`

const Icon = styled.img`
  filter: grayscale(100%);
  width: 50%;
  ${'' /* transition: filter 0.6s; */}
  ${'' /* &:hover{
    filter: grayscale(0%);
  } */}
`

const ReadMore = styled.p`
  font-size: 0.9em;
  position: absolute;
  right: 5px;
  bottom: 5px;
`
