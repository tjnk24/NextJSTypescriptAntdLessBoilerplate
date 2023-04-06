import Head from 'next/head';

import {Props} from './types';

const HeadLayout: Props = ({children, title, description, ogImageUrl}) => {
    return (
        <>
            <Head>
                <title>{`Next Boilerplate - ${title}`}</title>

                <meta name="description" content={description}/>

                <meta
                    property="og:image"
                    itemProp="image"
                    content={ogImageUrl}
                />

                <meta name="twitter:card" content="summary_large_image"/>

                {description && <meta property="og:description" content={description}/>}
            </Head>

            {children}
        </>
    );
};

export default HeadLayout;
