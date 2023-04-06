import {FC, ReactNode} from 'react';

export type AsyncRequest<T> = () => Promise<T>;

export type FCWithChildren<T = unknown> = FC<{children?: ReactNode} & T>;
