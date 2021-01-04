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

* Disable `no-undef` in your eslint config as TSC already catches related errors. `no-undef` rule causes problems if you try to use TS only features like `enums`.
  ```
  {
    rules:{
      ...
      "no-undef": "off"
    }
  }
  ```
* To avoid false `import/no-unresolved` errors, you should add `plugin:import/typescript` to your eslint config **(RECOMMENDED)**:

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
