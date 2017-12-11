var gulp = require('gulp')
var uglify = require('gulp-uglify')
var standard = require('gulp-standard')
var rename = require("gulp-rename")
var replace = require('gulp-replace')
var fs = require('fs')
var version = JSON.parse(fs.readFileSync('package.json', 'utf8')).version

gulp.task('default',function(){
	gulp.src('./Vue-Responsive.js')
	    .pipe(standard())
        .pipe(standard.reporter('default', {
           breakOnError: true,
           quiet: true
        }))
		.pipe(replace(/(@@version@@)+/, version))
		.pipe(gulp.dest('./dist/'))
		.pipe(uglify({preserveComments: 'license'}))
		.pipe(rename('Vue-Responsive.min.js'))
		.pipe(gulp.dest('./dist/'));
		
	gulp.src('./Vue-Responsive.js')
		.pipe(replace(/(@@version@@)+/, version))		
		.pipe(replace(/\(function\(\){/, ""))
		.pipe(replace(/	"use strict";/, ""))
		.pipe(replace(/var vue_responsive =/, "export default"))
		.pipe(replace(/\/\/ Check if the directive(.|\s)*/g, ""))
		.pipe(rename('Vue_Responsive.common.js'))
		.pipe(gulp.dest('./dist/'));
});

