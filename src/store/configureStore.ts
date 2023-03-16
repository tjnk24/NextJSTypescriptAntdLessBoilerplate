import {
    AnyAction,
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';
import {routerMiddleware} from 'connected-react-router';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import {createLogger} from 'redux-logger';

import {history} from '__store/history';

import reducerRegistry from './reducerRegistry';

export const combinedReducer = combineReducers(reducerRegistry.reducers);

const rootReducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
    return action.type === HYDRATE
        ? {...state, ...action.payload}
        : combinedReducer(state, action);
};

const logger = createLogger({collapsed: true});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [
        routerMiddleware(history),
        logger,
    ],
});

export const wrapper = createWrapper(() => store);

reducerRegistry.setChangeListener(reducers => {
    store.replaceReducer(combineReducers(reducers));

    store.dispatch({type: '@@redux/RECOMBINE'});
});
