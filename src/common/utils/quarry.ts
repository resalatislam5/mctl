const devUrl: string = 'http://localhost:4041/api/v1';
const prodUrl: string = 'https://mctl-backend.vercel.app/api/v1';

const isDev: boolean = import.meta.env.MODE === 'development';

export const baseQuery = isDev ? devUrl : prodUrl;
