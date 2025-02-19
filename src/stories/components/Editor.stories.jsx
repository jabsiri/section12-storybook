import Editor from "../../components/Editor";
import {MemoryRouter} from "react-router-dom"; // Router 처리 추가
import {useArgs} from "storybook/internal/preview-api";
import {action} from "@storybook/addon-actions";

const defaultExport = {
  title: "diary/Editor",
  component: Editor,
  tags: ["autodocs"], // 최신 Storybook 자동 문서화 지원
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    )
  ], // Router 적용
  args: {
    placeholder: "...",
    initData: {
      id: 2,
      createdDate: new Date("2020-01-01"),
      emotionId: 3,
      content: ""
    }
    //onSubmit: action("submitted")
  },

  argTypes: {
    placeholder: {control: "text"},
    initData: {control: "object"}
    //onSubmit: {action: "submitted"}
    //onClick: {action: "clicked"}
  }
};
export default defaultExport;
/*
export const Default = {
  args: {
    value: "",
    placeholder: "내용을 입력하세요...",
    disabled: false,
    onChange: (e) => console.log("입력값 변경:", e.target.value)
  }
};
*/
export const Emotion1 = (args) => {
  //console.log("dddddd", args);
  const [{initData}, setArgs] = useArgs();

  const handleChange = (newInput) => {
    setArgs({initData: newInput});
    action("submitted")(newInput);
  };

  return (
    <Editor
      placeholder={args.placeholder}
      initData={initData}
      onSubmit={handleChange}
    />
  );
};
Emotion1.args = {
  initData: {
    ...defaultExport.args.initData,
    id: 1,
    //createdDate: "2020-01-02",
    emotionId: 1,
    content: ""
  }
};

export const Emotion2 = {
  args: {
    placeholder: "emotion2",
    initData: {
      ...defaultExport.args.initData,
      emotionId: 2
    },
    onSubmit: action("submitted")
  }
};
