const RuleTester = require('eslint').RuleTester;
const ruleTester = new RuleTester();
import rule = require('./too-many-parameters');
const ruleId = 'too-many-parameters';
const parserOptions = {};

ruleTester.run(ruleId, rule, {
	valid: [
		{ code: `function test(p1) {}` },
		{ code: `function test(p1, p2, p3, p4, p5) {}`, options: [5] },
	],
	invalid: [
		{
			code: `function test(p1, p2, p3, p4, p5, p6) {}`,
			options: [5],
			errors: [{ ruleId, message: `Too many parameters (6), maximum allowed is 5.` }],
		},
	]
});
