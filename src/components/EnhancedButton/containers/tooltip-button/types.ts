import {ButtonProps, TooltipProps} from 'antd';

import {FCWithChildren} from '__utils/types';

export interface OwnProps {
    tooltipProps: TooltipProps;
    buttonProps: ButtonProps;
    withSpinner: boolean;
}

export type Props = FCWithChildren<OwnProps>;
