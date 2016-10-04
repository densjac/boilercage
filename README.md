# BoilerCage

Small boilerplate for React + Redux + Webpack + ReactHMR + SemanticUI + Koa.

Based on [this tutorial](http://blog.joanboixados.com/building-a-boilerplate-for-a-koa-redux-react-application-including-webpack-mocha-and-sass/), updated for working as Sep 2016.

## TODO:

- Add redux example

## Requirements

- NodeJS >= v6.6.0
- npm >= 30.10.7

## Installation

For development:

First:
```
npm install
```
When being asked by `semantic-ui`'s install script will tell that ` It looks like you have a semantic.json file already` you must select `Yes, extend my current setting`, after that select `Automatic (Use defaults locations and all component`. Semantic instalation will detect you are using NPM and ask you for your project folder, and if that is correct you should put `Yes` and then give location, enter `app/semantic`.

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

For running a webpack development server just

```
npm start
```
and point your browser to `localhost:8080`.

Due to `semantic-ui` way to refer assets, Webpack will interpret them as a module but it won't find a way to load it (as explained in this [comment](https://github.com/Semantic-Org/Semantic-UI/issues/3533#issuecomment-186520229)).  Until they change the urls in a webpack friendly way, we can only load the specific semantic modules we're using in the component, for example:

```jsx
import React from 'react';

import '../../semantic/dist/components/button.css';

export default class Todo extends React.Component {
    render() {
        return <button className="ui button">Follow </button>;
    }
}
```


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
