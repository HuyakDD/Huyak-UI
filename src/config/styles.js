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

export const dimensions = {
  boxShadow: boxShadowDimensions,
  topBarHeight: "50px",
  spriteOffset0: "-99px",
  spriteOffset1: "-212px",
  spriteOffset2: "-325px",
  spriteOffset3: "-438px",
  spriteOffset4: "-551px",
  spriteOffset5: "-664px",
  spriteOffset6: "-777px",
  spriteOffset7: "-890px"
};

export const fonts = {
  main: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif`,
  code: `source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace`
};


export default palette;
