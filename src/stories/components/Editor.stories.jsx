import Editor from "../../components/Editor";
import {MemoryRouter} from "react-router-dom"; // Router 처리 추가
import {useArgs} from "storybook/internal/preview-api";
import {action} from "@storybook/addon-actions";

const defaultExport = {
  title: "components/Editor",
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
    },
    onSubmit: action("submitted")
  },

  argTypes: {
    placeholder: {control: "text"},
    initData: {control: "object"},
    onSubmit: {action: "submitted"}
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
export const Interactive = (args) => {
  const [{initData}, setArgs] = useArgs();

  const handleChange = (newInput) => {
    //action("submitted")(newInput);
    action("submitted")();
    console.log("저장 버튼 클릭됨");
    console.log(newInput);
  };

  return (
    <Editor
      {...args}
      initData={initData}
      onSubmit={handleChange}
    />
  );
};
Interactive.args = {
  initData: {
    ...defaultExport.args.initData,
    id: 1,
    //createdDate: "2020-01-02",
    emotionId: 1,
    content: ""
  }
};

export const WithText = {
  args: {
    value: "",
    placeholder: "내용을 입력하세요...",
    disabled: false,
    onChange: (e) => console.log("입력값 변경:", e.target.value)
  }
};

export const Disabled = {
  args: {
    value: "비활성화된 입력 상태",
    placeholder: "내용을 입력하세요...",
    disabled: true
  }
};

export const WithSaveAndCancel = {
  args: {
    value: "저장 및 취소 버튼 포함",
    placeholder: "내용을 입력하세요...",
    disabled: false,
    onChange: (e) => console.log("입력값 변경:", e.target.value),
    onSave: () => console.log("저장 버튼 클릭됨"),
    onCancel: () => console.log("취소 버튼 클릭됨")
  }
};
