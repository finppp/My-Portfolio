import React, { Component } from 'react';
import styled from 'styled-components';
import MagicSquare from './MagicSquare';
import { database } from '../../database';
class MagicSquares extends Component {

  componentDidMount() {
    // database.ref('magic-squares/').on('child_added', function(snapshot) {
    //   console.log(snapshot.val());
    // })

    database.ref('magic-squares/').on('child_changed', function(snapshot) {
      //this should be any updated square
      console.log(snapshot.key, snapshot.val());
    })

    database.ref('magic-squares/').once('value').then(function(snapshot) {
      //this shuold be the entire array
      console.log(snapshot.val())
    })
  }

  componentWillUnmount() {
    //this is where you would stop the firebase listener.
    //this is not needed for a single page app as this component never destructs.
  }

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
    squares.push(<MagicSquare key={i} squareNumber={i} currentColourNumber={randomNumber}/>);
  }

  return(
    squares
  )
}
