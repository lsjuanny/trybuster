try {

var path = require('path');
var fs = require('fs');
var coverageHelpers = require('coverage-helpers');


module.exports = {
  name: "myCoverage",

  create: function(options) {
    var instance = Object.create(this);
    return instance;
  },

  configure: function(config) {
    config.on('load:sources', function(resourceSet) {
      resourceSet.addProcessor(
        function(resource, content) {
          eval(
            coverageHelpers.instrument(
              new Buffer(content, resource.encoding), path.resolve(resource.path)
            ).toString(resource.encoding) +
            '\nprocess.COVERAGE = process.COVERAGE || []; process.COVERAGE[process.COVERAGE.length] = _$Coverage;\n'

          );
        }
      );
    });
  },

  testRun: function(testRunner, messagingClient) {
    testRunner.on('suite:end', function() {
      try {
      fs.writeFileSync(
        'coverage/coverage.lcov',
        coverageHelpers.generateLcov(coverageHelpers.combineResults.apply(this, process.COVERAGE))
      );
      } catch(err) {console.log(err.stack);}
    });
  if(!(fs.existsSync || path.existsSync)('coverage')) {fs.mkdirSync('coverage', '755');}
  }
};

} catch (err) {console.log(err.stack);}

