import { INITIAL_STATE } from '../../common/app-const';
import {
  EDIT_MATCH,
  INCREMENT_SCORE,
  DECREMENT_SCORE,
  SAVE_MATCH
} from '../actions/types';

const matches = (state = INITIAL_STATE.matches, action) => {
  switch(action.type) {
    case EDIT_MATCH: {
      let selectedMatch = Object.assign({}, state[action.matchIndex], {
        status: 'waiting for score'
      });

      return [
        ...state.slice(0, action.matchIndex),
        selectedMatch,
        ...state.slice(action.matchIndex + 1)
      ];
    }

    case INCREMENT_SCORE: {
      console.log("Incrementing score");
      console.log(action);
      return state;
    }

    case DECREMENT_SCORE: {
      console.log("Decrementing score");
      console.log(action);
      return state;
    }

    case SAVE_MATCH: {
      let selectedMatch = Object.assign({}, state[action.matchIndex], {
        status: 'played'
      });

      return [
        ...state.slice(0, action.matchIndex),
        selectedMatch,
        ...state.slice(action.matchIndex + 1)
      ];
    }

    default: {
      return state;
    }
  }
};

export default matches;
