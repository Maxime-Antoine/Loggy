'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect'); //runs local dev server
var open = require('gulp-open'); //open URL in browser
var browserify = require('browserify'); //bundle JS
var reactify = require('reactify'); //transforms JSX to JS
var source = require('vinyl-source-stream'); //use conventional text streams with gulp
var concat = require('gulp-concat'); //concatenate files
var lint = require('gulp-eslint'); //lint JS and JSX files

var config = {
    port: 4242,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
        js: './src/**/*.js',
        mainJs: './src/index.js',
        images: './src/img/*',
        dist: './dist'
    }
};

//Start local dev server
gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true,
        fallback: 'dist/index.html'
    })
});

gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
        .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }))
});

gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('css', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))
        .pipe(connect.reload());
});

gulp.task('js', function () {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('img', function () {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/img'))
        .pipe(connect.reload());
})

gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('lint', function() {
    return gulp.src(config.paths.js)
               .pipe(lint({config: 'eslint.config.json'}))
               .pipe(lint.format());
});

gulp.task('default', ['html', 'css', 'img', 'js', 'lint', 'open', 'watch']);
