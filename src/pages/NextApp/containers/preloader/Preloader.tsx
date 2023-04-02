import {Spin} from 'antd';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

import {preloader} from './Preloader.module.less';

const Preloader = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const handleStart = (url: string) => {
        url !== router.asPath && setLoading(true);
    };

    const handleComplete = () => {
        setLoading(false);
    };

    useEffect(() => {
        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    });

    return loading && (
        <div className={preloader}>
            <Spin size="large"/>
        </div>
    );
};

export default Preloader;
