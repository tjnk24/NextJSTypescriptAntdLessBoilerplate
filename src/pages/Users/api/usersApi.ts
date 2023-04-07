import {configuredApiInstance} from '__utils/api/apiTransport';

import {UsersApiGetResponse} from '../types';

import {API_ENDPOINT} from './consts';
import {UsersApiQueryParamsGet} from './types';

class UsersApi {
    get = async (params?: UsersApiQueryParamsGet) =>
        configuredApiInstance.get<UsersApiGetResponse>(API_ENDPOINT, {params})
            .then(({data}) => data);
}

export const apiInstance = new UsersApi();
