export interface Error400Response {
    message: string;
}

export type CustomErrors = {
    [key: number]: {
        action: (error: unknown | any) => void;
    };
}

export interface ResponseErrorhandlerOptions {
    customErrors: CustomErrors;
}
