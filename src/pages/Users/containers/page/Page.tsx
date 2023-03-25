import React from 'react';
import {useSelector} from 'react-redux';

import {tableDataSelector} from '__pages/Users/selectors';

const Page = () => {
    const tableData = useSelector(tableDataSelector);

    console.log('tableData', tableData);

    return (
        <div>
            users
        </div>
    );
};

export default Page;
