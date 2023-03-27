import {createStandardSlice} from '__utils/redux/createStandardSlice';

import {USERS_TABLE_DATA} from '../consts';
import {UsersApiGetResponse} from '../types';

export const tableDataSlice = createStandardSlice<UsersApiGetResponse>(USERS_TABLE_DATA);
