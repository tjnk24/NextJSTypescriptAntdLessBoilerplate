import {MinusOutlined, PlusOutlined} from '@ant-design/icons';
import {Typography} from 'antd';
import {useSelector} from 'react-redux';

import EnhancedButton from '__components/EnhancedButton';
import HeadLayout from '__components/HeadLayout';
import {testGlobalCounterCountSelector} from '__selectors/testGlobalCounterSelectors';
import {commonActions} from '__store/actions';
import {routeManager} from '__utils/routing/routeManager';

import {container} from './TestPage.module.less';

const TestPage = () => {
    const globalCount = useSelector(testGlobalCounterCountSelector);

    const onIncrementClick = () => {
        commonActions.testGlobalCounter.setCount(globalCount + 1);
    };

    const onDecrementClick = () => {
        commonActions.testGlobalCounter.setCount(globalCount - 1);
    };

    return (
        <HeadLayout title="Test Page">
            <Typography.Title level={3}>
                Testing Global Reducer
            </Typography.Title>

            <div className={container}>
                <Typography.Text>
                    Global Count: {globalCount}
                </Typography.Text>

                <EnhancedButton
                    buttonProps={{
                        onClick: onIncrementClick,
                        icon: <PlusOutlined/>,
                    }}
                />

                <EnhancedButton
                    buttonProps={{
                        onClick: onDecrementClick,
                        icon: <MinusOutlined/>,
                    }}
                />
            </div>

            <EnhancedButton
                buttonProps={{
                    onClick: () => routeManager.goToTestPageNestedRoute(),
                }}
            >
                Go to Nested Route
            </EnhancedButton>
        </HeadLayout>
    );
};

export default TestPage;
