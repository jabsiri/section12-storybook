import {color} from "storybook/internal/theming";
import Button from "../../daisyui/Button";
import {fn} from "@storybook/test";

export default {
  title: "daisyui/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {control: "color"}
  },
  args: {
    //onClick: fn(),
    children: "Button",
    color: "gray"
  }
};

export const Primary = {
  args: {
    color: "red",
    primary: true,
    label: "Button"
  }
};

export const Secondary = {
  args: {
    label: "Button"
  }
};

export const Large = {
  args: {
    size: "large",
    label: "Button"
  }
};

export const Small = {
  args: {
    size: "small",
    label: "Button"
  }
};
