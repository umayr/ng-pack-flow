var webpackConfig = require('./webpack.test');

module.exports = function karmaConfig (config) {
  config.set({
    frameworks: [
      'jasmine'
    ],
    reporters: [
      'spec',
      'coverage'
    ],
    files: [
      /*'app/tests.webpack.js'*/
    ],
    preprocessors: {
      'src/tests.webpack.js': ['webpack', 'sourcemap']
    },
    browsers: [
      'PhantomJS'
    ],
    singleRun: true,
    coverageReporter: {
      dir: 'build/coverage/',
      type: 'html'
    },
    webpack: webpackConfig
  });
};
