import React from "react";
import Button from "../../components/Button"; // Button 컴포넌트 불러오기

export default {
  title: "Components/Button", // Storybook에서 표시될 경로
  component: Button, // 사용할 컴포넌트 지정
  tags: ["autodocs"], // 자동 문서화 활성화
  argTypes: {
    backgroundColor: {control: "color"}, // 배경색 변경 가능
    size: {
      control: {type: "select"},
      options: ["small", "medium", "large"]
    },
    label: {control: "text"}, // 버튼 라벨 변경 가능
    onClick: {action: "clicked"} // 클릭 이벤트 로그 확인 가능
  }
};

// 🔹 Primary 버튼
export const Primary = {
  args: {
    primary: true,
    label: "Primary Button"
  }
};

/*
// 🔹 Secondary 버튼
export const Secondary = {
  args: {
    primary: false,
    label: "Secondary Button"
  }
};

// 🔹 Large 버튼
export const Large = {
  args: {
    size: "large",
    label: "Large Button"
  }
};

// 🔹 Small 버튼
export const Small = {
  args: {
    size: "small",
    label: "Small Button"
  }
};

*/
