# Hold Up [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

`hold up` is `setInterval` with `promises`, `counter` and `error handling`.

## Install

`npm i @iocmd/hold-up --save`

## API

### holdUp(fn[, ...args][, options])

- `fn` - function
- `args` - arguments to a function
- `options` - options may contain:
  - `log`
  - `count`
  - `time`

```js
const holdUp = require('hold-up');
const tryToCatch = require('try-to-catch');
const fn = async (a) => {
    throw Error(a);
};

await tryToCatch(holdUp, fn, 'hello', {
    count: 5,       // default
    time: 1000,     // default
    log: () => {},  //default
});

// returns in a 5 seconds
[Error: hello]

```

## Environments

In old `node.js` environments that not fully supports `es2015`, `hold-up` can be used with:

```js
var holdUp = require('hold-up/legacy');
```

## Related

- [currify](https://github.com/coderaiser/currify "currify") - translate the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single or more arguments.

- [fullstore](https://github.com/coderaiser/fullstore "fullstore") - functional variables.

- [wraptile](https://github.com/coderaiser/wraptile "wraptile") - translate the evaluation of a function that takes multiple arguments into evaluating a sequence of 2 functions, each with a any count of arguments.

## License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/hold-up.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/hold-up/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/david/coderaiser/hold-up.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/hold-up "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/hold-up  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/coderaiser/hold-up "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"

[CoverageURL]:              https://coveralls.io/github/coderaiser/hold-up?branch=master
[CoverageIMGURL]:           https://coveralls.io/repos/coderaiser/hold-up/badge.svg?branch=master&service=github
