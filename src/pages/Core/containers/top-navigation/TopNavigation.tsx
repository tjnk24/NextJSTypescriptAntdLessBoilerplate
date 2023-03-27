import {Menu} from 'antd';
import {useRouter} from 'next/router';
import React from 'react';

import {MENU_ITEMS} from './consts';

const TopNavigation = () => {
    const {pathname} = useRouter();

    return (
        <Menu
            mode="horizontal"
            items={MENU_ITEMS}
            selectedKeys={[pathname]}
        />
    );
};

export default TopNavigation;
