import Button from "../components/buttons";
import { darkTheme, lightTheme } from "../styles/themes.css";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    children: "Button",
    className: lightTheme,
  },
};

export const Secondary = {
  args: {
    children: "Button",
    variant: "secondary",
    className: lightTheme,
  },
};
export const Tertiary = {
  args: {
    children: "Button",
    variant: "tertiary",
    className: lightTheme,
  },
};

export const PrimaryDarkMode = {
  args: {
    children: "Button",
    className: darkTheme,
  },
};

export const SecondaryDarkMode = {
  args: {
    children: "Button",
    variant: "secondary",
    className: darkTheme,
  },
};
export const TertiaryDarkMode = {
  args: {
    children: "Button",
    variant: "tertiary",
    className: darkTheme,
  },
};
