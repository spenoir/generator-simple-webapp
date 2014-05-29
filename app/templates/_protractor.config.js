exports.config = {
    seleniumAddress: 'http://hub.browserstack.com/wd/hub',
    specs: [
        'public/js/tests/e2e/*.js'
    ],

    multiCapabilities: [
        {
            'browserName': 'chrome',
            'version': '22.0',
            'browserstack.user': 'adamspence2',
            'browserstack.key': 'NTyc9awbmPigHTdbWNSn'
        }
        ,
        {
            'browserName': 'firefox',
            'version': '21.0',
            'browserstack.user': 'adamspence2',
            'browserstack.key': 'NTyc9awbmPigHTdbWNSn'
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