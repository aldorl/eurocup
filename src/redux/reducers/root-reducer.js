import { combineReducers } from 'redux';
import teams from './teams';
import matches from './matches';
import ranking from './ranking';
import filterText from './filterText';
import display from './display';

export default combineReducers({
    teams,
    matches,
    ranking,
    filterText,
    display
});
