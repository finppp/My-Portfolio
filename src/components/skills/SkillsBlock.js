import React, { Component } from 'react';
import styled from 'styled-components';
import Skills from './Skills';
import { min, max } from '../../variables/mediaTemplates';

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
  ${max.desktop`
    width: 100%;
    height: 30%;
  `}
  height: 60%;
  overflow: hidden;
`
