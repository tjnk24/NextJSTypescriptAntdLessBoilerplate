import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';

import {wrapper} from '__store/configureStore';

import TopNavigation from '../top-navigation';

const Page = ({Component, ...propsRest}: AppProps) => {
    const {props, store} = wrapper.useWrappedStore(propsRest);

    return (
        <Provider store={store}>
            <TopNavigation/>

            <Component {...props.pageProps}/>
        </Provider>
    );
};

export default Page;
