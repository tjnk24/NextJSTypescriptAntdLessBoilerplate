import {Typography} from 'antd';
import {ColumnsType} from 'antd/lib/table';

import {makeTypedName} from '__utils/makeTypedName';

import {UserDto} from '../../types';

export const COLUMNS: ColumnsType<UserDto> = [
    {
        title: 'Name',
        dataIndex: makeTypedName<UserDto>('name'),
    },
    {
        title: 'Email',
        dataIndex: makeTypedName<UserDto>('email'),
    },
    {
        title: 'Phone',
        dataIndex: makeTypedName<UserDto>('phone'),
    },
    {
        title: 'Home address',
        render: (_, {address}) => (
            <Typography.Text>
                {`${address?.city}, ${address?.street}, ${address?.zipcode}`}
            </Typography.Text>
        ),
    },
    {
        title: 'Username',
        dataIndex: makeTypedName<UserDto>('username'),
    },
    {
        title: 'Website',
        render: (_, {website}) => (
            <Typography.Link
                href={`https://${website}`}
                target="_blank"
            >
                {website}
            </Typography.Link>
        ),
    },
];
