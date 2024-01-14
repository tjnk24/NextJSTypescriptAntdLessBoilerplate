import {notification} from 'antd';
import {AxiosError} from 'axios';

import {
    CustomErrors,
    Error400Response,
    ResponseErrorhandlerOptions,
} from './types';

const makeDefaultErrorsActions = (error: any): CustomErrors => ({
    400: {
        action: async () => {
            const {message} = await error.json() as Error400Response;

            notification.error({message});
        },
    },
    404: {
        action: () => notification.error({message:'Not Found'}),
    },
});

export const responseErrorHandler = (error: any, options?: ResponseErrorhandlerOptions) => {
    if (error instanceof AxiosError) {
        const {customErrors} = options || {};

        const errors: CustomErrors = {...makeDefaultErrorsActions(error), ...customErrors};
        const currentError = errors?.[error.response.status];

        if (currentError) {
            currentError.action(error);
        } else {
            notification.error({message: 'Something went wrong'});
        }
    }

    // eslint-disable-next-line no-console
    console.error('error', error);
};
