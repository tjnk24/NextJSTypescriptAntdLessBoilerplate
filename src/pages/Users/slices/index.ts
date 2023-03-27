import {bindActions} from '__store/storeService';

import {tableDataSlice} from './tableDataSlice';
import {USERS_TABLE_DATA} from '../consts';

export const reducers = {
    [USERS_TABLE_DATA]: tableDataSlice.reducer,
};

export const actions = bindActions({
    [USERS_TABLE_DATA]: tableDataSlice.actions,
});
