import {ItemType} from 'antd/es/menu/hooks/useItems';

import {ROUTES} from '__routes';

export const MENU_ITEMS: ItemType[] = [
    {
        key: ROUTES.USERS.INDEX,
        label: 'Users',
        onClick: () => null, // TODO: допилить роутинг
    },
    {
        key: ROUTES.TEST_PAGE.INDEX,
        label: 'Test Page',
        onClick: () => null, // TODO: допилить роутинг
    },
];
