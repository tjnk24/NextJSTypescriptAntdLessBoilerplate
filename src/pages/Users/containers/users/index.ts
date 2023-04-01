import {withReducer} from '__utils/redux/withReducer';

import {onSuccess} from './preload';
import Users from './Users';
import {reducers} from '../../slices';
import {UsersApiGetResponse} from '../../types';

export default withReducer<UsersApiGetResponse>(Users, reducers, onSuccess);
