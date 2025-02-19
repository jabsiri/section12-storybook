import EmotionItem from "../../components/EmotionItem";

const defaultExport = {
  title: "components/EmotionItem",
  component: EmotionItem,
  tags: ["autodocs"], // 최신 Storybook 자동 문서화 지원
  /*decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    )
  ], // Router 적용
  */
  args: {
    emotionId: 1,
    emotionName: "완전좋음",
    isSelected: false,
    onClick: () => {}
  },

  argTypes: {
    placeholder: {control: "text"},
    initData: {control: "object"},
    onSubmit: {action: "submitted"}
    //onClick: {action: "clicked"}
  }
};
