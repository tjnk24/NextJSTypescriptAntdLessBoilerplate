import {configuredApiInstance} from '__utils/api/apiTransport';

import {API_ENDPOINT} from './consts';
import {UsersApiQueryParamsGet} from './types';
import {UsersApiGetResponse} from '../types';

class UsersApi {
    get = async (params?: UsersApiQueryParamsGet) =>
        configuredApiInstance.get<UsersApiGetResponse>(API_ENDPOINT, {params})
            .then(({data}) => data);
}

export const apiInstance = new UsersApi();
