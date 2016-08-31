/**
 * Generate svg from string dot data
 * @function dotpic
 * @param {string} src image data
 * @param {Object} [options={}] - Optional settings
 * @param {Object} [options.colors] - Color data
 * @param {number} [options.width] - Image width
 * @param {number} [options.height] - Image height
 * @param {string} [options.background] - Background color
 * @returns {string} - SVG string
 */
'use strict'

const defaultColors = require('./colors')
const uuid = require('uuid')
const { EOL } = require('os')

/** @lends dotpic */
function dotpic (src, options = {}) {
  let {
    colors = defaultColors,
    id = uuid.v4(),
    width = 256,
    height = 256,
    background = 'transparent',
    dotSize = 4
  } = options

  if (typeof src === 'string') {
    src = src.split(EOL).map((line) => line.split(''))
  }

  let rows = src.length
  let cols = Math.max(...src.map((line) => line.length))

  let renderLine = (line, row) => line.map((dot, col) =>
    `<rect width="${dotSize}" height="${dotSize}" x="${col * dotSize}" y="${row * dotSize}" stroke="none" fill="${colors[ dot ] || '#000'}" />`
  ).join(EOL)
  return (`
<svg xmlns="http://www.w3.org/2000/svg"
     id="${id}"
     width="${width}" 
     height="${height}" 
     viewBox="0 0 ${cols * dotSize} ${rows * dotSize}">
<rect width="${cols * dotSize}" height="${rows * dotSize}" x="0" y="0" fill="${background}"/>
${src.map(renderLine).join('')}
</svg>
`)
}


module.exports = dotpic
