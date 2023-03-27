import {withReducer} from '__utils/redux/withReducer';

import Page from './Page';
import {onSuccess} from './preload';
import {reducers} from '../../slices';
import {UsersApiGetResponse} from '../../types';

export default withReducer<UsersApiGetResponse>(Page, reducers, onSuccess);
