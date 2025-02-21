import {create} from "@storybook/theming/create";

export default create({
  base: "light",
  // Typography
  //fontBase: '"Open Sans", sans-serif',
  //fontCode: 'monospace',

  //brandTitle: "My custom Storybook",
  //brandUrl: "https://example.com",
  //brandImage: "https://storybook.js.org/images/placeholders/350x150.png",
  brandTarget: "_self",

  //
  //colorPrimary: "#3A10E5", //모르겠음
  //colorSecondary: "#585C6D", //선택된 component 색과 1depth icon 색

  // UI
  appBg: "#ffffff", //left 메뉴 배경색
  appContentBg: "#ffffff", //controls, action, addons..등의 배경색
  appPreviewBg: "#ffffff", //component preview 배경색
  //appBorderColor: "#585C6D",
  appBorderRadius: 4,

  // Text colors
  //textColor: "#10162F",
  //textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#9E9E9E",
  barSelectedColor: "#585C6D",
  barHoverColor: "#585C6D",
  barBg: "#f2f3f7" //"#ffffff"

  // Form colors
  //inputBg: "#ffffff",
  //inputBorder: "#10162F",
  //inputTextColor: "#10162F",
  //inputBorderRadius: 2
});
