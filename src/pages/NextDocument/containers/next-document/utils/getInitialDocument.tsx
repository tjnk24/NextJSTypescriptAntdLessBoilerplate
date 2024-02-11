import {
    createCache,
    StyleProvider,
    extractStyle,
} from '@ant-design/cssinjs';
import Document, {DocumentContext} from 'next/document';

export const getInitialProps = async (ctx: DocumentContext) => {
    const cache = createCache();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: App => props => (
                <StyleProvider cache={cache}>
                    <App {...props}/>
                </StyleProvider>
            ),
        });

    const initialProps = await Document.getInitialProps(ctx);
    const style = extractStyle(cache, true);

    return {
        ...initialProps,
        styles: (
            <>
                {initialProps.styles}

                <style dangerouslySetInnerHTML={{__html: style}}/>
            </>
        ),
    };
};
