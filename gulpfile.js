
//Packages//
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util'); // environmental variable for specifying production of development
var buildProduction = utilities.env.production; //tells what kind of environment we are using. part of gulp-util
var del = require('del'); // clean tasks
var jshint = require('gulp-jshint');//Js hint
var lib = require('bower-files')({ //required for bootstrap
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});
var browserSync = require('browser-sync').create();
