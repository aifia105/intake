export type UserData = {
  id: string;
  email: string;
  name: string;
  age: number;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterCredentials = {
  email: string;
  password: string;
  name: string;
  age: number;
};

export type RegisterResponse = {
  message: string;
};
