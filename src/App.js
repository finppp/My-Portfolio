import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Top from './components/top/Top';
import SkillsBlock from './components/skills/SkillsBlock';
import Bio from './components/bio/Bio';

class App extends Component {
  render() {
    return (
      <FullContainer className="App">
        <Top/>
        <MiddleContainer>
          <SkillsBlock/>
          <Bio/>
        </MiddleContainer>
      </FullContainer>
    );
  }
}

export default App;

const FullContainer = styled.section`
  width: 100vw;
  height: 100vh;
  margin: 0;
`

const MiddleContainer = styled.section`
  width: 100vw;
  height: 100vh;
  margin: 0;
`
