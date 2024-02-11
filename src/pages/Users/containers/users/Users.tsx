import {Table} from 'antd';
import {useSelector} from 'react-redux';

import EnhancedButton from '__components/EnhancedButton';
import HeadLayout from '__components/HeadLayout';

import {usersTableDataLoader} from '../../loaders/usersTableDataLoader';
import {tableDataIsPendingSelector, tableDataSelector} from '../../selectors';
import {UserDto} from '../../types';

import {COLUMNS} from './columns';

import {reloadButton} from './Users.module.less';

const Users = () => {
    const tableData = useSelector(tableDataSelector);
    const tableDataIsPending = useSelector(tableDataIsPendingSelector);

    return (
        <HeadLayout title="Users">
            <div>
                <EnhancedButton
                    buttonProps={{
                        className: reloadButton,
                        onClick: usersTableDataLoader,
                    }}
                >
                    Reload table
                </EnhancedButton>

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
