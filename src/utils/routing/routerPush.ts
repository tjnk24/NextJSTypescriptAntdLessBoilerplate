import isEmpty from 'lodash/isEmpty';
import queryString from 'query-string';

import {storeService} from '__store/storeService';

import {RouterPushData} from './types';

const push = (path: string) => {
    storeService.commonActions.router.push(path);
};

export const routerPush = <T>(
    {path, queries}: RouterPushData<T>,
    makeHref?: boolean,
) => {
    const url = isEmpty(queries) ? path : `${path}?${queryString.stringify(queries, {skipEmptyString: true, skipNull: true})}`;

    if (makeHref) {
        return url;
    }

    push(url);
};
