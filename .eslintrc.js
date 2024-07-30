module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  parser: 'vue-eslint-parser', // 指定如何解析语法，可以为空，但若不为空，只能配该值
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parser0ptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    // quotes: ['error', 'single'],
    // 'no-unused-vars': 'on',
    // noUnusedLocals: 'false',
    // noUnusedParameters: 'false'
  }
}
