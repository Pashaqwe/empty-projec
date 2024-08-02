module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", ".vite.config.ts"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["react-refresh", "simple-import-sort", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/prefer-default-export": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    // Отключение prop-types т.к мы используем typescript
    "react/prop-types": "off",
    "react/require-default-props": "off", // https://ihelp.rt.ru/browse/RC-2054?focusedCommentId=7393709&page=com.atlassian.jira.plugin.system.issuetabpanels%3Acomment-tabpanel#comment-7393709
    "no-param-reassign": [
      "error",
      {
        ignorePropertyModificationsFor: ["accumulator", "result"], // https://git.ossdep.rt.ru/esuz_b2b/re-contract/-/merge_requests/2219#note_148133
      },
    ],
    "react/jsx-uses-react": "off", // https://ru.legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    "react/react-in-jsx-scope": "off",
  },
};
