import EnhancedButton from '__components/EnhancedButton';
import HeadLayout from '__components/HeadLayout';
import {routeManager} from '__utils/routing/routeManager';

import {root, returnToUsersButton} from './Next404.module.less';

const Next404 = () => {
    const onReturnToUsersClick = () => {
        routeManager.goToUsers();
    };

    return (
        <HeadLayout title="Not Found">
            <div className={root}>
                Not Found

                <EnhancedButton
                    buttonProps={{
                        className: returnToUsersButton,
                        onClick: onReturnToUsersClick,
                    }}
                >
                    Return to users page
                </EnhancedButton>
            </div>
        </HeadLayout>
    );
};

export default Next404;
