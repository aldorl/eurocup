import { INITIAL_STATE } from '../../common/app-const';
import {
  UPDATE_DISPLAY,
  CLEAR_DISPLAY
} from '../actions/types';

const filterText = (state = INITIAL_STATE.display, action) => {
  switch(action.type) {
    case UPDATE_DISPLAY: {
      return {
        selection: action.selectedTeam,
        matches: action.teamMatches
      };
    }
    case CLEAR_DISPLAY: {
      return {selection: '', matches: []};
    }
    default: {
      return state;
    }
  }
};

export default filterText;
