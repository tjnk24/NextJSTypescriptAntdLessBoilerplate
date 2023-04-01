import {Menu} from 'antd';
import {useRouter} from 'next/router';
import React from 'react';

import {MENU_ITEMS} from './consts';

import {topNavigation} from './TopNavigation.module.less';

const TopNavigation = () => {
    const {pathname} = useRouter();

    return (
        <Menu
            className={topNavigation}
            mode="horizontal"
            items={MENU_ITEMS}
            selectedKeys={[pathname]}
        />
    );
};

export default TopNavigation;
