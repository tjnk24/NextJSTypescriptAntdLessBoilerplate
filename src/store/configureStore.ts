import {
    PayloadAction,
    combineReducers,
    configureStore,
    Middleware,
} from '@reduxjs/toolkit';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import {createLogger} from 'redux-logger';

import reducerRegistry from './reducerRegistry';

export const combinedReducer = combineReducers(reducerRegistry.reducers);

const rootReducer = (state: ReturnType<typeof combinedReducer>, action: PayloadAction<object>) => {
    return action.type === HYDRATE
        ? {...state, ...action.payload}
        : combinedReducer(state, action);
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
        const logger = createLogger({collapsed: true}) as Middleware;

        return getDefaultMiddleware().concat(logger);
    },
});

export const wrapper = createWrapper(() => store);

reducerRegistry.setChangeListener(reducers => {
    store.replaceReducer(combineReducers(reducers));

    store.dispatch({type: '@@redux/RECOMBINE'});
});
