import {
    AnyAction,
    bindActionCreators,
    CombinedState,
    combineReducers,
} from '@reduxjs/toolkit';
import {ToolkitStore} from '@reduxjs/toolkit/dist/configureStore';

import {BaseState} from '__reducers';

import {actions} from './actions';
import reducerRegistry from './reducerRegistry';

type BaseStore = ToolkitStore<CombinedState<BaseState>, AnyAction>;

class StoreService {
    store: BaseStore;

    commonActions: typeof actions;

    public initialize = (store: BaseStore) => {
        this.store = store;

        this.commonActions = this.bindActions(actions);

        reducerRegistry.setChangeListener(reducers => {
            this.store.replaceReducer(combineReducers(reducers));

            this.store.dispatch({type: '@@redux/RECOMBINE'});
        });
    };

    public bindActions = <A>(actions: A): A => {
        if (!this.store) {
            return {} as A;
        }

        return Object.keys(actions).reduce((result, key) => {
            const subObj = actions[key];
            return {
                ...result,
                [key]: typeof subObj === 'function'
                    ? bindActionCreators(subObj, this.store.dispatch as never)
                    : this.bindActions(subObj),
            };
        }, {} as A);
    };
}

export const storeService = new StoreService();
