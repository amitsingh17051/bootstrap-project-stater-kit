var gulp = require('gulp');
var sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');



gulp.task('message', function() {
 	return console.log('Gulp is running....');
});

gulp.task('sass', function() {
	gulp.src('sass/main.scss')
	    .pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('css'));

})

gulp.task('minify-css', () => {
	return gulp.src('./css/main.css')
	  .pipe(cleanCSS({compatibility: 'ie8'}))
	  .pipe(gulp.dest('minify_css'));
  });




gulp.task('watch', function(){
	gulp.watch('sass/main.scss',['sass']);
	gulp.watch('./css/main.css',['minify-css']);
})