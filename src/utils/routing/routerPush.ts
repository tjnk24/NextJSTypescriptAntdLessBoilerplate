import isEmpty from 'lodash/isEmpty';
import Router from 'next/router';
import queryString from 'query-string';

import {RouterPushData} from './types';

const push = (path: string) => {
    void Router.push(path);
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
