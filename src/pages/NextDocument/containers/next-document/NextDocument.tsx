import {
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document';

import {getInitialProps} from './utils/getInitialDocument';

const NextDocument = () => {
    return (
        <Html lang="en">
            <Head/>

            <body>
                <Main/>

                <NextScript/>
            </body>
        </Html>
    );
};

NextDocument.getInitialProps = getInitialProps;

export default NextDocument;
