import {MinusOutlined, PlusOutlined} from '@ant-design/icons';
import {Typography, Button} from 'antd';
import {useSelector} from 'react-redux';

import HeadLayout from '__components/HeadLayout';
import {testGlobalCounterCountSelector} from '__selectors/testGlobalCounterSelectors';
import {commonActions} from '__store/actions';

import {container, test} from './TestPage.module.less';

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
            <div>
                <Typography.Text>
                    Global Count: {globalCount}
                </Typography.Text>

                <Button
                    onClick={onIncrementClick}
                    icon={<PlusOutlined/>}
                />

                <Button
                    onClick={onDecrementClick}
                    icon={<MinusOutlined/>}
                />
            </div>

            <div className={container}>
                <span className={test}>test page</span>
            </div>
        </HeadLayout>
    );
};

export default TestPage;
