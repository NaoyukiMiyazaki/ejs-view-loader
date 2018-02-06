const path = require('path');
const ejs = require('ejs');
const loaderUtils = require('loader-utils');
const glob = require('glob');

module.exports = function(source) {
  this.cacheable && this.cacheable();

  const opts = loaderUtils.getOptions(this) || {};

  // Use filenames relative to working dir, which should be project root
  opts.filename = path.relative(process.cwd(), this.resourcePath);

  const template = ejs.compile(source, opts)();

  if (opts.watch) {
    glob.sync(opts.watch).forEach(path => {
      this.addDependency(path);
    });
  }

  return 'module.exports = ' + JSON.stringify(template);
};
