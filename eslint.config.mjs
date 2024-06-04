import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,

  {
    rules: {
      "semi": "error",
      "class-methods-use-this": "off"
    }
  }

];
