# EuroCup Round-Robin Tournament Simulator
Built on React JS

## Project description

This application was built as a front-end display of a round-robin style tournament with a EuroCup theme. 8 Teams have been preselected and randomly organized into 12 unique matches, representing 3 rounds of matches.

### UI

This application has three main sections.

#### Leaderboard
Displays the wins, losses, draws and points of each of the 8 participating teams. As the matches get their scores set, the winning teams will move up the leaderboard.

Bonus - Winning:
Have a rule for being knocked out of the tournament. Once a team reaches this condition, there should be
some indication in the UI that they are knocked out, and can play no more games. Last team standing should
win, and there should be an indication in the UI that they won the tournament.

#### Teams Search and Display
This is the part of the UI where the user can search for teams and...

Somewhere in your UI there should be a Search box. You should be able to search any team, select them, and
go to that team's page. A team's page will just be the team name and logo, and history of matches.

#### Matches (Submit Scores)
This is where the score for a game can be submitted. This is the process:

1. Click the edit button to start the score submission process.
2. Add/subtract points for each team.
3. Click the save button to end the submission process. Once precessed, the score can no longer be edited.

## Getting started
1. `npm install`
2. Launch environment:
  *  **Production**: `npm start`
  *  **Development**: `npm run dev`

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
* [redux-thunk](https://github.com/gaearon/redux-thunk) for [asynchronous actions](https://github.com/mikechabot/react-boilerplate/blob/master/src/redux/actions/thunk-action-creators.js#L21)
* [redux-logger](https://github.com/theaqua/redux-logger) for capturing actions

#### Routing
* [react-router](https://github.com/reactjs/react-router) for client-side [routing](https://github.com/mikechabot/react-boilerplate/blob/master/src/routes.js)

#### HTTP
* [Customizable](https://github.com/mikechabot/react-boilerplate/blob/master/src/services/data/ajax-service.js#L11), promise-based HTTP support via [Axios](https://github.com/mzabriskie/axios)
* Implementing [data services](https://github.com/mikechabot/react-boilerplate/blob/master/src/services/data/data-access-service.js#L29) utilize [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

#### Styling
* Supports [SCSS & SASS](http://sass-lang.com/) syntax
* Browser compatibility via [autoprefixing](https://github.com/postcss/autoprefixer)

#### Develop & Deploy
* Environmental configurations for both webpack and redux
  * **Dev** // [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) with [React Hot Loader](http://gaearon.github.io/react-hot-loader/) for live refresh. `redux-logger` enabled.
  * **Prod** // [Express](http://expressjs.com/) server with `redux-logger` disabled.
* See [here](https://github.com/mikechabot/react-boilerplate/blob/master/webpack.config.js#L69) and [here](https://github.com/mikechabot/react-boilerplate/blob/master/src/redux/store/configure-store.js#L9)

#### Testing
* Tested with [Mocha](https://mochajs.org/)
* Coverage support via [Istanbul](https://gotwarlost.github.io/istanbul/)
* [react-addons-test-utils](https://facebook.github.io/react/docs/test-utils.html) for component testing
* [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store) for Redux state testing
* [Sinon.JS](http://sinonjs.org/) for mocking, stubbing & spying


## Further improvements (given more time)
* Persistency ->
* Data types refactoring ->
*
