'use strict';

const rule = require('../../rules/no-http-url');
const { RuleTester } = require('eslint');

const ruleTester = new RuleTester();

ruleTester.run('no-http-url', rule, {
  valid: [
    {
      code: "var test = 'https://www.baidu.com';",
    },
  ],

  invalid: [
    {
      code: "var test = 'http://www.baidu.com';",
      output: "var test = 'http://www.baidu.com';",
      errors: [
        {
          message: 'Recommended "http://www.baidu.com" switch to HTTPS',
        },
      ],
    },
    {
      code: "<img src='http://www.baidu.com' />",
      output: "<img src='http://www.baidu.com' />",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      errors: [
        {
          message: 'Recommended "http://www.baidu.com" switch to HTTPS',
        },
      ],
    },
  ],
});
