'use strict';

const {promisify} = require('util');
const tryToCatch = require('try-to-catch');
const defaultLog = () => {};

const wait = promisify((time, fn) => {
    setTimeout(fn, time)
});

const getOptions = (n, args) => {
    if (args.length <= n)
        return {};
    
    return args.pop();
};

module.exports = async function smartTimeout(fn, ...args) {
    checkFn(fn);
    const options = getOptions(fn.length, args);
    checkOptions(options);
    
    const {
        count = 5,
        time = 1000,
        log = defaultLog,
    } = options;
    
    const [e] = await tryToCatch(fn, ...args);
    
    if (!e)
        return;
    
    if (!count || count === 1)
        throw e;
    
    await wait(time);
    
    log(e.message, `let's try again...`);
    log(`${count - 1} attempts left`);
    
    await smartTimeout(fn, ...args, {
        time,
        count: count - 1,
        log,
    });
};

function checkFn(fn) {
    if (typeof fn !== 'function')
        throw Error('fn should be a function!');
}

function checkOptions(options) {
    if (!options || typeof options !== 'object')
        throw Error('options should be an object!');
}

