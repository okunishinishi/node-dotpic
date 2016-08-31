/**
 * Doc picture generator
 * @module dotpic
 * @version 1.0.0
 */

'use strict'

const dotpic = require('./dotpic')

let lib = dotpic.bind(this)

Object.assign(lib, dotpic, {
  dotpic
})

module.exports = lib