import {Stringifiable} from 'query-string';

export interface RouterPushData<T>{
    path: string;
    queries?: {[p in keyof T]: Stringifiable | Stringifiable[]};
}
