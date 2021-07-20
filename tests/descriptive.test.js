const { expect } = require('chai')
const isEven = require('../src/isEven')

describe('isEven', () => {
  let result

  context('when input is even', () => {
    beforeEach(() => {
      result = isEven(2)
    })

    it('returns true', () => {
      expect(result).to.equal(true)
    })
  })

  context('when input is odd', () => {
    beforeEach(() => {
      result = isEven(1)
    })

    it('returns false', () => {
      expect(result).to.equal(false)
    })
  })
})

