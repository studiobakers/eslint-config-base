module.exports = {
  rules: {
    // mistakes
    "no-cond-assign": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty-character-class": "error",
    "no-empty": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-semi": "error",
    "no-func-assign": "error",
    "no-inner-declarations": [
      "error",
      "both"
    ],
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-obj-calls": "error",
    "no-regex-spaces": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "use-isnan": "error",
    "valid-jsdoc": "error",
    "valid-typeof": "error",
    // best practices
    "accessor-pairs": "error",
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "class-methods-use-this": "error",
    "complexity": [
      "error",
      {
        max: 6
      }
    ],
    "consistent-return": "error",
    "curly": "error",
    "default-case": "error",
    "dot-location": [
      "error",
      "property"
    ],
    "dot-notation": "error",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "guard-for-in": "error",
    "no-alert": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-div-regex": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-empty-pattern": "error",
    "no-eq-null": 0,
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": [
      "error",
      {
        boolean: false
      }
    ],
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    // "no-invalid-this": "error", //see "babel" counterpart of this rule below
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-magic-numbers": [
      "error",
      {
        ignore: [
          0,
          -1
        ]
      }
    ],
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-new": "error",
    "no-octal-escape": "error",
    "no-octal": "error",
    "no-param-reassign": "error",
    "no-proto": "error",
    "no-redeclare": [
      "error",
      {
        builtinGlobals: true
      }
    ],
    "no-restricted-properties": "error",
    "no-return-await": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-useless-return": "error",
    "no-useless-escape": "error",
    "no-void": "error",
    // "no-warning-comments": "warn",
    "no-with": "error",
    "prefer-promise-reject-errors": [
      "error",
      {
        allowEmptyReject: true
      }
    ],
    "require-await": "error",
    "vars-on-top": "error",
    "wrap-iife": [
      "error",
      "inside"
    ],
    "yoda": "error",
    // variables
    // "init-declarations": "warn,
    "no-catch-shadow": "error",
    "no-delete-var": "error",
    "no-label-var": "error",
    // "no-restricted-globals": ["error", []]
    "no-shadow-restricted-names": "error",
    "no-shadow": "error",
    "no-undef-init": "error",
    "no-undef": "error",
    "no-undefined": "error",
    "no-unused-vars": [
      "error",
      {
        args: "none"
      }
    ],
    "no-use-before-define": "error",
    // stylistic
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "block-spacing": [
      "error",
      "never"
    ],
    "brace-style": [
      "error",
      "1tbs"
    ],
    "camelcase": [
      "error",
      {
        properties: "never"
      }
    ],
    // "capitalized-comments": "warn",
    "comma-dangle": [
      "error",
      "never"
    ],
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true
      }
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "computed-property-spacing": [
      "error",
      "never"
    ],
    "consistent-this": [
      "error",
      "self"
    ],
    "eol-last": [
      "error",
      "always"
    ],
    "func-call-spacing": [
      "error",
      "never"
    ],
    "func-name-matching": [
      "error",
      "never"
    ],
    "func-names": [
      "error",
      "never"
    ],
    "func-style": [
      "error",
      "declaration",
      {
        allowArrowFunctions: true
      }
    ],
    // id-blacklist": ["error", []],
    "id-length": [
      "error",
      {
        exceptions: [
          "i",
          "e"
        ]
      }
    ],
    // "id-match": ["error", "^[a-z]+([A-Z][a-z]+)*$"],
    "indent": [
      "error",
      2
    ],
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true,
        mode: "strict"
      }
    ],
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true
      }
    ],
    "line-comment-position": [
      "error",
      {
        position: "above",
        ignorePattern: "reason:",
        applyDefaultPatterns: true
      }
    ],
    // "linebreak-style": ["warn", "unix"]
    "lines-around-comment": [
      "error",
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        allowBlockStart: true,
        allowBlockEnd: false,
        allowObjectStart: true,
        allowObjectEnd: false,
        allowArrayStart: true,
        allowArrayEnd: false
      }
    ],
    "lines-around-directive": [
      "error",
      {
        before: "never",
        after: "always"
      }
    ],
    "max-depth": [
      "error",
      {
        max: 4
      }
    ],
    "max-len": [
      "error",
      {
        code: 120,
        tabWidth: 2,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    "max-lines": [
      "error",
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    "max-nested-callbacks": [
      "error",
      {
        max: 3
      }
    ],
    "max-params": [
      "error",
      {
        max: 5
      }
    ],
    "max-statements-per-line": [
      "error",
      {
        max: 1
      }
    ],
    // "max-statements": ["warn", 10]
    "multiline-ternary": [
      "error",
      "never"
    ],
    "new-cap": [
      "error",
      {
        newIsCap: true,
        capIsNew: true,
        properties: true
      }
    ],
    "new-parens": "error",
    "newline-after-var": [
      "error",
      "always"
    ],
    // "newline-before-return": "error", newline-after-var inconsistency on fix
    "newline-per-chained-call": [
      "error",
      {
        ignoreChainWithDepth: 2
      }
    ],
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-continue": "error",
    // "no-inline-comments": "warn",
    "no-lonely-if": "error",
    "no-mixed-operators": [
      "error"
    ],
    "no-multi-assign": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 2,
        maxEOF: 1,
        maxBOF: 0
      }
    ],
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new-object": "error",
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true
      }
    ],
    // "no-restricted-syntax": "warn"
    "no-tabs": "error",
    // "no-ternary": "warn"
    "no-trailing-spaces": "error",
    "no-underscore-dangle": [
      "error",
      {
        allowAfterThis: true,
        allowAfterSuper: true
      }
    ],
    "no-unneeded-ternary": [
      "error",
      {
        defaultAssignment: false
      }
    ],
    "no-whitespace-before-property": "error",
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 1
        },
        ObjectPattern: {
          multiline: true
        }
      }
    ],
    // formatting bug var,
    "object-curly-spacing": [
      "error",
      "never"
    ],
    "object-property-newline": [
      "error",
      {
        allowMultiplePropertiesPerLine: false
      }
    ],
    "one-var-declaration-per-line": [
      "error",
      "initializations"
    ],
    // "one-var": ["warn", { "var": "always", "let": "never", "const": "never" }]
    // "operator-assignment": ["warn", "always"],
    "operator-linebreak": [
      "error",
      "after"
    ],
    // "padded-blocks": ["warn", "never"]
    "quote-props": [
      "error",
      "consistent-as-needed"
    ],
    "quotes": [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
        avoidEscape: false
      }
    ],
    // "sort-keys": ["warn"],
    // "sort-vars": ["warn"]
    "semi": [
      "error",
      "always"
    ],
    "semi-spacing": [
      "error",
      {
        before: false,
        after: true
      }
    ],
    "space-before-blocks": [
      "error",
      {
        functions: "always",
        keywords: "always",
        classes: "always"
      }
    ],
    // "require-jsdoc": ["warn"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "ignore"
      }
    ],
    "space-infix-ops": [
      "error",
      {
        int32Hint: false
      }
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-unary-ops": [
      "error",
      {
        words: true,
        nonwords: false,
        overrides: {}
      }
    ],
    "spaced-comment": [
      "error",
      "always"
    ],
    "template-tag-spacing": [
      "error",
      "never"
    ],
    "unicode-bom": [
      "error",
      "never"
    ],
    "wrap-regex": "error"
  }
};
