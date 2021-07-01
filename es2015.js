module.exports = {
  // `eslint-plugin-import` related plugin
  plugins: ["import"],
  rules: {
    // es6
    "arrow-body-style": [
      "warn",
      "as-needed",
      {
        requireReturnForObjectLiteral: false
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
      "always"
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
        "VariableDeclarator": {
          "array": false,
          "object": true
        },
        "AssignmentExpression": {
          "array": false,
          "object": false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-yield": "error",
    "rest-spread-spacing": [
      "error",
      "never"
    ],
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
    ],
    // `eslint-plugin-import` related rules
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          ["builtin", "external"],
          ["sibling", "parent", "internal", "index"]
        ],
        pathGroups: [
          {
            pattern: "*.+(svg|pdf|csv|png|json)",
            patternOptions: {
              dot: true,
              nocomment: true,
              matchBase: true
            },
            group: "builtin",
            position: "before"
          }
        ]
      }
    ],
    "import/no-duplicates": "error",
    "import/no-unresolved": "error"
  }
}