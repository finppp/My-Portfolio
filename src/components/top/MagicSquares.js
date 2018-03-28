import React, { Component } from 'react';
import styled from 'styled-components';
import MagicSquare from './MagicSquare';

class MagicSquares extends Component {

  render() {


    return (
      <Container>
        {generateMagicSquares(152)}
      </Container>
    );
  }

}

export default MagicSquares;

const Container = styled.section`
  height: 800px;
`


function generateMagicSquares(squareCount) {
  let squares = []

  for (var i = 0; i < squareCount; i++) {
    let randomNumber = Math.floor((Math.random() * 4) + 1);
    console.log(randomNumber);
    squares.push(<MagicSquare key={i} currentColourNumber={randomNumber}/>);
  }

  return(
    squares
  )
}
