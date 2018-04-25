import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Confetti from 'react-dom-confetti';
import { CSSTransitionGroup } from 'react-transition-group';
import '../../Animations.css';

const config = {
  angle: 32,
  spread: 59,
  startVelocity: 45,
  elementCount: 50,
  decay: 0.9
};

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      confetti: false,
      displayMenu: true
    };
  }

  toggleMenu = () => {
    let newState = !this.state.displayMenu;
    this.setState({
      displayMenu: newState
    })
  }

  render() {
    return (
      <Container>
        <Confetti active={ this.state.confetti } config={ config }/>
        <Toggle onClick={() => this.toggleMenu()}>
          <i class="fas fa-bars"></i>
          <p>
            <span>M</span>
            <span>e</span>
            <span>n</span>
            <span>u</span>
            <span>.</span> </p>
        </Toggle>

        <div style={{"overflow":"hidden"}}>
          <CSSTransitionGroup
              transitionName="menu"
              transitionAppear={false}
              transitionEnterTimeout={500}
              transitionEnter={true}
              transitionLeaveTimeout={500}
              transitionLeave={true}
            >
            {this.state.displayMenu &&
              <div>
                <MenuItem>
                  <p>Home</p>
                </MenuItem>
                <MenuItem>
                  <p>About me</p>
                </MenuItem>
                <MenuItem>
                  <p>Skills</p>
                </MenuItem>
              </div>
            }

          </CSSTransitionGroup>
        </div>
      </Container>
    );
  }

}

export default Menu;

const Container =  styled.div`
  position: fixed;
  z-index: 5;
  top: 3%;

  p, i {
    color: white;
    padding-left: 7px;
    display: inline-block;
    margin: 0;
  }
`
const Delayed = styled.div`

`

const Toggle =  styled.div`
  box-shadow: 0px 0px 10px #00000036;
  cursor: pointer;

  font-size: 16px;
  font-size: 2em;
  background-color: rgb(0, 0, 0);
  top: 10px;
  padding: 6px 28px 6px 15px;
  &:hover{
    p, span, i{
      color:rgb(33, 255, 135)
    }
  }
`

const MenuItem = styled.div`
  box-shadow: 0px 0px 10px #00000036;
  cursor: pointer;

  font-size: 16px;
  font-size: 1.5em;
  background-color: rgb(0, 0, 0);
  top: 10px;
  padding: 6px 28px 6px 10px;
  margin: 5px 10px 5px 0px;

  &:hover{
    p, span, i{
      color:rgb(33, 255, 135)
    }
  }
`
