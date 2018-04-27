import React, { Component } from 'react';
import styled from 'styled-components';
import { min, max } from './variables/mediaTemplates'

import './App.css';
import Top from './components/top/Top';
import SkillsBlock from './components/skills/SkillsBlock';
import Bio from './components/bio/Bio';
import Melody from './components/melody/Melody';
import Portfolio from './components/portfolio/Portfolio';
import Menu from './components/menu/Menu';
import Contact from './components/contact/Contact';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class App extends Component {
  render() {
    return (
      <FullContainer id="ContainerElementID" className="App">
        <Menu/>
        <Top/>

        <MiddleContainer>
          <Bio/>
          <SkillsBlock/>
          <Melody/>
        </MiddleContainer>

        <BottomContainer name="bottom" >
          <Portfolio />
          <Contact/>
        </BottomContainer>
      </FullContainer>
    );
  }
}

export default App;

const FullContainer = styled.section`
  ${'' /* position: relative; */}
  width: 100vw;
  height: 100vh;
  margin: 0;
  overflow: auto;
`

const MiddleContainer = styled.section`
  font-size: 0;
  display: block;
  overflow: auto;
  width: 100%;
  height: 100%;
  ${max.desktop`height: 200%;`}

  margin: 0;
`

const BottomContainer = styled.section`
  position: relative;
  font-size: 0;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  ${'' /* background-color: teal; */}
`
