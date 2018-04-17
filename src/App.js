import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Top from './components/top/Top';
import SkillsBlock from './components/skills/SkillsBlock';
import Bio from './components/bio/Bio';
import Melody from './components/melody/Melody';

class App extends Component {
  render() {
    return (
      <FullContainer className="App">
        {/* <Top/> */}
        <MiddleContainer>
          <Bio/>
          <SkillsBlock/>
          <Melody/>
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
  font-size: 0;
  display: block;
  overflow: auto;
  width: 100vw;
  height: 100vh;
  margin: 0;
`
