import { Text as _Text } from "@portfolio/react-components-layout";
import "@portfolio/react-components-layout/style.css";
import { classes, vars } from "@portfolio/themes";

export default {
  title: "React Components/Layout/Typography/Text",
  component: _Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      options: ["p", "span", "div", "b", "i", "u", "strong", "em"],
      control: "select",
    },
    fontSize: {
      options: Object.keys(classes.typography.text),
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
};

export const Text = {
  args: {
    as: "p",
    children: "Hello World",
    fontSize: "xl",
    color: "gray",
    background: "blue",
  },
};
