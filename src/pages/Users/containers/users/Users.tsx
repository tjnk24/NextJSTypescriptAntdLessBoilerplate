import {Button, Table} from 'antd';
import {useSelector} from 'react-redux';

import HeadLayout from '__components/HeadLayout';

import {COLUMNS} from './consts';
import {usersTableDataLoader} from '../../loaders/usersTableDataLoader';
import {tableDataIsPendingSelector, tableDataSelector} from '../../selectors';
import {UserDto} from '../../types';

const Users = () => {
    const tableData = useSelector(tableDataSelector);
    const tableDataIsPending = useSelector(tableDataIsPendingSelector);

    return (
        <HeadLayout title="Users">
            <div>
                <Button onClick={usersTableDataLoader}>
                    Reload table
                </Button>

                <Table<UserDto>
                    dataSource={tableData}
                    loading={tableDataIsPending}
                    rowKey={({id}) => id}
                    columns={COLUMNS}
                    pagination={false}
                    scroll={{x: true}}
                />
            </div>
        </HeadLayout>
    );
};

export default Users;
