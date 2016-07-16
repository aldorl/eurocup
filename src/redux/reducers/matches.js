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
        status: 'scoring'
      });

      return [
        ...state.slice(0, action.matchIndex),
        selectedMatch,
        ...state.slice(action.matchIndex + 1)
      ];
    }

    case INCREMENT_SCORE: {
      let selectedMatch = state[action.matchIndex];

      let teamScores = {
          ...selectedMatch.teamScores,
          [action.teamKey]: selectedMatch.teamScores[action.teamKey] + 1
      };

      selectedMatch = Object.assign({}, selectedMatch, {
        teamScores: teamScores
      });

      return [
        ...state.slice(0, action.matchIndex),
        selectedMatch,
        ...state.slice(action.matchIndex + 1)
      ];
    }

    case DECREMENT_SCORE: {
      let selectedMatch = state[action.matchIndex];

      if (selectedMatch.teamScores[action.teamKey] <= 0) {
        return state;
      }

      let teamScores = {
          ...selectedMatch.teamScores,
          [action.teamKey]: selectedMatch.teamScores[action.teamKey] - 1
      };

      selectedMatch = Object.assign({}, selectedMatch, {
        teamScores: teamScores
      });

      return [
        ...state.slice(0, action.matchIndex),
        selectedMatch,
        ...state.slice(action.matchIndex + 1)
      ];
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
