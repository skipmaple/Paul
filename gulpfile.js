const {watch, src, dest, parallel} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const rename = require('gulp-rename');
const log = require('fancy-log')
// const execShPromise = require('exec-sh').promise
const esbuild = require("esbuild");

// const javascriptEntryPoint = 'app/javascript/application.js'
const sassEntrypoint = 'app/assets/stylesheets/application.postcss.css'
const outputFolder = 'app/assets/builds'

async function javascript() {
    await esbuild.build({
        // pass any options to esbuild here...
        entryPoints: ["app/javascript/application.js"],
        bundle: true,
        sourcemap: true,
        outdir: "app/assets/builds",
        publicPath: "assets",
        define: { "process.env.NODE_ENV": '"production"' },
        // watch: true,
    });
}

function css() {
    return src(sassEntrypoint, {sourcemaps: true})
        .pipe(
            sass({
                includePaths: './node_modules/tailwindcss/',
                quietDeps: true
            }).on('error', function (err) {
                log.error(err.message)
            })
        )
        .pipe(postcss())
        .pipe(rename('application.css'))
        .pipe(dest(outputFolder, {sourcemaps: '.'}))
}

const build = parallel(css, javascript)
const buildCss = parallel(css)
const buildJs = parallel(javascript)

const dev = function () {
    build()
    watch('app/assets/stylesheets/**/*.scss', buildCss)
    watch('app/assets/stylesheets/**/*.css', buildCss)
    watch('app/javascript/**/*.js', buildJs)
}

module.exports = {
    css,
    javascript,
    dev
}
