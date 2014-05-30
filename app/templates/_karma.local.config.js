module.exports = function (config) {
    config.set({
        basePath: '.',

        files: [
            'public/bower/jquery/jquery.js',
            'public/bower/**/*.js',
            'public/js/agentsmutual.js',
            'public/js/**/*.js',
            'public/js/tests/unit/*.js',
            // fixtures
            {
                pattern: 'public/js/tests/fixtures/*.json',
                watched: true, served: true, included: false
            }
        ],

        exclude: [
            'public/bower/bootstrap-sass-official/javascripts/**/*.js',
            'public/js/tests/e2e/**/*.js',
            'public/js/batch-progress.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome', 'bs_firefox_mac', 'bs_iphone5'],

        colors: true,

        reporters : ['progress', 'osx'],

        junitReporter: {
            outputFile: 'junit_output.xml',
            suite: 'unit'
        }

        ,browserStack: {
          username: '###',
          accessKey: '###'
        },

        // define browsers
        customLaunchers: {
          bs_firefox_mac: {
            base: 'BrowserStack',
            browser: 'firefox',
            browser_version: '21.0',
            os: 'OS X',
            os_version: 'Mountain Lion'
          },
          bs_iphone5: {
            base: 'BrowserStack',
            device: 'iPhone 5',
            os: 'ios',
            os_version: '6.0'
          }
        }

        });
};
