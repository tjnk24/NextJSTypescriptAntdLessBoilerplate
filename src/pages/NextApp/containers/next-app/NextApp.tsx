import {ConfigProvider} from 'antd';
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
            <ConfigProvider theme={{hashed: false}}>
                <ErrorBoundary>
                    <GlobalHead/>

                    <AppLayout>
                        <Component {...props.pageProps}/>
                    </AppLayout>
                </ErrorBoundary>
            </ConfigProvider>
        </Provider>
    );
};

export default NextApp;
