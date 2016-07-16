import { combineReducers } from 'redux';
import teams from './teams';
import matches from './matches';

export default combineReducers({
    teams,
    matches
});
