import {AxiosError} from 'axios';

export const axiosErrorToJson = (error: AxiosError) => JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error)));
