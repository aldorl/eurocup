import { combineReducers } from 'redux';
import model from './model';
import counter from './counter';
import teams from './teams';
import matches from './matches';

export default combineReducers({
    model,
    counter,
    teams,
    matches
});
