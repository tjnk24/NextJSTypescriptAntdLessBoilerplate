import {withReducer} from '__utils/redux/withReducer';

import {reducers} from '../../slices';
import {UsersApiGetResponse} from '../../types';

import {onSuccess} from './preload';
import Users from './Users';

export default withReducer<UsersApiGetResponse>(Users, reducers, onSuccess);
