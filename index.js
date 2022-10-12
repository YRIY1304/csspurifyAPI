const purify = require("purify-css");

var content = ["**/src/js/*.js", "**/src/html/*.html"];
var css = ["**/src/css/*.css"];

var options = {
  // Will write purified CSS to this file.
  output: "./dist/purified.css",
};

purify(content, css, options);
