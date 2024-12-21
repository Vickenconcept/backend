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