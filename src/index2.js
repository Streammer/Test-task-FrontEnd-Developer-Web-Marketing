var pug = require('pug');
var fn = pug.compileFile('template.pug');
var locals = require('./dataset.json');
console.log(fn({
	name: locals
}));
console.log(locals)
 
