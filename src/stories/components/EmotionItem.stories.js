import EmotionItem from "../../components/EmotionItem";
import {action} from "@storybook/addon-actions";

export default {
  title: "diary/EmotionItem",
  component: EmotionItem,
  tags: ["autodocs"], // 최신 Storybook 자동 문서화 지원

  args: {
    emotionId: 1,
    emotionName: "완전좋음",
    isSelected: false,
    onClick: action("clicked")
  },

  argsTypes: {
    emotionId: {control: "number"},
    emotionName: {control: "text"},
    isSelected: {control: "boolean"},
    onClick: {action: "clicked"}
  }
};

//story 객체
export const EmotionId1 = {
  args: {
    emotionId: 1,
    emotionName: "완전좋음",
    isSelected: false,
    onClick: () => {
      action("clicked")("1");
    }
  }
};

export const EmotionId2 = {
  args: {
    emotionId: 2,
    emotionName: "좋음",
    isSelected: false,
    onClick: () => {}
  }
};

export const EmotionId3 = {
  args: {
    emotionId: 3,
    emotionName: "그럭저럭",
    isSelected: false,
    onClick: () => {}
  }
};

export const EmotionId4 = {
  args: {
    emotionId: 4,
    emotionName: "나쁨",
    isSelected: false,
    onClick: () => {}
  }
};

export const EmotionId5 = {
  args: {
    emotionId: 5,
    emotionName: "끔찍함",
    isSelected: false,
    onClick: () => {}
  }
};
