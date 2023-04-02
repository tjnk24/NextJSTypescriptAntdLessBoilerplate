import axios from 'axios';

import config from '__config';

export const configuredApiInstance = axios.create({
    baseURL: config.NEXT_PUBLIC_BACKEND_URL,
    timeout: 20000,
});
