module.exports = {
  extends: [
    "./common"
  ].map(require.resolve),
  parserOptions: {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module"
  },
  rules: {
    // es6
    "arrow-body-style": [
      "error",
      "as-needed",
      {
        requireReturnForObjectLiteral: true
      }
    ],
    "arrow-parens": [
      "error",
      "as-needed",
      {
        requireForBlockBody: true
      }
    ],
    "arrow-spacing": [
      "error",
      {
        before: true,
        after: true
      }
    ],
    "constructor-super": "error",
    "generator-star-spacing": [
      "error",
      {
        before: false,
        after: true
      }
    ],
    "no-class-assign": "error",
    "no-confusing-arrow": [
      "error",
      {
        allowParens: false
      }
    ],
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": [
      "error",
      {
        includeExports: true
      }
    ],
    "no-new-symbol": "error",
    // "no-restricted-imports": ["warn", {"paths": [], "patterns": []}],
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": [
      "error",
      {
        ignoreDestructuring: true,
        ignoreImport: true,
        ignoreExport: true
      }
    ],
    "no-var": "error",
    "object-shorthand": [
      "error",
      "consistent-as-needed"
    ],
    "prefer-arrow-callback": [
      "error",
      {
        allowUnboundThis: true
      }
    ],
    "prefer-const": "error",
    "prefer-destructuring": [
      "error",
      {
        array: false,
        object: true
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    // prefer-numeric-literals: ["warn"],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-yield": "error",
    "rest-spread-spacing": [
      "error",
      "never"
    ],
    // "sort-imports": ["warn"]
    "symbol-description": [
      "error"
    ],
    "template-curly-spacing": [
      "error",
      "never"
    ],
    "yield-star-spacing": [
      "error",
      "after"
    ]
  }
};
