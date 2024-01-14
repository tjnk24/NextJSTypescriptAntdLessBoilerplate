import {store} from '__store/configureStore';
import {responseErrorHandler} from '__utils/api/responseErrorHandler';

import {AsyncRequest} from '../../types';

import {BaseActions} from './types';

export const createLoader = <T>(actions: BaseActions<T>, apiRequest: AsyncRequest<T>) => {
    const {pending, success, failed} = actions;

    return async () => {
        try {
            store.dispatch(pending());

            const response = await apiRequest();

            store.dispatch(success(response));

            return response;
        } catch (error: any) {
            store.dispatch(failed(error?.message as string));

            responseErrorHandler(error);

            return error;
        }
    };
};
