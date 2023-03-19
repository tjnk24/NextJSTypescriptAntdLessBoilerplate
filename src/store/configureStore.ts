import {
    AnyAction,
    CombinedState,
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';
import {createRouterMiddleware, initialRouterState} from 'connected-next-router';
import {AppContext} from 'next/app';
import Router from 'next/router';
import {
    Context,
    createWrapper,
    HYDRATE,
} from 'next-redux-wrapper';
import {createLogger} from 'redux-logger';

import {BaseState, reducers} from '__reducers';

import {CommonStore} from './types';

export const rootReducer = combineReducers(reducers);

const reducer = (state: CombinedState<BaseState>, action: AnyAction) => {
    if (action.type === HYDRATE) {
        const nextState: CommonStore = {
            ...state,
            ...action.payload,
        };

        if (window && state?.router) {
            nextState.router = state.router;
        }

        return nextState;
    }

    return rootReducer(state, action);
};

export const initStore = (context: Context) => {
    const {asPath} = (context as AppContext)?.ctx || Router?.router || {};

    let preloadedState: Pick<BaseState, 'router'>;

    if (asPath) {
        preloadedState = {
            router: initialRouterState(asPath),
        };
    }

    return configureStore({
        reducer,
        preloadedState,
        middleware: [
            createRouterMiddleware(),
            createLogger({collapsed: true}),
        ],
    });
};

export const wrapper = createWrapper(initStore);
