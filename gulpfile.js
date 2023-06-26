const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const webp = require('gulp-webp');
const del  = require('del');

const paths = {
  src: {
    scss: './src/scss/*.scss',
    js: './src/js/**/*.js',
    images_convert: './src/images/convert/**/*.{png,PNG,jpg,JPG,jpeg,JPEG}',
    images_raw: './src/images/raw/**/*.{svg,SVG}',
    videos: './src/videos/**/*.{mp4,MP4,webm,WEBM}',
    fonts: './src/assets/fonts/**/*.{woff,WOFF,woff2,WOFF2,ttf,TTF,eot,EOT,svg,SVG}',
    favicons: './src/assets/favicons/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,ico,ICO,xml,XML,svg,SVG,webmanifest,WEBMANIFEST}'
  },
  watch: {
    scss: './src/scss/**/*.scss',
    images_convert: './src/images/convert/**/*.{png,PNG,jpg,JPG,jpeg,JPEG}',
    images_raw: './src/images/raw/**/*.{svg,SVG}',
    videos: './src/videos/**/*.{mp4,MP4,webm,WEBM}',
    fonts: './src/assets/fonts/**/*.{woff,WOFF,woff2,WOFF2,ttf,TTF,eot,EOT,svg,SVG}',
    favicons: './src/assets/favicons/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,ico,ICO,xml,XML,svg,SVG,webmanifest,WEBMANIFEST}',
    js: './src/js/**/*.js',
    twig: './templates/**/*.html.twig',
    md: './../../pages/**/*.md'
  },
  dest: {
    css: './dist/css-compiled',
    js: './dist/js',
    images_converted: './dist/images-compiled/converted',
    images_raw: './dist/images-compiled/raw',
    videos: './dist/videos-compiled',
    fonts: './dist/assets/fonts',
    favicons: './dist/assets/favicons'
  }
};

gulp.task ('compile-sass', () => {
  return gulp
  .src(paths.src.scss)
  .pipe(
    sass({
      outputStyle: 'expanded',
      precision: 10,
    }).on('error', sass.logError)
  )
  .pipe(gulp.dest(paths.dest.css))
  .pipe(browserSync.stream());
});

gulp.task('compile-images-convert', () => {
  return gulp
  .src(paths.src.images_convert)
  .pipe(webp())
  .pipe(gulp.dest(paths.dest.images_converted))
  .pipe(browserSync.stream());
});

gulp.task('compile-images-raw', () => {
  return gulp
  .src(paths.src.images_raw)
  .pipe(gulp.dest(paths.dest.images_raw))
  .pipe(browserSync.stream());
});

gulp.task('compile-videos', () => {
  return gulp
  .src(paths.src.videos)
  .pipe(webp())
  .pipe(gulp.dest(paths.dest.videos))
  .pipe(browserSync.stream());
});

gulp.task('compile-fonts', () =>{
  return gulp
  .src(paths.src.fonts)
  .pipe(gulp.dest(paths.dest.fonts))
  .pipe(browserSync.stream());
});

gulp.task('compile-favicons', () =>{
  return gulp
  .src(paths.src.favicons)
  .pipe(gulp.dest(paths.dest.favicons))
  .pipe(browserSync.stream());
});

gulp.task('compile-js', () =>{
  return gulp
  .src(paths.src.js)
  .pipe(gulp.dest(paths.dest.js))
  .pipe(browserSync.stream());
});

gulp.task('clean-all', () => {
  return del(['dist/**/*']);
});

gulp.task('clean-images-raw', () => {
  return del(['dist/images-compiled/raw/**/*']);
});

gulp.task('clean-images-convert', () => {
  return del(['dist/images-compiled/converted/**/*']);
});

gulp.task('clean-videos', () => {
  return del(['dist/videos-compiled/**/*']);
});

gulp.task('clean-fonts', () => {
  return del(['dist/assets/fonts/**/*']);
});

gulp.task('clean-favicons', () => {
  return del(['dist/assets/favicons/**/*']);
});

gulp.task('clean-assets', () => {
  return del(['dist/assets/**/*']);
});

gulp.task('clean-css', () => {
  return del(['dist/css-compiled/**/*']);
});

gulp.task('clean-js', () => {
  return del(['dist/js/**/*']);
});


gulp.task('watch', () => {
  browserSync.init({
    proxy: 'localhost:8080'
  });
  gulp.watch(paths.watch.scss, gulp.series('clean-css', 'compile-sass'));
  gulp.watch(paths.watch.images_convert, gulp.series('clean-images-convert', 'compile-images-convert'));
  gulp.watch(paths.watch.images_raw, gulp.series('clean-images-raw', 'compile-images-raw'));
  gulp.watch(paths.watch.videos, gulp.series('clean-videos', 'compile-videos'));
  gulp.watch(paths.watch.fonts, gulp.series('clean-fonts', 'compile-fonts'));
  gulp.watch(paths.watch.favicons, gulp.series('clean-favicons', 'compile-favicons'));
  gulp.watch(paths.watch.js, gulp.series('clean-js', 'compile-js'));
  gulp.watch(paths.watch.twig).on('change', () => {
    return gulp.src(paths.watch.twig)
    .pipe(browserSync.reload({stream: true}));
  });
  gulp.watch(paths.watch.md).on('change', () => {
    return gulp.src(paths.watch.md)
    .pipe(browserSync.reload({stream: true}));
  });
});

exports.build = gulp.series('clean-all', 'compile-sass', 'compile-js', 'compile-fonts', 'compile-images-raw', 'compile-images-convert', 'compile-videos', 'compile-favicons');