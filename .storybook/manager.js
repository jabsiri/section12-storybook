// .storybook/manager.js
import {addons} from "@storybook/manager-api";
import bdTheme from "./bdTheme";

addons.setConfig({
  theme: bdTheme
});
