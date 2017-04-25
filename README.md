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
[Dockerfile](client/Dockerfile) (`node:6.10.2-slim`)

- bulid
    - Yarn 0.23.2
    - Babel 6.21.x
    - Webpack 2.4.x
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
There are `docker-compose` command wrappers under `./script`.

Command examples:

```
# `bundle install`, `yarn` and `flow-typed install` are run automatically just after containers started

# Run rails server(puma) and watch client scripts/styles
$ ./script/server

# Run `bundle install` manually
$ ./script/exec bundle

# Add node packages
$ ./script/yarn add <package>

# Migrate db
$ ./script/rails db:migrate

# Run server-side tests
$ ./script/rspec

# Run client-side tests
$ ./script/yarn test
```


## License

[MIT License][license].


## Author

Masayuki Izumi ([izumin5210](https://github.com/izumin5210))

[license]: https://izumin.mit-license.org/2017
