const { expect } = require('chai')
const getData = require('../src/getData')

// WON'T WORK!!!
describe('getData', () => {
  let result

  beforeEach(async () => {
    result = await getData()
  })

  it('returns hello world', () => {
    expect(result).to.equal('hello world')
  })
})


























/*
# BROKEN VERSION

describe('getData', () => {
  let result

  beforeEach(() => {
    result = getData()
  })

  it('returns hello world', () => {
    expect(result).to.equal('hello world')
  })
})

# FIXES

###############
## use async ##
###############

describe('getData', () => {
  let result

  beforeEach(async () => {
    result = await getData()
  })

  it('returns hello world', () => {
    expect(result).to.equal('hello world')
  })
})

##############
## use done ##
##############

describe('getData', () => {
  let result

  beforeEach((done) => {
    getData()
    .then((res) => {
      result = res
      done()
    })
  })

  it('returns hello world', () => {
    expect(result).to.equal('hello world')
  })
})

########################
## return the promise ##
########################

describe('getData', () => {
  let result

  beforeEach(() => {
    return getData()
    .then((res) => {
      result = res
    })
  })

  it('returns hello world', () => {
    expect(result).to.equal('hello world')
  })
})

*/
