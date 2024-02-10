import axios from 'axios';

import {NEXT_PUBLIC_BACKEND_URL} from '__config';

export const configuredApiInstance = axios.create({
    baseURL: NEXT_PUBLIC_BACKEND_URL,
    timeout: 20000,
});
