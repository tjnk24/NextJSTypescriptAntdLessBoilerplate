import {
    ButtonProps,
    PopconfirmProps,
    TooltipProps,
} from 'antd';

import {FCWithChildren} from '__utils/types';

export interface OwnProps {
    buttonProps: ButtonProps;
    popconfirmProps: Omit<PopconfirmProps, 'title'> & {title?: string};
    tooltipProps?: TooltipProps;
    withSpinner: boolean;
}

export type Props = FCWithChildren<OwnProps>;
