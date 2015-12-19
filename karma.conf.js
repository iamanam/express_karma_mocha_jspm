'use strict';

module.exports = function (config) {
    config.set({

        basePath: '',
        frameworks: ['browserify', 'mocha-debug', 'mocha', 'chai'],
        files: [
            'test/spec/*.js'
        ],
        preprocessors: {},
        babelPreprocessor: {
            options: {
                presets: ['es2015']
            }
        },
        reporters: ['progress'],

        /*
         coverageReporter: {
         // configure the reporter to use isparta for JavaScript coverage
         // Only on { "karma-coverage": "douglasduteil/karma-coverage#next" }
         instrumenters: {isparta: require('isparta')},
         instrumenter: {
         'app.js': 'isparta'

         }
         },
         */

        port: 9876,
        colors: true,
        autoWatch: false,
        singleRun: false,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,

        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        /*
         browsers: ["PhantomJS"],

         phantomjsLauncher: {
         // configure PhantomJS executable for each platform
         cmd: {
         win32: './bin/phantomjs.exe'
         }
         }, */
        customLaunchers: {
            'Custom_Chrome': {
                base: 'Chrome',
                flags: ['--enable-javascript-harmony']
            }
        },

        // use the custom launcher
        browsers: ['Custom_Chrome'],

        // browserify configuration
        browserify: {
            transform: ["browserify-shim"]
        }
    });
};