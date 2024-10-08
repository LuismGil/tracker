module.exports = {
  root: true,
  parserOptions: {
    parser: require.resolve("@typescript-eslint/parser"),
    extraFileExtensions: [".vue"],
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential",
    "prettier",
    "@vue/typescript/recommended",
  ],
  plugins: ["@typescript-eslint", "vue"],
  globals: {
    ga: "readonly",
    cordova: "readonly",
    __statics: "readonly",
    __QUASAR_SSR__: "readonly",
    __QUASAR_SSR_SERVER__: "readonly",
    __QUASAR_SSR_CLIENT__: "readonly",
    __QUASAR_SSR_PWA__: "readonly",
    process: "readonly",
    Capacitor: "readonly",
    chrome: "readonly",
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "prefer-promise-reject-errors": "off",
    quotes: ["error", "single"],
    semi: ["error", "never"],
    "arrow-body-style": ["error", "as-needed"],
    "func-style": ["error", "expression"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-var-requires": "off",
    "no-unused-vars": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          Function: false,
        },
      },
    ],
  },
};
