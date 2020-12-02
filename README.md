# @hipo/eslint-config-base

Hipo's shareable ESLint configuations for ECMAScript 2015 and beyond.

## Installation

```
npm i --save-dev @hipo/eslint-config-base
```

## Usage

Set your eslint config to:

```
{
  "extends": ["@hipo/eslint-config-base"]
}
```

## TypeScript

If you are using TypeScript, to avoid false `import/no-unresolved` errors, you should add `plugin:import/typescript` to your eslint config **(RECOMMENDED)**:

```
{
  "extends": ["@hipo/eslint-config-base", "plugin:import/typescript"]
}
```

or you can turn off `"import/no-unresolved"` rule in your eslint config:

```
{
  rules:{
    ...
    "import/no-unresolved": "off"
  }
}
```
