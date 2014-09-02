'use strict';

var should = require('should');// jshint ignore:line

var size = require('../lib/index');

var gulpMock = {};
var task = null;

gulpMock.task = function(name, description, deps, func) {
  task = func;
};

var configMock = {
  src: ['**/*.js', '!./node_modules/**', '!./docs/**']
};

size(gulpMock, configMock);

describe('Gulp Module Size', function() {
  it('Should return a function', function() {
    size.should.be.type('function');
  });

  it('Should create a task', function() {
    task.should.be.type('function');
  });

  it('Should run and throw an error', function(cb) {
    try {
      size();
    } catch (e) {
      cb();
    }
  });
});
