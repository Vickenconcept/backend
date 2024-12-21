"use server";
import { SignupFormSchema } from "@/lib/definitions";
import { LoginPayload, User } from "@/types";
import http from "@/utils/http";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function createPost(
  state: CreatePostFormState,
  formData: FormData
) {
  const validatedFields = CreatePostFormSchema.safeParse({
    title: formData.get("title"),
    image: formData.get("image"),
    content: formData.get("content"),
  });

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  if (formData.get("author") === "" || formData.get("author") === undefined) {
    return { noAuthor: true };
  }

  try {
    const res = await Axios.post("/posts", {
      ...validatedFields.data,
      author: formData.get("author"),
    });

    return { success: true };
  } catch (error: any) {
    console.log(error.message);
  }
}

async function register(payload: User) {
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
