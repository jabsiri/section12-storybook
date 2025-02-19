import Badge from "../../daisyui/Badge";

export default {
  title: "daisyui/Badge",
  component: Badge,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {control: "color"}
  },
  args: {
    type: "",
    name: "뱃지"
  }
};

export const Default = {};

export const Neutral = {
  args: {
    type: "neutral"
  }
};

export const Primary = {
  args: {
    type: "primary"
  }
};

export const Secondary = {
  args: {
    type: "secondary"
  }
};
