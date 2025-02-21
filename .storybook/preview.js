/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;

/*
매치(matchers)는 Storybook의 Controls 애드온이 컴포넌트의 prop 이름을 분석해서, 어떤 컨트롤(예: 색상 선택기, 날짜 선택기 등)을 자동으로 사용할지 결정하는 규칙입니다.

여기서 사용된 매처는 두 가지입니다:
	•	color: /(background|color)$/i
이 정규표현식은 prop 이름이 “background” 또는 “color”로 끝나는 경우를 찾아냅니다. 해당 prop은 자동으로 색상 선택 컨트롤이 적용되어, 사용자가 색상을 손쉽게 변경할 수 있도록 도와줍니다.
	•	date: /Date$/
이 정규표현식은 prop 이름이 “Date”로 끝나는 경우를 감지합니다. 이러한 prop에는 날짜 선택 컨트롤이 할당되어, 날짜 값을 편리하게 설정할 수 있게 됩니다.

즉, 이 매처 설정 덕분에 스토리 작성 시 prop의 이름만 적절하게 지정하면, 별도의 추가 설정 없이 자동으로 올바른 컨트롤이 렌더링되어 인터랙티브하게 조작할 수 있게 됩니다.
*/
/*
export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
*/
