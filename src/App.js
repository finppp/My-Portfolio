import React, { Component } from 'react';
import './App.css';
import Top from './components/top/Top';
import Middle from './components/middle/Middle';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <FullContainer className="App">
        <Top/>
        <Middle/>
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
