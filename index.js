module.exports = {
  extends: [
    "./common",
    "./es2015"
  ].map(require.resolve),
  parserOptions: {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    },
    "sourceType": "module"
  }
};
