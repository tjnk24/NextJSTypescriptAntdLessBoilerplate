import {
    AnyAction,
    bindActionCreators,
    CombinedState,
} from '@reduxjs/toolkit';
import {ToolkitStore} from '@reduxjs/toolkit/dist/configureStore';

import {BaseState} from '__reducers';

import {actions} from './actions';

type BaseStore = ToolkitStore<CombinedState<BaseState>, AnyAction>

export let store: BaseStore;
export let commonActions: typeof actions;

export const initialize = (storeValue: BaseStore) => {
    store = storeValue;

    commonActions = bindActions(actions);
};

export const bindActions = <A>(actions: A): A => {
    return Object.keys(actions).reduce((result, key) => {
        const subObj = actions[key];

        return {
            ...result,
            [key]: typeof subObj === 'function'
                ? bindActionCreators(subObj, store.dispatch as never)
                : bindActions(subObj),
        };
    }, {} as A);
};
