import { INITIAL_STATE } from '../../common/app-const';
import {
  UPDATE_RANKING
} from '../actions/types';

const ranking = (state = INITIAL_STATE.ranking, action) => {
  switch(action.type) {
    case UPDATE_RANKING: {
      let homeTeam = state.filter(t => t.team === action.homeTeamKey);
      homeTeam = {...homeTeam[0], points: homeTeam[0].points + action.homeTeamPoints};

      let awayTeam = state.filter(t => t.team === action.awayTeamKey);
      awayTeam = {...awayTeam[0], points: awayTeam[0].points + action.awayTeamPoints};

      let newState = state.filter(t => (
        t.team !== action.homeTeamKey && t.team !== action.awayTeamKey
      ));

      return [
        ...newState,
        homeTeam,
        awayTeam
      ];
    }
    default: {
      return state;
    }
  }
};

export default ranking;
