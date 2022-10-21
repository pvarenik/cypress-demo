const deepmerge = require('deepmerge')
const path = require('path')
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  console.log(config)

  const configJson = require(config.configFile)
  if (configJson.extends) {
    const baseConfigFilename = path.join(config.projectRoot, configJson.extends)
    const baseConfig = require(baseConfigFilename)
    console.log('merging %s with %s', baseConfigFilename, config.configFile)
    return deepmerge(baseConfig, configJson)
  }

  return config
}