# BoilerCage

Small boilerplate for React + Redux + Webpack + ReactHMR + SemanticUI + Koa.

Based on [this tutorial](http://blog.joanboixados.com/building-a-boilerplate-for-a-koa-redux-react-application-including-webpack-mocha-and-sass/), updated for working as Sep 2016.

## Requirements

- NodeJS >= v6.6.0
- npm >= 30.10.7

## Installation

For development:

First:
```
npm install
```
When being asked by `semantic-ui`'s install script to give location, enter `app/semantic`.

Then, we should build `semantic-ui` dist files:

```
cd app/semantic
../../node_modules/gulp/bin/gulp.js build
```

To check if everything builds correctly, go back to project root directory, and run

```
npm run build
```

## Usage

TODO: Write usage instructions

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

TODO: Write history

## Credits

TODO: Write credits

## License

TODO: Write license
