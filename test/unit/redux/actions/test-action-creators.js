import expect from 'expect';
import configureStore from 'redux-mock-store';
import * as actionCreators from '../../../../src/redux/actions/action-creators';
import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from  '../../../../src/redux/actions/types';

describe('Action Creators', () => {
    describe('Generic', () => {
        describe('invoking the makeActionCreator thunk', () => {

            let type, key1, key2, data1, data2;
            beforeEach(() => {
                type = 'FooType';
                key1 = 'key1';
                key2 = 'key2';
                data1 = 'data1';
                data2 = 'data2';
            });

            it('should return a function', () => {
                expect(
                    actionCreators.makeActionCreator(type, key1, key2)
                ).toBeA('function');
            });

            it('should throw an error if a type is not passed', () => {
                expect(() => {
                        actionCreators.makeActionCreator()
                }).toThrow('Type cannot be null/undefined');
            });

            describe('invoking the returned action creator', () => {
                it('should return an action containing the correct type and keys', () => {

                    const expectedAction = {
                        type,
                        key1: data1,
                        key2: data2
                    };

                    expect(
                        actionCreators.makeActionCreator(
                            type, key1, key2
                        )(data1, data2)
                    ).toEqual(expectedAction);
                });
            });

        });
    });
});
