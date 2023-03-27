import {testGlobalCounterSlice} from '__reducers/testGlobalCounterSlice';

import {bindActions} from './storeService';

export const commonActions = bindActions({
    testGlobalCounter: testGlobalCounterSlice.actions,
});
