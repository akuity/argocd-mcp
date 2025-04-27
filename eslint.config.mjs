// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  prettierConfig,
  eslintPluginPrettier,
  {
    ignores: ['node_modules/**', 'dist/**', 'src/types/argocd.d.ts']
  }
);
