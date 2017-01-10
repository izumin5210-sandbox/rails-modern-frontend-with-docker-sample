# Rails and Modern-Frontend Stack with Docker
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)][license]

## Features
### Server
[Dockerfile](Dockerfile) (`ruby:2.4.0-alpine`)

- Ruby 2.4.0
- Ruby on Rails 5.0.x
- RSpec 3.5.x
- Rubocop / Meowcop
- PostgreSQL 9.6.1


### Client
[Dockerfile](client/Dockerfile) (`node:6.9.4`)

- bulid
    - Yarn 0.18.1
    - Babel 6.21.x
    - Webpack 2.2.x
- JS
    - React 15.4.x
    - Mocha + power-assert ( + testdouble.js )
    - ESLint 3.13.x
    - Flow 0.37.x
    - unassert
- CSS
    - PostCSS 5.2.x
    - stylelint


## Usage
Command examples:

```
# Run rails server(puma) and watch client scripts/styles
$ docker-compose up [--build]

# Run `bundle install`
$ docker-compose run --rm puma bundle install

# Add node packages
$ docker-compose run --rm yarn yarn add <package>

# Migrate db
$ docker-compose run --rm puma rails db:migrate

# Run server-side tests
$ docker-compose run --rm puma rspec

# Run client-side tests
$ docker-compose run --rm yarn yarn test
```


## License

[MIT License][license].


## Author

Masayuki Izumi ([izumin5210](https://github.com/izumin5210))

[license]: https://izumin.mit-license.org/2017
