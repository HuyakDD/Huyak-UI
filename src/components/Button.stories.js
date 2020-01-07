import React from "react";

import { action } from "@storybook/addon-actions";
import Button from "./Button";

export const text = () => <Button text="I FEEL PRETTY" />;

export const emoji = () => <Button text="😀 😎 👍 💯" />;

export default {
  component: Button,
  title: "Button",
  text: "Button",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const Default = () => {
  return <Button onClick={action("clicked")} text="Button" />;
};
