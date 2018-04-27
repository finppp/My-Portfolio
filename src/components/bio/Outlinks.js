import React, { Component } from 'react';
import styled from 'styled-components';
import { min, max } from '../../variables/mediaTemplates';
class Outlinks extends Component {
  render() {
    return (
      <OutlinksContainer name="outlinks">
        <h2>See me around the web.</h2>
        <OutlinkQuadrant key={1}>Github.</OutlinkQuadrant>
        <OutlinkQuadrant key={2}>Stackoverflow.</OutlinkQuadrant>
        <OutlinkQuadrant key={3}>This website Repo.</OutlinkQuadrant>
        <OutlinkQuadrant key={4}>Something else.</OutlinkQuadrant>
      </OutlinksContainer>
    )
  }
}

const OutlinksContainer = styled.section`
  display: inline-block;
  width: 60%;
  height: 100%;
  ${max.desktop`
    width: 60%;
    height: 50%;
  `}

  h2 {
    height: 10%;
  }
`
const OutlinkQuadrant = styled.div`
  display: inline-block;
  height: 40%;
  width: 50%;
`

export default Outlinks;
