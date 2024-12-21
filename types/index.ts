export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt?: Date;
}
export interface LoginPayload {
  email: string;
  password: string;
}

export type SignupFormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
        role?: string[];
      };
      message?: string;
    }
  | undefined;
