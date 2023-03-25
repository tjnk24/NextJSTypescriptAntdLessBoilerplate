import {BaseState} from '__reducers';

import {storeService} from './storeService';

export enum Status {
    Success = 'success',
    Pending = 'pending',
    Failed = 'failed',
}

export type StoreState<D> = {
    status?: Status;
    error?: string;
    data?: D;
}

export type CommonStore = ReturnType<typeof storeService.store.getState> & BaseState;
