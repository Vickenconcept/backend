"use server";

import { LoginPayload, User } from "@/types";
import http from "@/utils/http";

async function register(payload: User) {
  //    return (await http.post('/register', payload)).data;
  try {
    const result = await http.post("/auth/register", payload);
    console.log(result);
  } catch (error: any) {
    console.log(error.message);
    
  }
}
async function login(payload: LoginPayload) {
  return (await http.post("/login", payload)).data;
}

export { login, register };
