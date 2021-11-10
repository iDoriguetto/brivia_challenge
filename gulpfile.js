const { src, dest }  = require("gulp");
const minify = require("gulp-minify");

function minifyjs() {

    return src('scss/style.js', { allowEmpty: true })
        .pipe(minify({noSource: true}))
}

exports.default = minifyjs;