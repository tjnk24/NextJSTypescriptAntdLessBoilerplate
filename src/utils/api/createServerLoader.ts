import {AxiosError} from 'axios';

import {AsyncRequest} from '__utils/types';

import {axiosErrorToJson} from './axiosErrorToJson';

export const createServerLoader = <T>(apiRequest: AsyncRequest<T>) => {
    return async () => {
        try {
            const response = await apiRequest();

            return {props: {response}};
        } catch (error) {
            return {
                props: {
                    error: axiosErrorToJson(error as AxiosError),
                },
            };
        }
    };
};
