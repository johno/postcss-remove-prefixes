#!/usr/bin/env node

var fs = require('fs')
var meow = require('meow')
var postcss = require('postcss')
var isBlank = require('is-blank')
var removePrefixes = require('./')

var cli = meow({
  help: [
    'Usage',
    '  remove-prefixes <input.css> [<output.css>]'
  ]
})

var input = cli.input[0]
var output = cli.input[1] || input

if (isBlank(input)) {
  console.log(cli.help)
} else {
  var inputCss = fs.readFileSync(input, 'utf8')
  fs.writeFileSync(output, postcss([ removePrefixes() ]).process(inputCss).css)
}
