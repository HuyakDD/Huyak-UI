import { css } from "@emotion/core";

export const font = css`
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: bold;
  letter-spacing: 4px;
`;

export const shape = css`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
`;

export const primaryColors = css`
  background: #5cdb95;
  color: #05385b;
`;

const bgColor = "#363333";
const secondary = "#272121";
const secondaryText = "#D8DEDE";
const primary = "#2db14b";
const bgText = "#f6e9e9";
const positive = "#008c5a";
const negative = "#ca0303";
const boxShadowColor = "rgba(0, 0, 0, 0.59)";

const boxShadowDimensions = "4px 4px 5px 0px";

const palette = {
  body: bgColor,
  text: bgText,
  primary,
  primaryText: bgText,
  secondary,
  secondaryText: secondaryText,
  inverse: bgText,
  inverseText: bgColor,
  positive,
  negative,
  dark: bgColor,
  boxShadow: boxShadowColor
};

export default palette;
