# postcss-remove-prefixes [![Build Status](https://secure.travis-ci.org/johnotander/postcss-remove-prefixes.png?branch=master)](https://travis-ci.org/johnotander/postcss-remove-prefixes)

Remove pesky vendor prefixes from your source CSS files. This ensures that your prebuilt CSS is as terse and concise as possible.

Though, please use [`autoprefixer`](https://github.com/postcss/autoprefixer) as part of your build process to ensure proper browser support.

## Installation

```bash
npm install --save postcss-remove-prefixes
```

## Usage

```javascript
var postcss = require('postcss')
var removePrefixes = require('postcss-remove-prefixes')

postcss([ removePrefixes() ]).process(myCss).css
```

#### Input

```css
.flex {
  display: -webkit-flex;
  display: -moz-flex;
  display: flex;
  -webkit-flex: 1;
  flex: 1;
}
```

#### Output

```css
.flex {
  display: flex;
  flex: 1;
}
```

Note: It is recommended that you use this plugin with [`postcss-unprefix`](https://github.com/yisibl/postcss-unprefix) in case you are missing the unprefixed declaration in your source CSS.

### CLI

```sh
npm i -g postcss-remove-prefixes
remove-prefixes -h
remove-prefixes mycss.css
remove-prefixes input.css output.css
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
