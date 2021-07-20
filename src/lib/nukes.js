const launch = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('launch nukes!')
      resolve(true)
    }, 0)
  })
}

module.exports = {
  launch
}
