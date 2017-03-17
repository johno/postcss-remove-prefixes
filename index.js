'use strict'

var postcss = require('postcss')
var isVendorPrefixed = require('is-vendor-prefixed')

module.exports = postcss.plugin('postcss-remove-prefixes', function (options) {
  if (!options) {
    options = {};
  }

  var ignore = options.ignore ? Array.isArray(options.ignore) ? options.ignore : false : [];

  if (ignore === false) {
    throw TypeError("options.ignore must be an array")
  }

  for (var i = 0; i < ignore.length; ++i) {
    var value = ignore[i];

    if (typeof value === "string") {
      value = new RegExp(value + "$", "i")
    } else if (value instanceof RegExp) {

    } else {
      throw TypeError("options.ignore values can either be a string or a regular expression")
    }

    ignore[i] = value;
  }

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
