import {apiInstance} from '__pages/Users/api/usersApi';
import {actions} from '__pages/Users/slices';
import {UsersApiGetResponse} from '__pages/Users/types';
import {ServerSideProps} from '__store/types';
import {createServerLoader} from '__utils/api/createServerLoader';
import {responseErrorHandler} from '__utils/api/responseErrorHandler';

export const getStaticProps = createServerLoader(apiInstance.get);

export const onSuccess = ({response, error}: ServerSideProps<UsersApiGetResponse>) => {
    if (error) {
        return responseErrorHandler(error);
    }

    actions.usersTableData.success(response);
};
