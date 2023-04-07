import {Tooltip, TooltipProps} from 'antd';

import {Props} from './types';
import CommonButton from '../common-button';

const TooltipButton: Props = ({
    buttonProps,
    tooltipProps,
    children,
    withSpinner,
}) => {
    const {
        trigger = ['hover', 'click'],
        ...tooltipPropsRest
    } = tooltipProps || {} as TooltipProps;

    const {
        ...buttonPropsRest
    } = buttonProps;

    return (
        <Tooltip
            {...tooltipPropsRest}
            trigger={trigger}
        >
            {/* Needs to trigger tooltip */}

            <div></div>

            <CommonButton
                {...buttonPropsRest}
                withSpinner={withSpinner}
            >
                {children}
            </CommonButton>
        </Tooltip>
    );
};

export default TooltipButton;
