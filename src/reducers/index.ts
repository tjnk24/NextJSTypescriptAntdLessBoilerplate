import {connectRouter} from 'connected-react-router';

import {history, RouterHistory} from '__store/history';

import {TestGlobalCounterSlice, testGlobalCounterSlice} from './testGlobalCounterSlice';

export type BaseStore = {
    router: RouterHistory;
    testGlobalCounter: TestGlobalCounterSlice;
}

export const reducers = {
    router: connectRouter(history),
    testGlobalCounter: testGlobalCounterSlice.reducer,
};
