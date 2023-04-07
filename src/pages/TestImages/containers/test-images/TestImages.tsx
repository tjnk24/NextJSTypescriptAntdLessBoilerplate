import {Typography} from 'antd';
import Image from 'next/image';
import React from 'react';

import HeadLayout from '__components/HeadLayout';

import {root} from './TestImages.module.less';

const TestImages = () => {
    return (
        <HeadLayout title="Test Images">
            <div className={root}>
                <Image
                    src="/testJpgImage.jpg"
                    alt="test jpg image"
                    width={260}
                    height={200}
                    priority
                />

                <Image
                    src="/testSvgImage.svg"
                    alt="test svg image"
                    width={180}
                    height={37}
                    priority
                />
            </div>

            <Typography.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem quos minima quo dolore reiciendis distinctio inventore saepe dicta molestias earum.
            </Typography.Text>
        </HeadLayout>
    );
};

export default TestImages;
