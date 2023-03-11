import {Menu} from 'antd';
import React from 'react';
// import {useSelector} from 'react-redux';
// import {Link} from 'react-router-dom';

import {MENU_ITEMS} from './consts';
// import {pathnameSelector} from '__selectors/routerSelectors';

const TopNavigation = () => {
    // const pathname = useSelector(pathnameSelector);

    return (
        <Menu
            mode="horizontal"
            items={MENU_ITEMS}
            // selectedKeys={[pathname.replace('/', '')]}
        />
    );
};

export default TopNavigation;
