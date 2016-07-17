# EuroCup Round-Robin Tournament Simulator
Built on React JS

## Project description

This application was built as a front-end display of a round-robin style tournament with a EuroCup theme. 8 Teams have been preselected and randomly organized into 12 unique matches, representing 3 rounds of matches.

### UI

This application has three main sections.

#### Leaderboard
Displays the wins, losses, draws and points of each of the 8 participating teams. As the matches get their scores set, the winning teams will move up the leaderboard.

#### Teams Search and Display
This is the part of the UI where the user can search for teams and select them to view their history of matches, alongside a nice display of their logo.

#### Matches (Submit Scores)
This is where the score for a game can be submitted. This is the process:

1. Click the edit button to start the score submission process.
2. Add/subtract points for each team.
3. Click the save button to end the submission process. Once submitted, the score can no longer be edited.

## Getting started
1. `npm install`
2. Launch environment:
  *  **Development**: `npm run dev`
3. Visit at http://localhost:3060/

#### Test Commands
* `npm test`: Shortcut for `test:coverage`
* `npm run test:unit`: Run unit tests located in `test/unit/**/*.js`
* `npm run test:integration`: Run integration tests location in `test/integration/**/*.js`
* `npm run test:coverage`: Run coverage for unit and integration tests

## Tools used

#### Build Process
 * Built with [webpack](https://webpack.github.io/)
 * Supports ES6 via [Babel](https://babeljs.io/) transpiling

#### State Management
* [redux](http://redux.js.org/index.html) for state management
* [react-redux](https://github.com/reactjs/react-redux) for stateful component bindings
* [redux-logger](https://github.com/theaqua/redux-logger) for capturing actions

#### Routing
* [react-router](https://github.com/reactjs/react-router) for client-side routing

#### Styling
* Supports [SCSS & SASS](http://sass-lang.com/) syntax
* Browser compatibility via [autoprefixing](https://github.com/postcss/autoprefixer)

#### Develop
* Environmental configurations for both webpack and redux
  * **Dev** // [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) with [React Hot Loader](http://gaearon.github.io/react-hot-loader/) for live refresh. `redux-logger` enabled.

#### Testing
* Tested with [Mocha](https://mochajs.org/)
* Coverage support via [Istanbul](https://gotwarlost.github.io/istanbul/)
* [react-addons-test-utils](https://facebook.github.io/react/docs/test-utils.html) for component testing
* [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store) for Redux state testing
* [Sinon.JS](http://sinonjs.org/) for mocking, stubbing & spying


## Further improvements (given more time)
* Persistency -> Currently the state of the app is lost on refresh. Local persistency in the browser could be added next.
* Data types refactoring -> Currently the teams are stored as a hash of objects, leading to some rather inefficient data handling. This could be changed to an array of objects and other states/reducers could be merged together as a result.
* Intergation tests -> More robust integrations tests could be implemented.
* Styling -> Extract certain inline styling to the scss folder
