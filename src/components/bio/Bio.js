import React, { Component } from 'react';
import styled from 'styled-components';
import MeImg from '../../images/me-cropped-bw.jpg'

class Bio extends Component {

  render() {
    return (
      <BlockContainer>
        <TopHalf>
          <TitleContainer>
            <p>About Me.</p>
          </TitleContainer>
        </TopHalf>
        <BottomHalf>
          <ImageContainer>
            {/* <img src={meImg}/> */}
          </ImageContainer>

        </BottomHalf>
      </BlockContainer>
    );
  }

}

export default Bio;

const BlockContainer = styled.section`
width: 50%;
height: 100%;
`

const TopHalf = styled.section`
  background-color: #90d4de;
  height: 50%;
  width: 100%
`
const TitleContainer = styled.section`
  p {
    padding-top: 10px;
    margin: 0 auto;
    font-size: 2em;
  }
`

const BottomHalf = styled.section`
  background-color: rgb(249, 204, 53);
  height: 50%;
  width: 100%
`
const ImageContainer = styled.div`
  float: right;
  background-image: url(${MeImg});
  background-size: cover;
  background-position: center;
  width: 40%;
  height: 100%;
  img{
    height: 100%;
  }
`
