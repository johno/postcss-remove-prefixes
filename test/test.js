'use strict'

var fs = require('fs')
var assert = require('assert')
var postcss = require('postcss')
var postcssRemovePrefixes = require('..')

describe('postcss-remove-prefixes', function () {

  it('should remove vendor prefixes', function () {
    test('input.css', 'output.css')
  })
})

function fixture (name) {
  return fs.readFileSync('test/fixtures/' + name, 'utf8')
}

function test (input, output) {
  assert.deepEqual(
    postcss([ postcssRemovePrefixes({ ignore: [ "font-smoothing", /^-moz-transform$/i ] }) ])
      .process(fixture(input)).css,
    fixture(output)
  )
}
