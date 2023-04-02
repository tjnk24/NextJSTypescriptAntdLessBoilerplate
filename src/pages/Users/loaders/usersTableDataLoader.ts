import {createLoader} from '__utils/redux/createLoader';

import {apiInstance} from '../api/usersApi';
import {tableDataSlice} from '../slices/tableDataSlice';
import {UsersApiGetResponse} from '../types';

export const usersTableDataLoader = createLoader<UsersApiGetResponse>(tableDataSlice.actions, apiInstance.get);
