import { Heading as _Heading } from "@portfolio/react-components-layout";
import "@portfolio/react-components-layout/style.css";
import { classes, vars } from "@portfolio/themes";

export default {
  title: "React Components/Layout/Typography/Heading",
  component: _Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: "select",
    },
    fontSize: {
      options: Object.keys(classes.typography.heading),
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
  },
};

export const Heading = {
  args: {
    as: "h1",
    children: "Hello World",
    fontSize: "4xl",
    color: "gray",
  },
};
