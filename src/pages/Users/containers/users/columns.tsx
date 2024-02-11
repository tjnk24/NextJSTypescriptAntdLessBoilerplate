import {Typography} from 'antd';
import {ColumnsType} from 'antd/lib/table';

import {makeTypedName} from '__utils/makeTypedName';

import {UserDto} from '../../types';

import {textItem} from './Users.module.less';

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
            <Typography.Text className={textItem}>
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
                className={textItem}
            >
                {website}
            </Typography.Link>
        ),
    },
];
