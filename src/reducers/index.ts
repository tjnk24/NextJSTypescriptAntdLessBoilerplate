import {routerReducer, RouterState} from 'connected-next-router';

import {TestGlobalCounterSlice, testGlobalCounterSlice} from './testGlobalCounterSlice';

export type BaseState = {
    router: RouterState;
    testGlobalCounter: TestGlobalCounterSlice;
}

export const reducers = {
    router: routerReducer,
    testGlobalCounter: testGlobalCounterSlice.reducer,
};
