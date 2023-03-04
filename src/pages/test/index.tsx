import React from 'react';

import styles from './Test.module.less';

const {testDiv, testClass} = styles;

const Test = () => {
    return (
        <div className={testDiv}>
            test

            <span>
                nested
            </span>

            <span className={testClass}>
                test class
            </span>
        </div>
    );
};

export default Test;
