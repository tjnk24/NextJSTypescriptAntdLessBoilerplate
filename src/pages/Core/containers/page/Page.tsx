import {ConnectedRouter} from 'connected-next-router';
import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';

import {wrapper} from '__store/configureStore';
import {initialize, store} from '__store/storeService';

import TopNavigation from '../top-navigation';

const Page = ({Component, ...rest}: AppProps) => {
    const {store: wrapperStore, props} = wrapper.useWrappedStore(rest);

    !store && initialize(wrapperStore);

    return (
        <Provider store={wrapperStore}>
            <ConnectedRouter>
                <TopNavigation/>

                <Component {...props.pageProps}/>
            </ConnectedRouter>
        </Provider>
    );
};

export default Page;
