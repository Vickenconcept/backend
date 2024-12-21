"use server";
import { SignupFormSchema } from "@/lib/definitions";
import { LoginPayload, SignupFormState, User } from "@/types";
import http from "@/utils/http";

async function register(state: SignupFormState , payload: FormData) {
  //    return (await http.post('/register', payload)).data;

  const validatedFields = SignupFormSchema.safeParse(payload);

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  try {

    const result = await http.post("/auth/register", payload);
    return { success: true };

  } catch (error: any) {
    console.log(error.message);
  }
}
async function login(payload: LoginPayload) {
  return (await http.post("/auth/login", payload)).data;
}

export { login, register };
