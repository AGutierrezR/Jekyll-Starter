/**
 * Configuration File
 *
 * 1. Edit the variables as per your project requirements
 * 2. In paths you can add <<glob or array of globs>>
 */

module.exports = {
  // Watch file options
  watchTemplates: [
    '*.md',
    '*.html',
    '+(_includes|_layouts)/*.html',
    '*.yml',
    '_data/*.yml',
    '_posts/*',
  ], // Files that trigger Jekyll Build and Browser Reload
}
