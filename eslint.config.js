import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginQuery from "@tanstack/eslint-plugin-query";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },

  // Configurações recomendadas do ESLint, TypeScript, React Query e Jest
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...pluginQuery.configs["flat/recommended"],

  // Regras personalizadas
  {
    rules: {
      "no-unused-vars": "off",
      "no-undef": "error",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },

  // Ignorar arquivos/diretórios específicos
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "coverage/**",
      "*.config.js",
      "*.config.ts",
      "*.d.ts",
      "src/monitoring/**",
      "src/**/*.spec.tsx",
    ],
  },
];
