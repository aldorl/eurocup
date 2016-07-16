import { INITIAL_STATE } from '../../common/app-const';
import {
    RESET_TEAMS
} from '../actions/types';

const teams = (state = INITIAL_STATE.teams, action) => {
    switch(action.type) {
        case RESET_TEAMS: {
            console.log(action);
            return {
                ...state,
                [action.team]: {
                    ...state[action.team],
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
