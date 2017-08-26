var config = require('../../nightwatch.conf.js');

module.exports = {
  'Ruten Assert Title': function(browser) {
    browser.url('http://www.ruten.com.tw')
           .waitForElementVisible('body')
           .assert.title('露天拍賣-台灣 NO.1 拍賣網站')
	   .saveScreenshot('ruten.png')
           .end();
  }
};
