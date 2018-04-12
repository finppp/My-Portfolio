import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import * as colourSwatch from '../../variables/colours';
class SkillsTitle extends Component {

  render() {
    let generatedSpans = [];
    if (!this.props.text) {
      console.log('there is not text prop');
    }else {
      for (var i = 0; i < this.props.text.length; i++) {
        generatedSpans.push(<span>{this.props.text[i]}</span>)
      }
    }

    return (
      <Container>
        <p>
          {generatedSpans}
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
  cursor: default;
  height: calc(100% / 3);
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
