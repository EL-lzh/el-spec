const path = require('path')
const requireAll = require('require-all')

exports.rules = requireAll({
  dirname: path.join(__dirname, 'rules'),
})

exports.configs = requireAll({
  dirname: path.join(__dirname, 'configs'),
})

exports.processors = {
  '.json': {
    preprocess(text) {
      return [`module.exports = ${text}`]
    }
  }
}