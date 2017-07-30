"use strict";

const assert = require('assert'),
	  util = require('../index');

function makeRegExpAndTestContains(str){
	it('测试 contains, "'+str+'"', function(){
		assert.equal(true, RegExp(util.contains(str)).test(str));
	});
}

describe('测试模块 regex-utils', function(){
	makeRegExpAndTestContains('abcdefg');
	makeRegExpAndTestContains('abc3wdadWERGHmf132g');
	makeRegExpAndTestContains('abc3%wdadWERGHmf13,;2g\'');
	makeRegExpAndTestContains('\abc3%wdadWERGHmf13,;2g\'');
	makeRegExpAndTestContains('^abc3%wdadWERGHmf13,;2g\'$');
	makeRegExpAndTestContains('\^abc3%wdadWERGHmf13,;2g\'\$');
	makeRegExpAndTestContains('\^abc3%wdadWE^.RGHmf13,;2g\'\$');
	makeRegExpAndTestContains('\^abc3%||wdadWE^.RGHmf13,;2g\'\$');
	makeRegExpAndTestContains('\^abc3%||wdad[WE]^.RGHmf13,;2g\'\$');
	makeRegExpAndTestContains('\^abc3%||wdad[WE]^.RGHmf1(3,;2g)\'\$');
	makeRegExpAndTestContains('\^a你好bc3%||wdad[WE]^.RGH世界mf1(3,;2g)\'\$');
	makeRegExpAndTestContains('\^a你好bc3%||wdad[WE]^.RGH世界m\bf1(3，；（,;）2g)\'\$');
	makeRegExpAndTestContains('\^a你好bc3%\\||wdad[WE]^.RGH世界m\bf1(3，；（,;）2g)\'\$');
	makeRegExpAndTestContains('\^a你好bc3%\\\twdad[WE]^.RGH世界m\bf1(3，；（,;）2g)\'\$');
	makeRegExpAndTestContains('\^a你好bc3%\\\nwdad[WE]^.RGH世界m\bf1(3，；（,;）2g)\'\$');
	makeRegExpAndTestContains('\^a你好bc3%\\\\nwdad[WE]^.RGH世界m\bf1(3，；（,;）2g)\'\$');
	makeRegExpAndTestContains('\^a你好bc3%\\\\\nnwdad[WE]^.RGH世界m\bf1(3，；（,;）2g)\'\$');

	makeRegExpAndTestContains('/([\\*\\^\\$\\|\\{\\}\\[\\]\\(\\)\\+\\-\\.\\?\\/])/g');
	makeRegExpAndTestContains('/([\*\^\$\|\{\}\[\]\(\)\+\-\.\?\/])/g');

});
