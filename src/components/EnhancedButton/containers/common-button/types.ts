import {ButtonProps} from 'antd';

import {FCWithChildren} from '__utils/types';

export type OwnProps = ButtonProps & {
    withSpinner: boolean;
};

export type Props = FCWithChildren<OwnProps>;
