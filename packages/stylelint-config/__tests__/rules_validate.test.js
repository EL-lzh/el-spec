const assert = require('assert');
const stylelint = require('stylelint');
const path = require('path');

describe('test/rules-validate.test.js', () => {
    it('Validate default', async () => {
        const filePaths = [path.join(__dirname, './fixtures/index.css')]

        const result = await stylelint.lint({
            files: filePaths,
            configFile: path.join(__dirname, '../index.js'),
            fix: 'false',
        })

        if (result?.errored) {
            const filesResult = JSON.parse(result.output || '[]') || []
            filesResult.forEach(fileResult => {
                console.log('fileResult', fileResult.warnings)
            })
            assert.ok(filesResult.length !== 0)
        }
    })

    it('Validate sass', async() => {
        const filePaths = [path.join(__dirname, './fixtures/sass-test.scss')]

        const result = await stylelint.lint({
            files: filePaths,
            configFile: path.join(__dirname, '../index.js'),
            fix: 'false',
        })

        if (result?.errored) {
            const filesResult = JSON.parse(result.output || '[]') || []
            filesResult.forEach(fileResult => {
                console.log('fileResult', fileResult.warnings)
            })
            assert.ok(filesResult.length !== 0)
        }
    })

    it('Validate less', async() => {
        const filePaths = [path.join(__dirname, './fixtures/less-test.less')]

        const result = await stylelint.lint({
            files: filePaths,
            configFile: path.join(__dirname, '../index.js'),
            fix: 'false',
        })

        if (result?.errored) {
            const filesResult = JSON.parse(result.output || '[]') || []
            filesResult.forEach(fileResult => {
                console.log('fileResult', fileResult.warnings)
            })
            assert.ok(filesResult.length !== 0)
        }
    })

    it('Validate css-module', async() => {
        const filePaths = [path.join(__dirname, './fixtures/css-module.scss')]

        const result = await stylelint.lint({
            files: filePaths,
            configFile: path.join(__dirname, '../index.js'),
            fix: 'false',
        })

        if (result?.errored) {
            const filesResult = JSON.parse(result.output || '[]') || []
            filesResult.forEach(fileResult => {
                console.log('fileResult', fileResult.warnings)
            })
            assert.ok(filesResult.length !== 0)
        }
    })
})