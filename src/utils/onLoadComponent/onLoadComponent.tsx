import {ComponentType, PureComponent} from 'react';

import {CreateOnLoadComponentParams} from './types';

export const onLoadComponent = ({onLoad, onDispose}: CreateOnLoadComponentParams) => {
    return (Component: ComponentType) => {

        class OnLoadComponent extends PureComponent {
            componentDidMount() {
                onLoad && void onLoad();
            }

            componentWillUnmount() {
                onDispose && void onDispose();
            }

            render() {
                return <Component/>;
            }
        }

        return OnLoadComponent;
    };
};
