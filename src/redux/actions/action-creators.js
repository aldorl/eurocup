import {
  ADD_WIN,
  ADD_LOSE,
  ADD_DRAW,
  EDIT_MATCH,
  INCREMENT_SCORE,
  DECREMENT_SCORE,
  SAVE_MATCH
} from './types';

export const addWin         = makeActionCreator(ADD_WIN, 'team');
export const addLose        = makeActionCreator(ADD_LOSE, 'team');
export const addDraw        = makeActionCreator(ADD_DRAW, 'team');
export const editMatch      = makeActionCreator(EDIT_MATCH, 'matchIndex');
export const incrementScore = makeActionCreator(INCREMENT_SCORE, 'matchIndex', 'teamKey');
export const decrementScore = makeActionCreator(DECREMENT_SCORE, 'matchIndex', 'teamKey');
export const saveMatch      = makeActionCreator(SAVE_MATCH, 'matchIndex');

/**
 * To reduce boilerplate code, we can utilize generic function to generate
 * action creators based on input arguments. The first argument is always
 * treated as the Redux action type; all other passed arguments are treated
 * as property on the action object itself.
 *
 *   Example: const myActionType = 'DO_IT';
 *            const doItAction = makeActionCreator(myActionType, 'data');
 *            doItAction(123); --> { type: "DO_IT", data: 123 }
 */
export function makeActionCreator(type, ...keys) {
    if (!type) throw new Error('Type cannot be null/undefined');
    return function(...args) {
        let action = { type };
        keys.forEach((arg, index) => {
            action[keys[index]] = args[index]
        });
        return action;
    }
}
