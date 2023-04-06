import {Button} from 'antd';
import React from 'react';

import HeadLayout from '__components/HeadLayout';
import {routeManager} from '__utils/routing/routeManager';

import {root, returnToUsersButton} from './Next404.module.less';

const Page404 = () => {
    const onReturnToUsersClick = () => {
        routeManager.goToUsers();
    };

    return (
        <HeadLayout title="Not Found">
            <div className={root}>
                Not Found

                <Button
                    className={returnToUsersButton}
                    onClick={onReturnToUsersClick}
                >
                    Return to users page
                </Button>
            </div>
        </HeadLayout>
    );
};

export default Page404;
