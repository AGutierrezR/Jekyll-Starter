/**
 * Gulpfile
 *
 * Implements:
 *  1. Live reloads browser with BrowserSync
 *
 */
const config = require('./gulp.config')

const { watch, series, parallel } = require('gulp')

const browserSync = require('browser-sync').create()
const cp = require('child_process')

const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll'

// Run Jekyll Build
function jekyll_build(done) {
  return cp.spawn(jekyll, ['build'], { stdio: 'inherit' }).on('close', done)
}

// Rebuild and then reload the page
function jekyll_rebuild(done) {
  browserSync.reload()
  done()
}

// BrowserSync Server
function server() {
  browserSync.init({
    server: {
      baseDir: '_site',
    },
  })

  watch(config.watchTemplates, series(jekyll_build, jekyll_rebuild))
}

exports.build = parallel(jekyll_build, server)
