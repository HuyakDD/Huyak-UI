import React from "react";

import styled from "@emotion/styled";

import PropTypes from 'prop-types';
import { fonts } from "../../config/styles";

const Card = props => {
  return (
    <Wrapper
      width={props.width}
      height={props.height}
      padding={props.padding}
      margin={props.margin}
      shadow={props.shadow}
      bgColor={props.bgColor}
      color={props.color}
    >
      {props.children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${fonts.main};
  box-shadow:${props => props.shadow};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.bgColor};
  color: ${props => props.color};
  box-sizing: border-box;
`
Card.propTypes = {
  /** CSS width */
  width: PropTypes.string,
  /** CSS height */
  height: PropTypes.string,
  /** CSS padding */
  padding: PropTypes.string,
  /** CSS margin */
  margin: PropTypes.string,
  /** CSS box-shadow */
  shadow: PropTypes.string,
  /** Background color: Any valid CSS color. */
  bgColor: PropTypes.string,
  /** Font color: Any valid CSS color. */
  color: PropTypes.string
};

Card.defaultProps = {
  width: "inherit",
  height: "inherit",
  padding: "unset",
  margin: "unset",
  shadow: "4px 4px 5px 0px rgba(0,0,0,0.59)",
  bgColor: "#363333",
  color: "#2db14b"
};

export default Card;
