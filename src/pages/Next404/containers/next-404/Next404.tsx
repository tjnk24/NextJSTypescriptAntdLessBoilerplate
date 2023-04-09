import {Typography} from 'antd';

import EnhancedButton from '__components/EnhancedButton';
import HeadLayout from '__components/HeadLayout';
import {routeManager} from '__utils/routing/routeManager';

import {root} from './Next404.module.less';

const Next404 = () => {
    const onReturnToUsersClick = () => {
        routeManager.goToUsers();
    };

    return (
        <HeadLayout title="Not Found">
            <div className={root}>
                <Typography.Title>
                    Not Found
                </Typography.Title>

                <EnhancedButton
                    buttonProps={{
                        onClick: onReturnToUsersClick,
                        size: 'large',
                    }}
                >
                    Return to users page
                </EnhancedButton>
            </div>
        </HeadLayout>
    );
};

export default Next404;
