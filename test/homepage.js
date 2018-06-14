var assert = require('assert');
describe('webdriver.io api page', function() {
    it('should have the right title', function () {
        browser.url('/');

        // get all results that are displayed
        var results = browser.getTitle();
   //     console.log('the title of the page is' + results);
        // assert number of results
        assert.equal(results, 'WebdriverIO - WebDriver bindings for Node.js');

    });
});

