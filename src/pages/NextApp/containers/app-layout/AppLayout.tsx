import {FCWithChildren} from '__utils/types';

import Preloader from '../preloader';
import TopNavigation from '../top-navigation';

import {root, contentWrap} from './AppLayout.module.less';

const AppLayout: FCWithChildren = ({children}) => {
    return (
        <div className={root}>
            <TopNavigation/>

            <Preloader/>

            <div className={contentWrap}>
                {children}
            </div>
        </div>
    );
};

export default AppLayout;
