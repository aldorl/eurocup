import { INITIAL_STATE } from '../../common/app-const';
import {
    ADD_WIN,
    ADD_LOSE,
    ADD_DRAW
} from '../actions/types';

const teams = (state = INITIAL_STATE.teams, action) => {
    switch(action.type) {
        case ADD_WIN: {
            return {
                ...state,
                [action.team]: {
                    ...state[action.team],
                    wins: state[action.team].wins + 1,
                    points: state[action.team].points + 3
                }
            }
        }
        case ADD_LOSE: {
            return {
                ...state,
                [action.team]: {
                    ...state[action.team],
                    losses: state[action.team].losses + 1
                }
            }
        }
        case ADD_DRAW: {
            return {
                ...state,
                [action.team]: {
                    ...state[action.team],
                    draws: state[action.team].draws + 1,
                    points: state[action.team].points + 1
                }
            }
        }
        default: {
            return state;
        }
    }
};

export default teams;
