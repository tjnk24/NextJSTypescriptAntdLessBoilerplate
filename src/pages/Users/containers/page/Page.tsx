import {Table} from 'antd';
import {useSelector} from 'react-redux';

import {COLUMNS} from './consts';
import {tableDataSelector} from '../../selectors';
import {UserDto} from '../../types';

const Page = () => {
    const tableData = useSelector(tableDataSelector);

    return (
        <Table<UserDto>
            dataSource={tableData}
            rowKey={item => item?.id}
            columns={COLUMNS}
            pagination={false}
            scroll={{x: true}}
        />
    );
};

export default Page;
