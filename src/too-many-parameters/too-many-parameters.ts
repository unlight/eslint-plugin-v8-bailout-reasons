const create = context => {

	const [option] = context.options;
	let numParams = 512;
	if (typeof option === 'number' && option > 0) {
		numParams = option;
	}

	function checkFunction(node) {
		if (node.params.length > numParams) {
			context.report({
				node,
				message: 'Too many parameters ({{count}}), maximum allowed is {{max}}.',
				data: {
					// name: lodash.upperFirst(astUtils.getFunctionNameWithKind(node)),
					count: node.params.length,
					max: numParams
				}
			});
		}
	};

	return {
		FunctionDeclaration: checkFunction,
		ArrowFunctionExpression: checkFunction,
		FunctionExpression: checkFunction,
	};
};

export = {
	create
}
