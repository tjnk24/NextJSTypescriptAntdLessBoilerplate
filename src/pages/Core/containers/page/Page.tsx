import type {AppProps} from 'next/app';
import {Provider} from 'react-redux';

import {wrapper} from '__store/configureStore';

import TopNavigation from '../top-navigation';

const Page = ({Component, ...rest}: AppProps) => {
    const {store, props} = wrapper.useWrappedStore(rest);

    return (
        <Provider store={store}>
            <div>
                <TopNavigation/>

                <Component {...props.pageProps}/>
            </div>
        </Provider>
    );
};

export default Page;
