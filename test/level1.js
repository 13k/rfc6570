var h = require('./h');

describe('Level 1', function(){
	var data = {
		"var": "value"
		, "hello": "Hello World!"
	};
	
	describe('Simple string expansion', function(){

		h.addTest('{var}', 'value', data, true);
		h.addTest('{hello}', 'Hello%20World%21', data, true);

		h.addTest('{var}-{hello}', 'value-Hello%20World%21', data, true);

	});

});



