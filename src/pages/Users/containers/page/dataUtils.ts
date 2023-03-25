import {GetStaticProps} from 'next';

import {tableDataLoader} from '../../loaders/usersTableDataLoader';

export const getStaticProps: GetStaticProps = () => {
    void tableDataLoader();

    return {props: {}};
};
