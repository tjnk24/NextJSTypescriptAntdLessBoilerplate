declare global {
    namespace NodeJS {
      export interface ProcessEnv {
        NEXT_PUBLIC_BACKEND_URL: string;
        NODE_ENV: 'development' | 'production';
        PORT: string;
      }
    }
}

export {};
