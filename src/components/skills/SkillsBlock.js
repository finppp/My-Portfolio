import React, { Component } from 'react';
import styled from 'styled-components';
import Skills from './Skills';


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

const BlockContainer = styled.section `
  font-size: 16px;
  display: inline-block;
  background-color: rgb(255, 255, 255);
  width: 50%;
  height: 60%;
  overflow: hidden;
`
