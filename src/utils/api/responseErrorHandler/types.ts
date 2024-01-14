export interface Error400Response {
    message: string;
}

export type CustomErrors = {
    [key: number]: {
        action: (error: any) => void;
    };
}

export interface ResponseErrorhandlerOptions {
    customErrors: CustomErrors;
}
