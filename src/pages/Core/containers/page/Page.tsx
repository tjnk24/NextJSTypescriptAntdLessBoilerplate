import {ConnectedRouter} from 'connected-next-router';
import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';

import {useConfiguredStore} from '__store/configureStore';

import TopNavigation from '../top-navigation';

const Page = ({Component, ...propsRest}: AppProps) => {
    const {props, store} = useConfiguredStore(propsRest);

    return (
        <Provider store={store}>
            <ConnectedRouter>
                <TopNavigation/>

                <Component {...props.pageProps}/>
            </ConnectedRouter>
        </Provider>
    );
};

export default Page;
