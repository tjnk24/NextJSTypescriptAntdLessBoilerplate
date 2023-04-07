import {
    ButtonProps,
    PopconfirmProps,
    TooltipProps,
} from 'antd';

import {FCWithChildren} from '__utils/types';

export interface OwnProps {
    tooltipProps?: TooltipProps;
    buttonProps?: ButtonProps;
    popconfirmProps?: Omit<PopconfirmProps, 'title'> & {title?: string};
    withSpinner?: boolean;
}

export type Props = FCWithChildren<OwnProps>;
