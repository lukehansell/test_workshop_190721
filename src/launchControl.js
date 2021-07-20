const nukesLib = require('./lib/nukes')

const launchControl = (shouldLaunch) => {
  if (shouldLaunch) {
    nukesLib.launch()
  }
}

module.exports = launchControl