import {CommonStore, StoreState} from '__store/types';

import {USERS_TABLE_DATA} from './consts';

export type GeoLocation = {
    lat: string;
    lng: string;
}

export type Address = {
    city: string;
    geo: GeoLocation;
    street: string;
    suite: string;
    zipcode: string;
}

export type Company = {
    bs: string;
    catchPhrase: string;
    name: string;
}

export type UserDto = {
    id: number;
    email: string;
    address: Address;
    company: Company;
    name: string;
    phone: string;
    username: string;
    website: string;
}

export type UsersApiGetResponse = UserDto[];

export type UsersStoreState = CommonStore & {
    [USERS_TABLE_DATA]: StoreState<UsersApiGetResponse>;
};
