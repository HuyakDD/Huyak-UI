import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Flex = props => {
  return (
    <Wrapper
      fd={props.fd}
      jc={props.jc}
      ai={props.ai}
      margin={props.margin}
      padding={props.padding}
      bgColor={props.bgColor}
    >
      {props.children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.fd};
  justify-content: ${props => props.jc};
  align-items: ${props => props.ai};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  background: ${props => props.bgColor};
  height: 100%;
  box-sizing: border-box;
`

Flex.propTypes = {
  /** CSS flex-direction: column|row */
  fd: PropTypes.string,
  /** CSS justify-content: flex-start|center|space-around|space-between|flex-end */
  jc: PropTypes.string,
  /** CSS align-items: flex-start|stretch|flex-end|center|baseline */
  ai: PropTypes.string,
  /** CSS padding */
  padding: PropTypes.string,
  /** CSS margin */
  margin: PropTypes.string,
  /** Background color: Any valid CSS color. */
  bgColor: PropTypes.string
};

Flex.defaultProps = {
  fd: "row",
  jc: "flex-start",
  ai: "stretch",
  padding: "unset",
  margin: "unset",
  bgColor: "white"
};

export default Flex;