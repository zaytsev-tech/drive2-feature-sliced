module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "next",
    "prettier",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: "./",
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
      },
      rules: {
        "@typescript-eslint/prefer-nullish-coalescing": "warn",
      },
      excludedFiles: [".js"],
    },
  ],
  plugins: [
    "@typescript-eslint",
    "jsx-a11y",
    "simple-import-sort",
    "unused-imports",
  ],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    "@typescript-eslint/no-unused-vars": ["warn"],
    "prefer-const": 1,
    curly: "error",
    "react/jsx-props-no-spreading": ["off"],
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "@typescript-eslint/no-var-requires": "warn",
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
    "max-len": [
      "warn",
      {
        code: 120,
        tabWidth: 2,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        name: "next/link",
        importNames: ["default"],
        message: "Please use LinkTo component from src/UI/ instead.",
      },
    ],
    "unused-imports/no-unused-imports": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "jsx-a11y/no-autofocus": [
      "warn",
      {
        ignoreNonDOM: true,
      },
    ],
    "jsx-a11y/anchor-is-valid": ["warn"],
  },
};
