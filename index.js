var fs = require("fs");
var path = require("path");

function walkSync(dir, filelist) {
  var files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.resolve(dir, file)).isDirectory()) {
      filelist = walkSync(path.resolve(dir, file), filelist);
    } else {
      filelist.push(path.resolve(dir, file));
    }
  });
  return filelist.filter(path => /\.graphql$/.test(path));
}

module.exports = function requireGraphql(dir) {
  var files = walkSync(dir);
  return files.map(file => fs.readFileSync(file, "utf8")).join("\n");
};
