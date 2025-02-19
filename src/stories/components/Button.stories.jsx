import Button from "../../components/Button";
import {fn} from "@storybook/test";
import {action} from "@storybook/addon-actions";

//story를 포함한 전반적인 내용을 설정, 각 story에서 내용을 수정 할수 있음.
export default {
  title: "diary/Button",
  component: Button,
  tags: ["autodocs"], // 최신 Storybook 자동 문서화 지원
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Button component", //기본적으로 컴포넌트의 JSDoc 를 가져오지만 여기서 override 함
        story: "Button component1" //스토리의 주석, 각 스토리에서 override 할수 있음
      }
    }
  },
  /* Component의 Props 값을 설정하는 역활 */
  args: {
    text: "Click Me",
    type: "POSITIVE",
    onClick: action("clicked")
  },
  /* 특정 Props를 Storybook에서 제어하는 방식 정의 */
  argTypes: {
    text: {control: "text", description: "Button text", defaultValue: "Click Me"},
    type: {
      control: {type: "radio"}, //radio
      options: ["DEFAULT", "POSITIVE", "NEGATIVE"] // Button.css에 정의된 스타일
    }
    //onClick: {action: "clicked"}
  }
};

const handleChange = () => {
  //action("d")("a");
  //action("clicked")("a");
  fn();
};
export const Default = {
  parameters: {
    docs: {
      description: {
        story: "Default Button component"
      }
    }
  },
  args: {
    text: "Click Me!!!"
  }
};

export const Positive = {};
Positive.args = {type: "POSITIVE", onClick: fn()};

export const Negative = {};
Negative.args = {
  type: "NEGATIVE",
  onClick: handleChange()
};
