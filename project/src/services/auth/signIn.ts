import { supabase } from "@/lib/supabaseClient";
import { signInType } from "@/types/auth/login.type";

export async function signIn({ email, password }: signInType) {
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return response;
}
