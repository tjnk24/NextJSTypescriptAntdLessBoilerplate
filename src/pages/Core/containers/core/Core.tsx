import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';

import {wrapper as storeWrapper} from '__store/configureStore';

import Preloader from '../preloader';
import TopNavigation from '../top-navigation';

import {root, wrapper} from './Core.module.less';

const Core = ({Component, ...propsRest}: AppProps) => {
    const {props, store} = storeWrapper.useWrappedStore(propsRest);

    return (
        <Provider store={store}>
            <div className={root}>
                <TopNavigation/>

                <div className={wrapper}>
                    <Preloader/>

                    <Component {...props.pageProps}/>
                </div>
            </div>
        </Provider>
    );
};

export default Core;
