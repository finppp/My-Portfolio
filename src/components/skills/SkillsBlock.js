import React, { Component } from 'react';
import styled from 'styled-components';
import Skills from './Skills';

// import "typeface-roboto";

class SkillsBlock extends Component {

  render() {
    return (
      <BlockContainer>
        <Skills />
      </BlockContainer>
    );
  }

}

export default SkillsBlock;

const BlockTitle = styled.h2`
  background-color: black;
  height: 10%;
  margin: 0 auto;
  color: rgb(163, 163, 163);
  font-weight: 300;
  font-size: 3em;
  ${'' /* font-family: 'Montserrat', sans-serif; */}
`
// font-family: typeface-roboto;

const BlockContainer = styled.section `
  background-color: rgb(255, 255, 255);
  width: 50%;
  height: 60%;
  overflow: hidden;
  ${'' /* position: relative; */}
  float: right;
`
  // height:100%;
