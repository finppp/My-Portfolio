import React, { Component } from 'react';
import styled from 'styled-components';
import MagicSquare from './MagicSquare';
import { database } from '../../database';


class MagicSquares extends Component {

  constructor(props) {
    super(props);
    this.state = {
      magicSquares: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    };
  }

  componentDidMount() {
    let self = this;

    // get all intitial values
    database.ref('magic-squares/').once('value').then(function(snapshot) {
      // TODO: add some error checking.
      self.setState({
        magicSquares: snapshot.val()
      })
      //this should be the entire array
    })

    // listen for any changes of square colour
    database.ref('magic-squares/').on('child_changed', function(snapshot) {
      //this should be any updated square

      let newArray = Object.assign({}, self.state.magicSquares);
      newArray[snapshot.key] = snapshot.val()

      self.setState({
        magicSquares: newArray
      })
    })

  }

  componentWillUnmount() {
    //this is where you would stop the firebase listener.
    //this is not needed for a single page app as this component never destructs.
  }

  generateMagicSquares = (squareCount) => {
    let squares = []

    for (var i = 0; i < squareCount; i++) {
      // let randomNumber = Math.floor((Math.random() * 4) + 1);
      squares.push(<MagicSquare key={i} squareNumber={i} currentColourNumber={this.state.magicSquares[i]}/>);
    }

    return(
      squares
    )
  }

  render() {
    return (
      <Container>
        {this.generateMagicSquares(300)}
      </Container>
    );
  }

}

export default MagicSquares;

const Container = styled.section`
  height: 100%;
  overflow: hidden;
  ${'' /* background: linear-gradient(to left, red,green); */}
  background-color: black;
`
