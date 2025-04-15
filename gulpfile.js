const { src, dest, task } = require('gulp');

task('hello', function (done) {
  console.log('✨ Hello from Gulp!');
  done();
});
