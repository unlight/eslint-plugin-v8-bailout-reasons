const rules = {
	'too-many-parameters': require('./too-many-parameters'),
};

const configs = {
	recommended: {
		// env: {
		// 	es6: true
		// },
		// parserOptions: {
		// 	ecmaVersion: 2017,
		// 	sourceType: 'module'
		// },
		rules: {
			'v8-bailout-reasons/too-many-parameters': ['warn', 512]
		}
	}
}

export = { rules, configs };
