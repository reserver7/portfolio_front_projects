import { vars } from "@portfolio/themes";
import { clsx } from "clsx";
import * as React from "react";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinkleProps } from "../utils/properties";
import { textStyle } from "./style.css";
import { HeadingProps } from "./types";

const Heading = (props: HeadingProps, ref: React.Ref<HTMLElement>) => {
  const { as = "h1", fontSize, background, color = "gray", children } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        textStyle({
          fontSize,
        }),
        props.className,
      ]),
      style: {
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

const _Heading = React.forwardRef(Heading);
export { _Heading as Heading };
