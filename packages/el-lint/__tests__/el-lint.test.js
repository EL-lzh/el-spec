'use strict';

const elLint = require('..');
const assert = require('assert').strict;

assert.strictEqual(elLint(), 'Hello from elLint');
console.info('elLint tests passed');
