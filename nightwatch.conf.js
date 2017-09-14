const SCREENSHOT_PATH = './screenshots/';

module.exports = {
  src_folders: [
    'test/e2e'// Where you are storing your Nightwatch e2e tests
  ],
  output_folder: './reports', // reports (test outcome) output by nightwatch
  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        path: SCREENSHOT_PATH
      },
      globals: {
        waitForConditionTimeout: 5000
      },
      desiredCapabilities: { // use Chrome as the default browser for tests
        browserName: 'chrome',
        javascriptEnabled: true
      }
    }
  }
}