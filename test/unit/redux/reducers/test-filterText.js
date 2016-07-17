import expect from 'expect';
import reducer from '../../../../src/redux/reducers/filterText';
import { INITIAL_STATE } from '../../../../src/common/app-const';

const defaultState = INITIAL_STATE.filterText;

describe('Filter Text Reducer', () => {
    describe('a call to the reducer', () => {
        describe('with an undefined state', () => {
            it('should return the default state', () => {
                expect(
                    reducer(undefined, defaultState)
                ).toEqual(defaultState);
            });
        });
    });
});
