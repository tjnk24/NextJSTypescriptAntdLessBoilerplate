import {
    AnyAction,
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import {createLogger} from 'redux-logger';

import reducerRegistry from './reducerRegistry';

export const combinedReducer = combineReducers(reducerRegistry.reducers);

const rootReducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
    return action.type === HYDRATE
        ? {...state, ...action.payload}
        : combinedReducer(state, action);
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: [
        createLogger({collapsed: true}),
    ],
});

export const wrapper = createWrapper(() => store);

reducerRegistry.setChangeListener(reducers => {
    store.replaceReducer(combineReducers(reducers));

    store.dispatch({type: '@@redux/RECOMBINE'});
});
