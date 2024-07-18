import { Box as _Box } from "@portfolio/react-components-layout";
import "@portfolio/react-components-layout/style.css";

export default {
  title: "React Components/Layout/Box",
  component: _Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const BoxStory = {
  args: {
    as: "button",
    padding: "5",
    background: "pink",
    boxShadow: "xl",
    borderRadius: "md",
  },
};
