import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginImport from "eslint-plugin-import";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, "plugin:prettier/recommended"],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "simple-import-sort": eslintPluginSimpleImportSort,
      "import": eslintPluginImport,
    },
    rules: {
      "prettier/prettier": "error",
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      "@typescript-eslint/no-require-imports": "off",
      "import/prefer-default-export": "off",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/order": [
        "error",
        {
          "groups": [
            ["builtin", "external"],
            ["internal"],
            ["parent", "sibling", "index"],
          ],
          "newlines-between": "always",
        },
      ],
    },
  },
);
