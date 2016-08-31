/**
 * Test case for dotpic.
 * Runs with mocha.
 */
'use strict'

const dotpic = require('../lib/dotpic.js')
const assert = require('assert')
const co = require('co')
const fs = require('fs')
const writeout = require('writeout')

describe('dotpic', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Dotpic', () => co(function * () {
    let tmpDir = `${__dirname}/../tmp`
    let src = `
000011110000
000001100000
000001100000
000001100000
100001100001
111111111111
111111111111
100001100001
000001100000
000001100000
000001100000
000001100000
000001100000
000001100000
000001100000
000001100000
000011110000
`
    yield writeout(
      `${tmpDir}/testing-dotpic-01.svg`,
      dotpic(src, {
        colors: {
          '0': '#444',
          '1': '#FFF'
        },
        background: 'red'
      }),
      {
        mkdirp: true
      }
    )
    assert.ok(fs.statSync(`${tmpDir}/testing-dotpic-01.svg`))
  }))
})

/* global describe, before, after, it */
