import {Menu} from 'antd';
import React from 'react';
import {useSelector} from 'react-redux';

import {pathnameSelector} from '__selectors/routerSelectors';

import {MENU_ITEMS} from './consts';

const TopNavigation = () => {
    const pathname = useSelector(pathnameSelector);

    return (
        <Menu
            mode="horizontal"
            items={MENU_ITEMS}
            selectedKeys={[pathname]}
        />
    );
};

export default TopNavigation;
