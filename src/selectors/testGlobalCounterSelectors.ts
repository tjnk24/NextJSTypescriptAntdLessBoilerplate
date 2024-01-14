import {createSelector} from 'reselect';

import {CommonStore} from '__store/types';

export const testGlobalCounterCountSelector = createSelector(
    (state: CommonStore) => state.testGlobalCounter,
    ({count}) => count,
);
