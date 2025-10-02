const { defineConfig, globalIgnores } = require("eslint/config");
const js = require("@eslint/js");
const globals = require("globals");

module.exports = defineConfig([
  globalIgnores(["node_modules/**", ".next/**"]),
  {
    files: ["**/*.js"],
    plugins: {
      js,
    },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.jest,
        ...globals.browser,
        ...globals.node,
      },
    },
  },
]);
