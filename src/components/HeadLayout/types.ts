import {FCWithChildren} from '__utils/types';

interface OwnProps {
    title: string;
    ogImageUrl?: string;
    description?: string;
}

export type Props = FCWithChildren<OwnProps>;
