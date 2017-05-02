if (process.env.NODE_ENV === 'production') {
  module.exports = require('./scripts/webpack/config.prod')
} else {
  module.exports = require('./scripts/webpack/config.dev')
}
