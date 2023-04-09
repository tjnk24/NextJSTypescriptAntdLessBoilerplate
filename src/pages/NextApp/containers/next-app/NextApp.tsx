import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';

import ErrorBoundary from '__components/ErrorBoundary';
import {wrapper as storeWrapper} from '__store/configureStore';

import AppLayout from '../app-layout';
import GlobalHead from '../global-head';

const NextApp = ({Component, ...propsRest}: AppProps) => {
    const {props, store} = storeWrapper.useWrappedStore(propsRest);

    return (
        <Provider store={store}>
            <ErrorBoundary>
                <GlobalHead/>

                <AppLayout>
                    <Component {...props.pageProps}/>
                </AppLayout>
            </ErrorBoundary>
        </Provider>
    );
};

export default NextApp;
