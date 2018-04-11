import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import {Motion, spring} from 'react-motion';
// import Skill from './Skill';
import * as colourSwatch from '../../variables/colours';
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
// import gitSVG from '../../icons/git.svg'

const skillData = [
  {
    title: "Javascript",
    icon: javascriptSVG
  },
  {
    title: "React.js",
    icon: reactSVG
  },
  {
    title: "Firebase",
    icon: firebaseSVG
  },
  {
    title: "Git",
    icon: gitSVG
  },
  {
    title: "Github",
    icon: githubSVG
  },
  {
    title: "HTML",
    icon: htmlSVG
  },
  {
    title: "CSS3",
    icon: cssSVG
  },
  {
    title: "Google Cloud Services",
    icon: cloudSVG
  },
  {
    title: "Search Engine Optimisation",
    icon: seoSVG
  },
  {
    title: "Adobe Software",
    icon: photoshopSVG,
    // icon2: illustratorSVG,
  },
  {
    title: "C++",
    icon: cSVG
  },
  {
    title: "WordPress",
    icon: wordpressSVG
  },
]

class Skills extends Component {

  render() {
    const skills = skillData.map((skill, key) =>
      <SkillBox>
        <SkillText>{skill.title}</SkillText>
        <IconContainer>
          <Icon src={skill.icon} />
          {skill.icon2 && <Icon src={skill.icon2} />}


        </IconContainer>
        <ReadMoreDiv>
          <ReadMore>Read More</ReadMore>
        </ReadMoreDiv>
      </SkillBox>
    )

    return (
      <SkillsContainer>
        {skills}
      </SkillsContainer>
    );
  }
}

export default Skills;



const slideIn = keyframes`
  100% { transform: translateX(0%); }
`
const SkillsContainer = styled.div`
  height: 100%;
`

const SkillBox = styled.div`
  height: 40%;
  animation: ${slideIn} 1s forwards;
  transform: translateX(1000%);

  float: left;
  display: block;
  width: 15%;
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

  &:nth-child(1) {
    background-color: rgb(106, 106, 106);
    animation-delay: .5s;
    &:hover p {
      color: ${colourSwatch.colours[1]};
    }
  }
  &:nth-child(2) {
    background-color: rgb(136, 136, 136);
    animation-delay: 1s;
    &:hover p {
      color: ${colourSwatch.colours[2]};
    }
  }
  &:nth-child(3) {
    background-color: rgb(106, 106, 106);
    animation-delay: 1.5s;
    &:hover p {
      color: ${colourSwatch.colours[0]};
    }
  }
  &:nth-child(4) {
    background-color: rgb(136, 136, 136);
    animation-delay: 2s;
    &:hover p {
      color: ${colourSwatch.colours[3]};
    }
  }
  &:nth-child(5) {
    background-color: rgb(106, 106, 106);
    animation-delay: 2.5s;
    &:hover p {
      color: ${colourSwatch.colours[0]};
    }
  }
  &:nth-child(6) {
    background-color: rgb(136, 136, 136);
    animation-delay: 3s;
    &:hover p {
      color: ${colourSwatch.colours[3]};
    }
  }
  &:nth-child(7) {
    background-color: rgb(136, 136, 136);
    animation-delay: 3.5s;
    &:hover p {
      color: ${colourSwatch.colours[1]};
    }
  }
  &:nth-child(8) {
    background-color: rgb(106, 106, 106);
    animation-delay: 4s;
    &:hover p {
      color: ${colourSwatch.colours[2]};
    }
  }
  &:nth-child(9) {
    background-color: rgb(136, 136, 136);
    animation-delay: 4.5s;
    &:hover p {
      color: ${colourSwatch.colours[0]};
    }
  }
  &:nth-child(10) {
    background-color: rgb(106, 106, 106);
    animation-delay: 5s;
    &:hover p {
      color: ${colourSwatch.colours[3]};
    }
  }
  &:nth-child(11) {
    background-color: rgb(136, 136, 136);
    animation-delay: 5.5s;
    &:hover p {
      color: ${colourSwatch.colours[0]};
    }
  }
  &:nth-child(12) {
    background-color: rgb(106, 106, 106);
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
const ReadMoreDiv = styled.div`

`
const ReadMore = styled.p`
  font-size: 0.5vw;
  position: absolute;
  right: 5px;
  bottom: 5px;
`