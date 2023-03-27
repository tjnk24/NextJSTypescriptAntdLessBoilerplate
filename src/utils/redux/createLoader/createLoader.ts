import {store} from '__store/configureStore';

import {BaseActions} from './types';
import {AsyncRequest} from '../../types';

export const createLoader = <T>(actions: BaseActions<T>, apiRequest: AsyncRequest<T>) => {
    const {pending, success, failed} = actions;

    return async () => {
        try {
            store.dispatch(pending());

            const response = await apiRequest();

            store.dispatch(success(response));

            return response;
        } catch (error: unknown | any) {
            store.dispatch(failed(error?.message as string));
        }
    };
};
