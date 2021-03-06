const { resetDatabase } = require('./resetDatabase.js')
const { resetTasks } = require('./resetTasks.js')


/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on('task', {
    'resetDb': resetDatabase,
    'resetTs' : resetTasks
    })

  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.name === 'chrome'){
      launchOptions.args.push('--auto-open-devtools-for-tabs')
      launchOptions.args.push('--window-size=1400,1200')
      return launchOptions
    }
  })

}


