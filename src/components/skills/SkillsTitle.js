import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import * as colourSwatch from '../../variables/colours';
class SkillsTitle extends Component {

  render() {
    return (
      <Container>
        <p>
          <span>T</span>
          <span>h</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
          <span>s </span>
          <span>I</span>
          <span>'</span>
          <span>m </span>
          <span>g</span>
          <span>o</span>
          <span>o</span>
          <span>d </span>
          <span>a</span>
          <span>t</span>
          <span>.</span>
        </p>
      </Container>
    );
  }

}

export default SkillsTitle;

const slideIn = keyframes`
  100% { transform: translateX(0%); }
`

const Container = styled.div`
  cursor: pointer;
  height: 40%;
  animation: ${slideIn} 1s forwards;
  transform: translateX(1000%);
  background-color: rgb(0, 0, 0);

  float: left;
  display: block;
  width: calc(200% / 7);
  text-align: left;
  P {
    color: white;
    font-size: 3em;
    margin: 5px 5px 5px 20px;
    & span{
      transition: ease-out color 1s;
      & :hover {
        transition: none;
      }
    }
    & span:hover:nth-child(4n){
      color: ${colourSwatch.colours[0]};
    }
    & span:hover:nth-child(4n-3){
      color: ${colourSwatch.colours[1]};
    }
    & span:hover:nth-child(4n-2){
      color: ${colourSwatch.colours[2]};
    }
    & span:hover:nth-child(4n-1){
      color: ${colourSwatch.colours[3]};
    }
  }
`
