import {routerActions} from 'connected-next-router';

import {testGlobalCounterSlice} from '__reducers/testGlobalCounterSlice';

export const actions = {
    router: routerActions,
    testGlobalCounter: testGlobalCounterSlice.actions,
};
