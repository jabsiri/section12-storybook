import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./.storybook/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"] // 기본 테마 설정
  }
};
