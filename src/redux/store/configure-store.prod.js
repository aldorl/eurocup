import { createStore } from 'redux';
import rootReducer from '../reducers/root-reducer';

/**
 * Production Redux store
 * @param  {object} initialState    Initial state of the Redux store
 * @return {object}                 Redux store
 */
export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState
    );
};
