import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import {Motion, spring} from 'react-motion';

import SkillReadMoreSection from './SkillReadMoreSection';
import * as colourSwatch from '../../variables/colours';
import SkillsTitle from './SkillsTitle';

import firebaseSVG from '../../icons/firebase.svg'
import reactSVG from '../../icons/react.svg'
import gitSVG from '../../icons/git.svg'
import cssSVG from '../../icons/css3.svg'
import githubSVG from '../../icons/github.svg'
import photoshopSVG from '../../icons/photoshop.svg'
import illustratorSVG from '../../icons/illustrator.svg'
import javascriptSVG from '../../icons/javascript.svg'
import googleSVG from '../../icons/google.svg'
import cloudSVG from '../../icons/cloud.svg'
import htmlSVG from '../../icons/html5.svg'
import wordpressSVG from '../../icons/wordpress.svg'
import cSVG from '../../icons/c.svg'
import seoSVG from '../../icons/seo.svg'

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
        icon: javascriptSVG,
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
      <SkillsContainer>
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
  height: 90%;
`

const SkillBox = styled.div`
  display: block;
  float: left;
  height: calc(100% / 3);
  width: calc(100% / 7);
  animation: ${slideIn} 1s forwards;
  transform: translateX(1000%);

  text-align: left;
  ${'' /* margin: 0px 5px 5px 5px; */}

  p {
    transition: ease-out color 3s;
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
    background-color: rgb(106, 106, 106);
  }
  &:nth-child(even) {
    background-color: rgb(136, 136, 136);
  }
  &:nth-child(1) {
    animation-delay: .5s;
    &:hover p {
      color: ${colourSwatch.colours[1]};
    }
  }
  &:nth-child(2) {
    animation-delay: 1s;
    &:hover p {
      color: ${colourSwatch.colours[2]};
    }
  }
  &:nth-child(3) {
    animation-delay: 1.5s;
    &:hover p {
      color: ${colourSwatch.colours[0]};
    }
  }
  &:nth-child(4) {
    animation-delay: 2s;
    &:hover p {
      color: ${colourSwatch.colours[3]};
    }
  }
  &:nth-child(5) {
    animation-delay: 2.5s;
    &:hover p {
      color: ${colourSwatch.colours[0]};
    }
  }
  &:nth-child(6) {
    animation-delay: 3s;
    &:hover p {
      color: ${colourSwatch.colours[3]};
    }
  }
  &:nth-child(7) {
    animation-delay: 3.5s;
    &:hover p {
      color: ${colourSwatch.colours[1]};
    }
  }
  &:nth-child(8) {
    animation-delay: 4s;
    &:hover p {
      color: ${colourSwatch.colours[2]};
    }
  }
  &:nth-child(9) {
    animation-delay: 4.5s;
    &:hover p {
      color: ${colourSwatch.colours[0]};
    }
  }
  &:nth-child(10) {
    animation-delay: 5s;
    &:hover p {
      color: ${colourSwatch.colours[3]};
    }
  }
  &:nth-child(11) {
    animation-delay: 5.5s;
    &:hover p {
      color: ${colourSwatch.colours[0]};
    }
  }
  &:nth-child(13) {
    animation-delay: 6s;
    &:hover p {
      color: ${colourSwatch.colours[3]};
    }
  }
`;



const SkillText = styled.p`
  font-size: 1vw;
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
  font-size: 0.5vw;
  position: absolute;
  right: 5px;
  bottom: 5px;
`
