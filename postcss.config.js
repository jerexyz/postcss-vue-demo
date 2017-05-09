'use strict'
/* eslint-env node */
var autoprefixer = require('autoprefixer')
var cssnano = require('cssnano')
var postcssImport = require('postcss-import')
module.exports = () => ({
  plugins: [
    postcssImport,
    autoprefixer,
    cssnano({ safe: true })
  ]
})
