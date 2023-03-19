import queryString from 'query-string';

import {commonActions} from '__store/storeService';
import {isEmpty} from '__utils/isEmpty';

import {RouterPushData} from './types';

const push = (path: string) => {
    commonActions.router.push(path);
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
