import {Button} from 'antd';
import React from 'react';

import {routeManager} from '__utils/routing/routeManager';

import {root, returnToUsersButton} from './Next404.module.less';

const Page404 = () => {
    const onReturnToUsersClick = () => {
        routeManager.goToUsers();
    };

    return (
        <div className={root}>
            Not Found

            <Button
                className={returnToUsersButton}
                onClick={onReturnToUsersClick}
            >
                Return to users page
            </Button>
        </div>
    );
};

export default Page404;
