const path = require('path')

const env = process.env.NODE_ENV || 'development'
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 8000

const root = path.resolve(__dirname, '..', '..')
const src = path.resolve(root, 'src')
const dist = path.resolve(root, 'dist')
const entry = 'assets'

const publicPath = env !== 'production' ? `http://${host}:${port}/` : `/${entry}/`
const outputPath = path.resolve(dist, entry)

module.exports = {
  host,
  port,
  root,
  src,
  dist,
  publicPath,
  outputPath,
}
