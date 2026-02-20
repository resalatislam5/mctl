const devUrl: string = 'http://localhost:4041/api';
const prodUrl: string = 'https://mctl-backend.vercel.app/api';

const isDev: boolean = import.meta.env.MODE === 'development';

export const baseQuery = isDev ? devUrl : prodUrl;
