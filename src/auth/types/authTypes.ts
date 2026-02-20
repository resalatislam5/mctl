export type LoginTypes = {
  email: string;
  password: string;
};

export type LoginResponseType = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role_id: string;
  };
};
