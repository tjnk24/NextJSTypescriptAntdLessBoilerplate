import {ROUTES} from '__routes';

import {routerPush} from '../routing/routerPush';

class RouteManager {
    public goToHome = (isHref?: boolean) => {
        return routerPush({path: ROUTES.HOME.INDEX}, isHref);
    };

    public goToUsers = (isHref?: boolean) => {
        return routerPush({path: ROUTES.USERS.INDEX}, isHref);
    };

    public goToTestPage = (isHref?: boolean) => {
        return routerPush({path: ROUTES.TEST_PAGE.INDEX}, isHref);
    };

    public goToTestPageNestedRoute = (isHref?: boolean) => {
        return routerPush({path: ROUTES.TEST_PAGE.NESTED_ROUTE.INDEX}, isHref);
    };

    public goToTestImages = (isHref?: boolean) => {
        return routerPush({path: ROUTES.TEST_IMAGES.INDEX}, isHref);
    };

    public goToNotFound = (isHref?: boolean) => {
        return routerPush({path: ROUTES.NOT_FOUND.INDEX}, isHref);
    };
}

export const routeManager = new RouteManager();
