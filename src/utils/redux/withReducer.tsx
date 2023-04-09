import {ComponentType, useEffect} from 'react';

import reducerRegistry from '__store/reducerRegistry';
import {RegistryReducers} from '__store/reducerRegistry/types';

import {ServerSideProps} from '../../store/types';

export const withReducer = <T,>(
    Component: ComponentType<ServerSideProps<T>>,
    reducers: RegistryReducers,
    onSuccess?: (props: ServerSideProps<T>) => void,
) => {
    return (props: ServerSideProps<T>) => {
        useEffect(() => {
            reducerRegistry.register(reducers);

            onSuccess && onSuccess(props);

            return () => {
                reducerRegistry.unregister(reducers);
            };
        }, []);

        return <Component {...props}/>;
    };
};
