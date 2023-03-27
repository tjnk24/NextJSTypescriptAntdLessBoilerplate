import {TestGlobalCounterSlice, testGlobalCounterSlice} from './testGlobalCounterSlice';

export type BaseState = {
    testGlobalCounter: TestGlobalCounterSlice;
}

export const reducers = {
    testGlobalCounter: testGlobalCounterSlice.reducer,
};
