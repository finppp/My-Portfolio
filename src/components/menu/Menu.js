import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import * as colourSwatch from '../../variables/colours';
import Confetti from 'react-dom-confetti';
import { CSSTransitionGroup } from 'react-transition-group';
import '../../Animations.css';
// import * as Scroll from 'react-scroll';
// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const config = {
  angle: 5,
  spread: 59,
  startVelocity: 45,
  elementCount: 50,
  decay: 0.9
};
// const config = {
//   angle: 0,
//   spread: 112,
//   startVelocity: 40,
//   elementCount: 45,
//   decay: 0.9
// };
class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      confetti: false,
      displayMenu: false
    };
  }

  toggleMenu = () => {
    let newState = !this.state.displayMenu;

    this.setState({
      displayMenu: newState,
      confetti: false
    })
  }

  scrollTo = (element) => {
    this.setState({
      displayMenu: false,
      confetti: false
    })
    scroller.scrollTo(element, {
      duration: 500,
      smooth: true,
      containerId: 'ContainerElementID',
      // offset: 50 // Scrolls to element + 50 pixels down the page
    })

  }

  triggerConfetti = () => {
    this.setState({
      displayMenu: false,
      confetti: true
    })

  }

  render() {
    return (
      <Container>
        <Confetti active={ this.state.confetti } config={ config }/>
        <Toggle currentColour={this.props.currentColour} onClick={() => this.toggleMenu()}>
          <i className="fas fa-bars"></i>
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
                <MenuItem currentColour={this.props.currentColour} key={0} onClick={() => this.scrollTo('top')}>
                  <p>Home</p>
                </MenuItem>

                <MenuItem currentColour={this.props.currentColour} key={1} onClick={() => this.triggerConfetti()}>
                  <p>Confetti</p>
                </MenuItem>

                <MenuItem currentColour={this.props.currentColour} key={2} onClick={() => this.scrollTo('bio')}>
                  <p>About me</p>
                </MenuItem>

                <MenuItem currentColour={this.props.currentColour} key={3} onClick={() => this.scrollTo('melody')}>
                  <p>Melody</p>
                </MenuItem>

                <MenuItem currentColour={this.props.currentColour} key={4} onClick={() => this.scrollTo('portfolio')}>
                  <p>Portfolio</p>
                </MenuItem>

                <MenuItem currentColour={this.props.currentColour} key={5} onClick={() => this.scrollTo('bottom')}>
                  <p>Contact</p>
                </MenuItem>

                <ColourChoice key={6}>
                  <Colour
                    onClick={() => this.props.changeWebsiteColour(0)}
                    style={{backgroundColor: colourSwatch.activeColours[0]}}>
                    {this.props.currentColour == 0 && <i class="fas fa-check"></i>}
                  </Colour>

                  <Colour
                    // onClick={() => this.changeWebsiteColour(1)}
                    onClick={() => this.props.changeWebsiteColour(1)}
                    style={{backgroundColor: colourSwatch.activeColours[1]}}>
                    {this.props.currentColour == 1 && <i class="fas fa-check"></i>}
                  </Colour>

                  <Colour
                    // onClick={() => this.changeWebsiteColour(2)}
                    onClick={() => this.props.changeWebsiteColour(2)}
                    style={{backgroundColor: colourSwatch.activeColours[2]}}>
                    {this.props.currentColour == 2 && <i class="fas fa-check"></i>}
                  </Colour>

                  <Colour
                    // onClick={() => this.changeWebsiteColour(3)}
                    onClick={() => this.props.changeWebsiteColour(3)}
                    style={{backgroundColor: colourSwatch.activeColours[3]}}>
                    {this.props.currentColour == 3 && <i class="fas fa-check"></i>}
                  </Colour>
                </ColourChoice>
                {/* <MenuItem onClick={() => this.scrollTo('skills')}>
                  <p>Skills</p>
                </MenuItem> */}
                {/* <MenuItem onClick={() => this.scrollTo('outlinks')}>
                  <p>Externals</p>
                </MenuItem> */}
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
      color: ${props => colourSwatch.activeColours[props.currentColour]};

    }
  }
`

const MenuItem = styled.div`
  box-shadow: 0px 0px 10px #00000036;
  cursor: pointer;

  font-size: 16px;
  font-size: 1.5em;
  background-color: rgb(0, 0, 0);
  ${'' /* top: 10px; */}
  padding: 6px 28px 6px 10px;
  margin: 5px 10px 5px 0px;

  &:hover{
    p, span, i{
      color: ${props => colourSwatch.activeColours[props.currentColour]};
    }
  }
`

const ColourChoice = styled.div`
  font-size: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 10px #00000036;
  background-color: rgb(0, 0, 0);
  ${'' /* top: 10px; */}
  padding: 5px;
  margin: 5px 10px 5px 0px;
`
const Colour = styled.div`
  ${'' /* transition: background-color 0.2s linear; */}

  cursor: pointer;
  font-size: 16px;
  margin: 5px;
  ${'' /* display: inline-block; */}
  background-color: red;
  width: 25%;
  height: 1.5em;
  width: 1.5em;
  ${'' /* justify-content: center; */}
  ${'' /* align-items: center; */}
  i{
    color: black;
    padding: 0;
  }
`

// const ColourChoice = styled.div`
//   position: relative;
//   display: inline-block;
//   cursor: pointer;
//   width: 25%;
//   height: 100%;
//   background-color: rgb(232, 22, 22);
// `
