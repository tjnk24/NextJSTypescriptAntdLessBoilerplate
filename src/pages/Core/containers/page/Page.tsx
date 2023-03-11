import type {AppProps} from 'next/app';

import TopNavigation from '../top-navigation';

const Page = ({Component, pageProps}: AppProps) => {
    return (
        <div>
            <TopNavigation/>

            <Component {...pageProps}/>
        </div>
    );
};

export default Page;
