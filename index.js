'use strict'

var postcss = require('postcss')
var isVendorPrefixed = require('is-vendor-prefixed')

module.exports = postcss.plugin('postcss-remove-prefixes', function () {
  return function removePrefixes (root, result) {
    root.walkDecls(function (declaration) {
      if (isVendorPrefixed(declaration.prop) || isVendorPrefixed(declaration.value)) {
        declaration.remove()
      }
    })
  }
})
