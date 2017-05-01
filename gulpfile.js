var gulp        = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var exec = require('child_process').exec;

gulp.task('minify-css', function() {
    return gulp.src('static/css/clean-blog.css')
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('static/css/'));
});

gulp.task('watch', function(){
  gulp.watch(['**/*.css'], ['minify-css']);
});
gulp.task('default', ['watch']);