import React, { Component } from 'react';
import styled from 'styled-components';
import { min, max } from '../../variables/mediaTemplates';
class Outlinks extends Component {
  render() {
    return (
      <OutlinksContainer name="outlinks">
        <h2>See me around the web</h2>
        {/* <div> */}

        <OutlinkQuadrant key={1}>
          <a rel="noopener" target="_blank" href="https://github.com/finppp">
          <h3>GitHub.
              <i className="hidden-xl far fa-arrow-alt-circle-right"></i>
          </h3>
        </a>
          <p>See some of my projects.</p>
          <a rel="noopener" target="_blank" href="https://github.com/finppp" className="underline hidden-sm">Lets go <i className="far fa-arrow-alt-circle-right"></i></a>
        </OutlinkQuadrant>

        <OutlinkQuadrant key={2}>

          <a rel="noopener" target="_blank" href="https://stackoverflow.com/users/2153716/finlay-percy">
            <h3>Stackoverflow.
              <i className="hidden-xl far fa-arrow-alt-circle-right"></i>
            </h3>
          </a>
          <p>Top 6% this year.</p>
          <a rel="noopener" target="_blank" href="https://stackoverflow.com/users/2153716/finlay-percy" className="underline hidden-sm">Lets go <i className="hidden-sm far fa-arrow-alt-circle-right"></i></a>
        </OutlinkQuadrant>
      {/* </div> */}

        {/* <div> */}
        <OutlinkQuadrant key={3}>
          <a rel="noopener" target="_blank" href="https://github.com/finppp/My-Portfolio">
            <h3>This GitHub repo.
              <i className="hidden-xl far fa-arrow-alt-circle-right"></i>
            </h3>
          </a>
          <p>Have a look at my ReactJS code.</p>
          <a rel="noopener" target="_blank" href="https://github.com/finppp/My-Portfolio" className="underline hidden-sm">Lets go <i className="hidden-sm far fa-arrow-alt-circle-right"></i></a>
        </OutlinkQuadrant>

        <OutlinkQuadrant key={4}>
          <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/finlay-percy-8108207b/">
            <h3>LinkedIn.
              <i className="hidden-xl far fa-arrow-alt-circle-right"></i>
            </h3>
          </a>
          <p>Read about my education and experience.</p>
          <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/finlay-percy-8108207b/" className="underline hidden-sm">Lets go <i className="hidden-sm far fa-arrow-alt-circle-right"></i></a>
        </OutlinkQuadrant>
      {/* </div> */}
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

  h2{
    font-size: 1.2em;
  }
`
const OutlinkQuadrant = styled.div`

  h3 {
    font-size: 1em;
    margin-bottom: 0;
    color: black;
  }

  i{
    color: black;
  }

  p{
    margin-top: 0;
    font-size: 0.9em;
  }

  .underline{
    text-decoration: underline;
  }

  ${min.xl`
    .hidden-xl{
      display:none;
    }
    display: inline-block;
    width: 50%;
    height: 40%;
  `}

  ${max.xl`
    .hidden-sm{
      display:none;
    }
  `}
  height: 18%;
`

export default Outlinks;
