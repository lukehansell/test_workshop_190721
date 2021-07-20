const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello world')
    })
  })
}

module.exports = getData