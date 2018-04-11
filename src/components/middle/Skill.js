import React, { Component } from 'react';
import styled from 'styled-components';



class Skill extends Component {

  render() {
    console.log(this.props.key);
    return (
      <SkillText>{this.props.skillData.title}</SkillText>
    );
  }

}

export default Skill;
