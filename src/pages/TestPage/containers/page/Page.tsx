import {MinusOutlined, PlusOutlined} from '@ant-design/icons';
import {Typography, Button} from 'antd';
import {useSelector} from 'react-redux';

import {testGlobalCounterCountSelector} from '__selectors/testGlobalCounterSelectors';
import {commonActions} from '__store/storeService';

import {container, test} from './Page.module.less';

const Page = () => {
    const globalCount = useSelector(testGlobalCounterCountSelector);

    const onIncrementClick = () => {
        commonActions.testGlobalCounter.setCount(globalCount + 1);
    };

    const onDecrementClick = () => {
        commonActions.testGlobalCounter.setCount(globalCount - 1);
    };

    return (
        <>
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
        </>
    );
};

export default Page;
