/* This file has been generated by yabbler.js */
require.define({
"program": function(require, exports, module) {
var test = require('test');
var a = require('submodule/a');
var b = require('b');
test.assert(a.foo().foo === b.foo, 'require works with absolute identifiers');
test.print('DONE', 'info');

}}, ["test", "submodule/a", "b"]);