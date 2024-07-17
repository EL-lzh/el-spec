const rule = require('../../rules/no-http-url')
const { RuleTester } = require('eslint')

const ruleTester = new RuleTester()

ruleTester.run('no-http-url', rule, {
  valid: [
    {
      code: `var url = 'https://www.google.com'`
    }
  ],
  invalid: [
    {
      code: `var url = 'http://www.google.com'`,
      output: `var url = 'http://www.google.com'`,
      errors: [{
        message: 'Recommended "http://www.google.com" switch to HTTPS',
        type: 'Literal'
      }]
    }
  ]
});