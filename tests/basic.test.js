const { expect } = require('chai')
const isEven = require('../src/isEven')

it('is true when input is even', () => {
  expect(isEven(2)).to.equal(true)
})

it('is false when input is odd', () => {
  expect(isEven(1)).to.equal(false)
})
