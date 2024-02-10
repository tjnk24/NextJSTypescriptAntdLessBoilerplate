import Head from 'next/head';
import Script from 'next/script';

import {noOverlayWorkaroundScript} from './consts';

const GlobalHead = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>

                <meta name="google" content="notranslate"/>
            </Head>

            {process.env.NODE_ENV !== 'production' && (
                // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
                <Script
                    id="noOverlayWorkaroundScript"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{__html: noOverlayWorkaroundScript}}
                />
            )}
        </>
    );
};

export default GlobalHead;
