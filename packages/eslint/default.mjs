import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import jsxA11YPlugin from "eslint-plugin-jsx-a11y";
import jsdocPlugin from "eslint-plugin-jsdoc";
import nodePlugin from "eslint-plugin-node";
import importPlugin from "eslint-plugin-import";

export default [
	js.configs.recommended,
	reactPlugin.configs.flat.recommended,
	jsxA11YPlugin.flatConfigs.recommended,
	importPlugin.flatConfigs.recommended,
	{
		plugins: {
			jsdoc: jsdocPlugin,
			node: fixupPluginRules( nodePlugin ),
		},

		languageOptions: {
			globals: {
				...globals.amd,
				...globals.browser,
				...globals.jquery,
				...globals.node,
			},

			ecmaVersion: 2017,
			sourceType: "module",

			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},

		// https://eslint.org/docs/rules/
		rules: {
			// Native ESLint rules
			// - ESLint "Possible problems - These rules relate to possible logic errors in code:" (https://eslint.org/docs/latest/rules/#possible-problems).
			"no-inner-declarations": [ "error", "functions" ],
			"no-self-compare": "error",
			"no-use-before-define": "error",

			// - ESLint "Suggestions - These rules suggest alternate ways of doing things:" (https://eslint.org/docs/latest/rules/#suggestions).
			"accessor-pairs": "error",
			camelcase: "error",
			complexity: [ "error", 10 ],
			"consistent-this": "error",
			curly: "error",
			"dot-notation": "error",
			eqeqeq: "error",
			"guard-for-in": "error",
			"max-depth": "error",
			"max-nested-callbacks": "error",
			"max-statements": [ "error", 30 ],
			"new-cap": "error",
			"no-alert": "error",
			"no-array-constructor": "error",
			"no-bitwise": "error",
			"no-caller": "error",
			"no-console": [ "warn", { allow: [ "warn", "error", "trace" ], } ],
			"no-div-regex": "error",
			"no-else-return": "error",
			"no-eq-null": "error",
			"no-eval": "error",
			"no-extend-native": "error",
			"no-extra-bind": "error",
			"no-implied-eval": "error",
			"no-inline-comments": "error",
			"no-iterator": "error",
			"no-label-var": "error",
			"no-labels": "error",
			"no-lone-blocks": "error",
			"no-loop-func": "error",
			"no-multi-str": "error",
			"no-negated-condition": "error",
			"no-nested-ternary": "error",
			"no-new-func": "error",
			"no-new-wrappers": "error",
			"no-new": "error",
			"no-object-constructor": "error",
			"no-octal-escape": "error",
			"no-proto": "error",
			"no-restricted-syntax": [
				"error",
				{
					selector: "CallExpression[callee.name=/^(__)$/][arguments.length!=2]",
					message: "A textdomain needs to be provided for translation calls.",
				}, {
					selector: "CallExpression[callee.name=/^(_x)$/][arguments.length!=3]",
					message: "A textdomain needs to be provided for translation calls.",
				}, {
					selector: "CallExpression[callee.name=/^(_n)$/][arguments.length!=4]",
					message: "A textdomain needs to be provided for translation calls.",
				}, {
					selector: "CallExpression[callee.name=/^(_nx)$/][arguments.length!=5]",
					message: "A textdomain needs to be provided for translation calls.",
				}
			],
			"no-return-assign": "error",
			"no-script-url": "error",
			"no-shadow": [ "error", { builtinGlobals: false, hoist: "all", allow: [], } ],
			"no-undef-init": "error",
			"no-undefined": "error",
			"no-unneeded-ternary": "error",
			"no-unused-expressions": "error",
			"no-useless-call": "error",
			"no-useless-concat": "error",
			"no-void": "error",
			"no-warning-comments": [ "error", { terms: [ "todo" ], location: "anywhere", } ],
			"prefer-const": "error",
			radix: "error",
			strict: "error",

			// Plugin: Stylistic rules (https://eslint.style/packages/default).
			"array-bracket-spacing": [ "error", "always" ],
			"block-spacing": "error",
			"brace-style": [ "error", "1tbs" ],
			"comma-dangle": [ "error", "always-multiline" ],
			"comma-spacing": "error",
			"comma-style": "error",
			"computed-property-spacing": [ "error", "always" ],
			"eol-last": "error",
			"func-call-spacing": "error",
			indent: [ "error", "tab", { SwitchCase: 1, } ],
			"jsx-quotes": "error",
			"key-spacing": "error",
			"keyword-spacing": "error",
			"linebreak-style": "error",
			"max-len": [ "error", 150, 4 ],
			"new-parens": "error",
			"no-extra-semi": "error",
			"no-mixed-spaces-and-tabs": [ "error", "smart-tabs" ],
			"no-multiple-empty-lines": "error",
			"no-trailing-spaces": "error",
			"no-whitespace-before-property": "error",
			"object-curly-spacing": [ "error", "always" ],
			"operator-linebreak": "error",
			"padded-blocks": [ "error", "never" ],
			"quote-props": [ "error", "as-needed", { keywords: true, } ],
			quotes: [ "error", "double", "avoid-escape" ],
			"semi-spacing": "error",
			semi: "error",
			"space-before-blocks": "error",
			"space-before-function-paren": [ "error", "never" ],
			"space-in-parens": [ "error", "always", { exceptions: [ "empty" ], } ],
			"space-infix-ops": "error",
			"space-unary-ops": [ "error", { words: false, nonwords: false, overrides: { "!": true, }, } ],
			"spaced-comment": [ "error", "always" ],
			"wrap-iife": "error",

			// Plugin: JSDoc rules (https://github.com/gajus/eslint-plugin-jsdoc)
			"jsdoc/require-jsdoc": [ "error", {
				require: {
					MethodDefinition: true,
					ClassDeclaration: true,
					ArrowFunctionExpression: true,
					FunctionExpression: true,
				},
			} ],
			"jsdoc/check-tag-names": "error",

			// Plugin: Node rules (https://github.com/eslint-community/eslint-plugin-n)
			"node/callback-return": "error",
			"node/global-require": "error",
			"node/handle-callback-err": "error",
			"node/no-mixed-requires": "error",
			"node/no-path-concat": "error",
			"node/no-process-exit": "error",

			// Plugin: jsx-a11y rules (https://github.com/jsx-eslint/eslint-plugin-jsx-a11y).
			// Deprecated in v6.1.0 in favor of label-has-associated-control but we still want to require only for/id and not nesting.
			"jsx-a11y/label-has-for": [ "error", { required: "id", } ],

			// Plugin: React rules (https://github.com/jsx-eslint/eslint-plugin-react)
			"react/boolean-prop-naming": "error",
			"react/button-has-type": 0,
			"react/default-props-match-prop-types": "error",
			"react/forbid-foreign-prop-types": "error",
			"react/jsx-boolean-value": [ "error", "always" ],
			"react/jsx-closing-bracket-location": [ "error", "line-aligned" ],
			"react/jsx-curly-spacing": [ "error", { when: "always", children: true, } ],
			"react/jsx-equals-spacing": "error",
			"react/jsx-first-prop-new-line": [ "error", "multiline" ],
			"react/jsx-indent-props": [ "error", "tab" ],
			"react/jsx-indent": [ "error", "tab" ],
			"react/jsx-max-depth": [ "error", { max: 8, } ],
			"react/jsx-max-props-per-line": [ "error", { maximum: 6, } ],
			"react/jsx-no-bind": "error",
			"react/jsx-pascal-case": "error",
			"react/jsx-tag-spacing": [ "error", { beforeClosing: "never", } ],
			"react/no-access-state-in-setstate": "error",
			"react/no-redundant-should-component-update": "error",
			"react/no-render-return-value": "error",
			"react/no-this-in-sfc": "error",
			"react/no-typos": "error",
			"react/no-unused-prop-types": "error",
			"react/no-unused-state": "error",
			"react/prefer-es6-class": "error",
			"react/require-default-props": [ "error", { ignoreFunctionalComponents: true, } ],
			"react/self-closing-comp": "error",
			"react/void-dom-elements-no-children": "error",

			// Plugin: Import rules (https://github.com/import-js/eslint-plugin-import)
			"import/no-extraneous-dependencies": "error",
			"import/no-unresolved": "error",
		},
		"settings": {
			"jsdoc": {
				"tagNamePreference": {
					"return": "returns"
				}
			}
		}
	} ];