/**
 * Configuration File
 *
 * 1. Edit the variables as per your project requirements
 * 2. In paths you can add <<glob or array of globs>>
 */

module.exports = {

  // Styles
  styleSrc: '_scss/main.scss',
  styleDest: '_site/css',
  styleJekyll: 'css',
  outputStyle: 'expanded',

  // Watch file options
  watchTemplates: [
    '*.md',
    '*.html',
    '+(_includes|_layouts)/*.html',
    '*.yml',
    '_data/*.yml',
    '_posts/*',
  ],
  watchStyles: '_scss/**/*'
}
