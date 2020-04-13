/**
 * Gulpfile
 *
 * Implements:
 *  1. Live reloads browser with BrowserSync
 *
 */
const config = require('./gulp.config')
const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll'
const cp = require('child_process')

const { src, dest, watch, series, parallel } = require('gulp')
const browserSync = require('browser-sync').create()

const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const prefix = require('autoprefixer')

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
  watch(config.watchStyles, css)
}

function css() {
  return src(config.styleSrc)
    .pipe(
      sass({
        includePaths: ['scss'],
        outputStyle: config.outputStyle,
      })
    )
    .pipe(postcss([prefix()]))
    .pipe(dest(config.styleDest))
    .pipe(dest(config.styleJekyll))
    .pipe(browserSync.stream())
}

exports.build = series(jekyll_build, server)
