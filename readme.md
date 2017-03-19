# eslint-plugin-v8-bailout-reasons

Install
---
```
$ npm install --save-dev eslint eslint-plugin-v8-bailout-reasons
```

Rules
---
#### Too many parameters

If you write functions with 512 parameters or more,
you probably don't worry about optimizing your code for V8 anyway.

* https://github.com/vhf/v8-bailout-reasons#too-many-parameters
* http://eslint.org/docs/rules/max-params

RESOURCES
---
* https://astexplorer.net

DEBUG
---
* inspect node_modules\mocha\bin\_mocha --compilers ts:ts-node/register src/**/*.spec.ts
