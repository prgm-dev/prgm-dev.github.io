module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		extraFileExtensions: ['.svelte'],
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs', '/*.config.ts', '/*.config.js'],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
			rules: {
				// Checks in the context of reactive assignments and store subscriptions
				// will report false positives or false negatives, depending on the rule.
				// See: https://github.com/sveltejs/eslint-plugin-svelte3#installation-with-typescript
				//
				// As a result, the following type-checking rules
				// are somewhat broken with Svelte, and are disabled:
				'@typescript-eslint/no-unsafe-argument': 'off',
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off',
				'@typescript-eslint/no-unsafe-return': 'off',
				'@typescript-eslint/restrict-plus-operands': 'off',
				'@typescript-eslint/restrict-template-expressions': 'off',
				// Other rules that interfere with Svelte
				'@typescript-eslint/no-inferrable-types': 'off',
				'@typescript-eslint/prefer-nullish-coalescing': 'off',
			},
		},
	],
	settings: {
		'svelte3/typescript': () => require('typescript'),
		'svelte3/ignore-styles': () => true,
	},
	env: {
		browser: true,
		node: true,
		es2022: true,
	},
	rules: {
		// ESLint
		eqeqeq: 'error',
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'no-return-await': 'warn',
		'no-undef-init': 'error',
		'no-useless-return': 'error',
		// Typescript
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'default',
				format: ['camelCase'],
			},

			{
				selector: ['objectLiteralProperty', 'typeProperty'],
				format: ['camelCase', 'PascalCase'],
			},

			{
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE'],
				trailingUnderscore: 'allow',
			},
			{
				selector: 'parameter',
				format: ['camelCase'],
				leadingUnderscore: 'allow',
			},

			{
				selector: 'memberLike',
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'require',
			},

			{
				selector: 'typeLike',
				format: ['PascalCase'],
			},
		],
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
		'@typescript-eslint/non-nullable-type-assertion-style': 'error',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-includes': 'error',
		'@typescript-eslint/prefer-nullish-coalescing': 'warn',
		'@typescript-eslint/prefer-optional-chain': 'warn',
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		'@typescript-eslint/prefer-reduce-type-parameter': 'error',
		'@typescript-eslint/prefer-string-starts-ends-with': 'error',
		'@typescript-eslint/prefer-ts-expect-error': 'error',
		'@typescript-eslint/switch-exhaustiveness-check': 'error',
		'@typescript-eslint/unified-signatures': 'error',
		'@typescript-eslint/no-meaningless-void-operator': 'error',
	},
};
