import React from 'react';
import { Route, IndexRoute } from 'react-router'
import App from './containers/App';
import Leaderboard from './containers/Leaderboard';
import Matches from './containers/Matches';
import Teams from './containers/Teams';
import NotFound from './components/routes/not-found';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Leaderboard} />

        <Route path="/matches" component={Matches} />
        <Route path="/teams" component={Teams} />

        <Route path="*" component={NotFound} />
    </Route>
)
