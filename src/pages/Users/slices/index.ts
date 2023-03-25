
import {storeService} from '__store/storeService';

import {tableDataSlice} from './tableDataSlice';
import {USERS_TABLE_DATA} from '../consts';

export const reducers = {
    [USERS_TABLE_DATA]: tableDataSlice.reducer,
};

export const actions = storeService.bindActions({
    [USERS_TABLE_DATA]: tableDataSlice.actions,
});
