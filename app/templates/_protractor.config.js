exports.config = {
    seleniumAddress: 'http://hub.browserstack.com/wd/hub',
    specs: [
        'public/js/tests/e2e/*.js'
    ],

    multiCapabilities: [
        {
            'browserName': 'chrome',
            'version': '22.0',
            'browserstack.user': '###',
            'browserstack.key': '###'
        }
        ,
        {
            'browserName': 'firefox',
            'version': '21.0',
            'browserstack.user': '###',
            'browserstack.key': '###'
        }
    ],

    onPrepare: function(){
      require('jasmine-reporters');
      jasmine.getEnv().addReporter(
        new jasmine.JUnitXmlReporter('protractor_junit', true, true));
    },

    jasmineNodeOpts: {
        showColors: true
    }
}