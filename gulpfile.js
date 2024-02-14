const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');

const babel = require('gulp-babel');
const uglily = require('gulp-uglify');
const gulpSass = require('gulp-sass');


function pluginsCSS() {
    return gulp.src('css/lib/*.css')
    .pipe(concat('plugins.css'))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}

gulp.task('pluginscss', pluginsCSS);

// compilar o sass
function compilaSass() {
    return gulp.src('scss/*.scss')
    .pipe(sass({outputStyle : 'compressed'}))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
}

gulp.task('sass', compilaSass);



function gulpJs(){
    return gulp.src('js/scripts/*.js')
    .pipe(concat('all.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglily())
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
}

gulp.task('alljs', gulpJs);

function pluginsJs() {
    return gulp
    .src(['./js/lib/aos.js', './js/lib/swiper.min.js', './js/lib/jquery.min.js'])
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream());
}

gulp.task('pluginjs', pluginsJs);

// funcao browser sync para rodar arquivos quando atualizar automaticamente
function browser() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}

gulp.task('browser-sync', browser);


// nao precisa instalar o watch, pois é nativo do gulp
function watch() {
    gulp.watch('scss/*.scss').on('change', gulp.series(compilaSass, browserSync.reload));
    gulp.watch('./*.html').on('change', browserSync.reload);
    
    gulp.watch('js/scripts/*js', gulpJs);
    gulp.watch('js/lib/*.js', pluginsJs);
    gulp.watch('css/lib/*.css', pluginsCSS);
}

gulp.task('watch', watch);  

gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'alljs', 'pluginjs', 'pluginscss'));