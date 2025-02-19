import Editor from "../../components/Editor";
import {MemoryRouter} from "react-router-dom"; // Router 처리 추가
import {useArgs} from "storybook/internal/preview-api";

export default {
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
  argTypes: {
    value: {control: "text"},
    placeholder: {control: "text"},
    disabled: {control: "boolean"},
    onChange: {action: "changed"}, // onChange 이벤트 핸들러 추가
    onSave: {action: "saved"}, // 추가적인 이벤트 핸들러 (예시)
    onCancel: {action: "canceled"} // 추가적인 이벤트 핸들러 (예시)
  }
};

export const Default = {
  args: {
    value: "",
    placeholder: "내용을 입력하세요...",
    disabled: false,
    onChange: (e) => console.log("입력값 변경:", e.target.value)
  }
};

// ✅ `useArgs()`를 활용한 인터랙티브 스토리
export const Interactive = () => {
  const [{value, placeholder, disabled}, setArgs] = useArgs(); // ✅ useArgs 사용
  const handleChange = (e) => {
    setArgs({value: e.target.value}); // ✅ 상태 업데이트
  };
  return (
    <Editor
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={handleChange} // ✅ 입력 시 `value` 변경
      onSave={() => console.log("저장 버튼 클릭됨")}
      onCancel={() => console.log("취소 버튼 클릭됨")}
    />
  );
};

export const WithText = {
  args: {
    value: "기본 입력값이 있는 상태",
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
