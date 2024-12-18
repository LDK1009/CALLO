import { supabase } from "@/lib/supabaseClient";
import { signInType } from "@/types/auth/login.type";

export async function signIn({ email, password }: signInType) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return error;
  }
}
