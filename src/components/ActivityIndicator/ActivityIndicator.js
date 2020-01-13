import React from "react";
import uuid from "uuid";

import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

import PropTypes from 'prop-types';
import pallette from "config/styles";

const ActivityIndicator = props => {
  const nOfSticks = props.numOfSticks > 0 ? props.numOfSticks > 7 ? 7 : props.numOfSticks : 4;
  return (
    <div data-testid="activity">
      {Array.from({ length: nOfSticks }, () => {
        return <SingleStick color={props.color} size={props.size} key={uuid()} data-testid="stick" />
      })}
    </div>
  );
};

const loadingTransformation = keyframes`
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1, 2.2);
  }
  40% {
    transform: scale(1);
  }
`;

const stickHeight = {
  "large": "8vh",
  "small": "2vh",
  "md": "4vh"
};

const stickWidth = {
  "large": "3vw",
  "small": "1vw",
  "md": "2vw"
};

const SingleStick = styled.div`
    display: inline-block;
    width: ${props => stickWidth[props.size]};
    height: ${props => stickHeight[props.size]};
    border-radius: 4px;
    background: ${props => props.color};
    margin: 0 5px;
    animation: ${loadingTransformation} 1s ease-in-out infinite;
    
    &:nth-of-type(1) {
        animation-delay: 0;
    }
    &:nth-of-type(2) {
        animation-delay: 0.09s;
    }
    &:nth-of-type(3) {
        animation-delay: 0.18s;
    }
    &:nth-of-type(4) {
        animation-delay: 0.27s;
    }
    &:nth-of-type(5) {
        animation-delay: 0.36s;
    }
    &:nth-of-type(6) {
        animation-delay: 0.45s;
    }
    &:nth-of-type(7) {
        animation-delay: 0.54s;
    }
`
ActivityIndicator.propTypes = {
  /** Number of sticks to animate, maxed out at 7 */
  numOfSticks: PropTypes.number,
  /** Stick size: 'large', 'md', 'small'. */
  size: PropTypes.string,
  /** Stick color: Any valid CSS color. */
  color: PropTypes.string
};

ActivityIndicator.defaultProps = {
  numOfSticks: 4,
  size: "md",
  color: pallette.primary
};

export default ActivityIndicator;
