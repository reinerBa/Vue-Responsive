var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var replace = require('gulp-replace');
var fs = require('fs')
var version = JSON.parse(fs.readFileSync('package.json', 'utf8')).version

gulp.task('default',function(){
	gulp.src('./Vue-Responsive.js')
		.pipe(replace(/(@@version@@)+/, version))
		.pipe(gulp.dest('./dist/'))
		.pipe(uglify({preserveComments: 'license'}))
		.pipe(rename('Vue-Responsive.min.js'))
		.pipe(gulp.dest('./dist/'));
});

