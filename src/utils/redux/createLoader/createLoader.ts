import {storeService} from '__store/storeService';

import {AsyncRequest, BaseActions} from './types';

export const createLoader = <T>(actions: BaseActions<T>, apiRequest: AsyncRequest<T>) => {
    const {pending, success, failed} = actions;

    return async () => {
        try {
            if (!storeService.store) {
                return {} as T;
            }

            storeService.store.dispatch(pending());

            const response = await apiRequest();

            storeService.store.dispatch(success(response));

            return response;
        } catch (error: unknown | any) {
            storeService.store.dispatch(failed(error?.message as string));
        }
    };
};
