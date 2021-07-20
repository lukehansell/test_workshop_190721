const { expect } = require('chai')
const launchControl = require('../src/launchControl')

describe('launchControl', () => {
  context('when shouldLaunch is false', () => {
    beforeEach(() => {
      launchControl(false)
    })

    it('should not launch')
  })

  context('when shouldLaunch is true', () => {
    beforeEach(() => {
      launchControl(true)
    })

    it('should launch')
  })
})

































/*
setup:

const { expect } = require('chai')
const launchControl = require('../src/launchControl')

describe('launchControl', () => {
  context('when shouldLaunch is false', () => {
    beforeEach(() => {
      launchControl(false)
    })

    it('should not launch')
  })

  context('when shouldLaunch is true', () => {
    beforeEach(() => {
      launchControl(true)
    })

    it('should launch')
  })
})

spy:

const { expect } = require('chai')
const nukesLib = require('../src/lib/nukes')
const launchControl = require('../src/launchControl')
const sinon = require('sinon')

describe('launchControl', () => {
  afterEach(() => {
    sinon.restore()
  })

  beforeEach(() => {
    sinon.spy(nukesLib, 'launch')
  })

  context('when shouldLaunch is false', () => {
    beforeEach(() => {
      launchControl(false)
    })

    it('should not launch', () => {
      expect(nukesLib.launch.called).to.equal(false)
    })
  })

  context('when shouldLaunch is true', () => {
    beforeEach(() => {
      launchControl(true)
    })

    it('should launch', () => {
      expect(nukesLib.launch.called).to.equal(true)
    })
  })
})

stub:

change `spy` to `stub`

example of changing behaviour:

context('when launching errors', () => {
  beforeEach(() => {
    nukesLib.launch.throws(new Error('Error launching nukes'))
  })

  it('does something', () => {
    expect(() => launchControl(true)).to.throw()
  })
})

*/