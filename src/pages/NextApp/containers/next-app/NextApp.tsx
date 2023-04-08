import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';

import ErrorBoundary from '__components/ErrorBoundary';
import {wrapper as storeWrapper} from '__store/configureStore';

import GlobalHead from '../global-head';
import Preloader from '../preloader';
import TopNavigation from '../top-navigation';

import {root, wrapper} from './NextApp.module.less';

const NextApp = ({Component, ...propsRest}: AppProps) => {
    const {props, store} = storeWrapper.useWrappedStore(propsRest);

    return (
        <Provider store={store}>
            <GlobalHead/>

            <div className={root}>
                <TopNavigation/>

                <div className={wrapper}>
                    <Preloader/>

                    <ErrorBoundary>
                        <Component {...props.pageProps}/>
                    </ErrorBoundary>
                </div>
            </div>
        </Provider>
    );
};

export default NextApp;
