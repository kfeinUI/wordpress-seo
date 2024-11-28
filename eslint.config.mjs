import globals from "globals";
import yoastConfig from "eslint-config-yoast";


export default [
	{
		ignores: [
			"packages/*/build/*",
			"**/artifact/",
			"**/apps/",
			"**/packages/",
			"js/dist/",
			"**/vendor/",
			"**/vendor_prefixed/",
		],
	},
	...yoastConfig,
	{
		languageOptions: {
			ecmaVersion: 2018,
			sourceType: "module",
		},

		settings: {
			react: {
				version: "18.2",
			},
		},

		rules: {
			"no-prototype-builtins": 0,

			"comma-dangle": [ "error", {
				arrays: "always-multiline",
				objects: "always-multiline",
				imports: "always-multiline",
				exports: "always-multiline",
				functions: "never",
			} ],
		},
	}, {
		files: [
			"packages/*/tests/**/*.js",
			"packages/*/spec/**/*.js",
			"packages/components/a11y/tests/**/*.js",
		],

		languageOptions: {
			globals: {
				...globals.jest,
			},
		},

		rules: {
			"no-restricted-imports": "off",
		},
	}, {
		files: [ "packages/components/**/*.js" ],

		rules: {
			"react/jsx-no-bind": 1,
			"react/require-default-props": 1,
			"react/default-props-match-prop-types": 1,
			"react/no-unused-prop-types": 1,
			"require-jsdoc": 1,

			"import/no-unresolved": [ "error", {
				ignore: [ "^@yoast/(helpers|style-guide)" ],
			} ],
		},
	}, {
		files: [ "packages/social-metadata-forms/**/*.js" ],

		rules: {
			"import/no-unresolved": [ "error", {
				ignore: [ "^@yoast/(components|helpers|replacement-variable-editor|style-guide)" ],
			} ],
		},
	}, {
		files: [ "packages/social-metadata-previews/**/*.js" ],

		rules: {
			"import/no-unresolved": [ "error", {
				ignore: [
					"^@yoast/(components|replacement-variable-editor|social-metadata-forms|style-guide)",
				],
			} ],
		},
	}, {
		files: [ "packages/**/tests/**/*Test.js" ],

		rules: {
			"no-console": 0,
			"react/jsx-no-bind": 0,
		},
	}
];
