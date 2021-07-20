const { expect } = require('chai')
const launch = require('../../src/lib/nukes')

it('should not launch nukes', () => {
  expect(launch()).not.to.equal(true)
})