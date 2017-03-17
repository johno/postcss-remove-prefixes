'use strict'

var postcss = require('postcss')
var isVendorPrefixed = require('is-vendor-prefixed')

module.exports = postcss.plugin('postcss-remove-prefixes', function (options) {
  if (!options) {
    options = {
      ignore: []
    }
  }

  if (!Array.isArray(options.ignore)) {
    throw TypeError("options.ignore must be an array")
  }

  var ignore = options.ignore.map(function (value) {
    if (typeof value === 'string') {
      return new RegExp(value + '$', 'i')
    } else if (value instanceof RegExp) {
      return value
    } else {
      throw TypeError('options.ignore values can either be a string or a regular expression')
    }
  })

  return function removePrefixes(root, result) {
    root.walkDecls(function (declaration) {
      if (isVendorPrefixed(declaration.prop) || isVendorPrefixed(declaration.value)) {
        var isIgnored = false;

        for (var i = 0; i < ignore.length; ++i) {
          var value = ignore[i];

          if (value.test(declaration.prop)) {
            isIgnored = true;
            break;
          }
        }

        if (!isIgnored) {
          declaration.remove()
        }
      }
    })
  }
})
