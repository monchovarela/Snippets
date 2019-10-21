/*
* Dependencias
*/
const { watch, src, dest } = require('gulp');
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  babel = require("gulp-babel"),
  cssmin = require('gulp-cssmin');


function minifyJS() {
	return src(['./assets/js/utils.js','./assets/js/app.js'])
	.pipe(concat('app.min.js'))
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(uglify())
	.pipe(dest('./assets'));
}

function minifyCSS() {
	return src('./assets/css/*.css')
	.pipe(concat('app.min.css'))
	.pipe(cssmin())
	.pipe(dest('./assets'));
}

exports.default = function() {
  // You can use a single task
  watch('assets/css/*.css', minifyCSS);
  // Or a composed task
  watch('assets/js/*.js',minifyJS);
};



