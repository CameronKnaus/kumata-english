import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
  },
];
